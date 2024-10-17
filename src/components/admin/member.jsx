import { useEffect, useState } from "react";
import { Accordion, Alert, Button, CloseButton, Form, InputGroup } from "react-bootstrap";
import RewardComponent from "./reward";
import { postMember, calculateStats } from "../../utils";
import Loading from "../loading";

export default function MemberComponent({ member, position }) {
    const [showAlert, setShowAlert] = useState(false);
    const [alertElem, setAlertElem] = useState(null);
    const [showLoading, setShowLoading] = useState(false);
    const [rewards, setRewards] = useState(member.rewards);
    const [savedRewards, setSavedRewards] = useState(member.rewards);
    const [rewardsElems, setRewardsElems] = useState(false);

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
                setAlertElem(
                    <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
                        <p>Your changes have been submitted!</p>
                    </Alert>
                );

                setSavedRewards(updateDoc.rewards);
            }
            setShowAlert(true);
        });
    }

    function addReward() {
        var clone = structuredClone(rewards);
        clone.push({
            reason: null,
            points: null,
            timestamp: Date.now(),
        });
        setRewards(clone);
    }

    function deleteReward(index) {
        var clone = structuredClone(rewards);
        clone.splice(index, 1);
        setRewards(clone);
    }
    
    function undoChanges() {
        setRewards(savedRewards);
    }

    useEffect(() => {
        if (rewards.length == 0) {
            return setRewardsElems(
                <p className="text-center" style={{ flexBasis: "100%" }}>No rewards yet.</p>
            )
        }

        let sortedRewards = rewards.sort((a, b) => {
            if (a.timestamp < b.timestamp) return -1;
            if (a.timestamp > b.timestamp) return 1;
            else return 0;
        });

        let i = -1;
        setRewardsElems(sortedRewards.map(r => {
            i++;
            let j = i;
            let uuid = crypto.randomUUID();

            return (
                <div className="reward-container" key={`${member._id}-${uuid}`}>
                    <RewardComponent reward={r} id={j} />
                    <div className="delete-reward"><CloseButton onClick={() => deleteReward(j)} /></div>
                </div>
            );
        }));
    }, [rewards]);

    let stats = calculateStats(savedRewards);

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