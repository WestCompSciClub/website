import { useEffect, useRef, useState } from "react";
import { Accordion, Alert, Button, CloseButton, Form, InputGroup } from "react-bootstrap";
import RewardComponent from "./reward";
import { postMember, calculateStats } from "../../utils";
import Loading from "../loading";

export default function MemberComponent({ member, position }) {
    const [showAlert, setShowAlert] = useState(false);
    const [alertElem, setAlertElem] = useState(null);
    const [showLoading, setShowLoading] = useState(false);
    const [rewardsElems, setRewardsElems] = useState(false);

    const idRewards = (rewards) => rewards.map((r) => ({ ...r, uuid: crypto.randomUUID() }));

    const localRewards = useRef(idRewards(member.rewards));
    const savedRewards = useRef(idRewards(member.rewards));

    function handleSubmit(event) {
        setShowLoading(true);

        event.preventDefault();
        event.stopPropagation();

        const formData = Object.fromEntries((new FormData(event.currentTarget)).entries());

        const updateDoc = {
            auth: localStorage.getItem("token"),
            _id: member._id,
            name: formData.memberName,
            rewards: [],
        }

        let errors = false;
        let i = 0;
        while (true) {
            let timestamp = formData[`${i}-timestamp`];
            if (!timestamp) break;

            timestamp = parseInt(timestamp);
            let reason = formData[`${i}-reason`];
            let points = parseInt(formData[`${i}-points`]);
            let type = formData[`${i}-type`];

            if (type == "meeting-attended") {
                reason = "Meeting Attended";
                points = 2;
            } else if (type == "hackathon-submission") {
                reason = "Hackathon Submission";
            } else if (type == "hackathon-win") {
                points = 2;
            }

            if (!reason || !points || !type) {
                errors = true;
                i++;
                continue;
            };

            updateDoc.rewards.push({
                reason,
                points,
                timestamp,
                type,
            });
            i++;
        }

        postMember(updateDoc).then((statusCode) => {
            setShowLoading(false);
            if (statusCode == 401) {
                setAlertElem(
                    <Alert variant="danger" onClose={() => setShowAlert(false)} dismissible>
                        <p>Invalid password, changes not submitted.</p>
                    </Alert>
                );
            } else {
                if (errors) {
                    setAlertElem(
                        <Alert variant="warning" onClose={() => setShowAlert(false)} dismissible>
                            <p>Some rewards were not submitted because not all fields were filled out.</p>
                        </Alert>
                    );
                } else {
                    setAlertElem(
                        <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
                            <p>Your changes have been submitted!</p>
                        </Alert>
                    );
                }

                savedRewards.current = updateDoc.rewards;
            }
            setShowAlert(true);
        });
    }

    function addReward() {
        localRewards.current.push({
            reason: null,
            points: null,
            timestamp: Date.now(),
            type: null,
            uuid: crypto.randomUUID(),
        });
        setRewardsElems(mapRewardsToElems(localRewards.current));
    }

    function deleteReward(index) {
        localRewards.current.splice(index, 1);
        setRewardsElems(mapRewardsToElems(localRewards.current));
    }

    function undoChanges() {
        if (savedRewards.current.length > 0) {
            setRewardsElems(false);
        } else {
            setRewardsElems(mapRewardsToElems(savedRewards.current));
        }
    }

    function createRewardComponent(reward, key) {
        return (
            <div className="reward-container" key={`${member._id}-${reward.uuid}`}>
                <RewardComponent reward={reward} id={key} />
                <div className="delete-reward"><CloseButton onClick={() => deleteReward(key)} /></div>
            </div>
        );
    }

    function mapRewardsToElems(rewards) {
        let i = -1;
        return rewards.map(r => {
            i++;
            let j = i;
            return createRewardComponent(r, j);
        });
    }

    useEffect(() => {
        if (localRewards.current.length == 0) {
            return setRewardsElems(
                <p className="text-center" style={{ flexBasis: "100%" }}>No rewards yet.</p>
            )
        }

        let sortedRewards = localRewards.current.sort((a, b) => {
            if (a.timestamp < b.timestamp) return -1;
            if (a.timestamp > b.timestamp) return 1;
            else return 0;
        });

        savedRewards.current = sortedRewards;

        setRewardsElems(mapRewardsToElems(sortedRewards));
    }, []);

    let stats = calculateStats(savedRewards.current);

    return (
        <Accordion.Item eventKey={member._id} key={member._id}>
            <Accordion.Header>#{position} - {member.name}</Accordion.Header>

            <Accordion.Body className="member-info">
                <p className="member-points">Total Points: {stats.points} | Total Wins: {stats.wins}</p>
                <p className="member-id">ID: <code>{member._id}</code></p>

                <Form noValidate onSubmit={handleSubmit}>
                    <InputGroup>
                        <InputGroup.Text>Change Name</InputGroup.Text>
                        <Form.Control type="text" name="memberName" defaultValue={member.name} />
                    </InputGroup>
                    <p className="rewards-header">Rewards</p>
                    <div className="rewards-container">
                        {rewardsElems}
                    </div>

                    <div className="buttons-container">
                        <Button variant="primary" onClick={() => addReward()}><i className="fa-solid fa-circle-plus"></i> Add Reward</Button>
                        <Button variant="danger" onClick={() => undoChanges()}><i className="fa-solid fa-rotate-left"></i> Undo Changes</Button>
                        <Button variant="success" type="submit"><i className="fa-solid fa-floppy-disk"></i> Save Changes</Button>
                    </div>

                    {showLoading ?
                        <Loading></Loading>
                        :
                        <></>
                    }

                    {showAlert ?
                        alertElem
                        :
                        <></>
                    }

                </Form>
            </Accordion.Body>
        </Accordion.Item>
    );
}