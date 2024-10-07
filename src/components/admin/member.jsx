import { useState } from "react";
import { Accordion, Button, CloseButton, Form, InputGroup } from "react-bootstrap";
import RewardComponent from "./reward";

export default function MemberComponent({ member, position }) {
    const [validated, setValidated] = useState(false);

    function handleSubmit(event) {
        event.preventDefault();
        const form = event.currentTarget;

        const formData = new FormData(event.currentTarget),
                formDataObj = Object.fromEntries(formData.entries())
          console.log(formDataObj)

        // if (form.checkValidity() == false) {
        //     event.preventDefault();
        //     event.stopPropagation();
        // }
    
        // setValidated(true);
    }

    function addReward() {
        rewards.push({
            reason: null,
            points: null,
            timestamp: Date.now(),
        });
        updateRewards();
    }

    function deleteReward(index) {
        rewards.splice(index, 1);
        updateRewards();
    }

    var rewards = member.rewards;

    const [rewardsElems, setRewardsElems] = useState(false);
    function updateRewards() {
        let i = -1;
        setRewardsElems(rewards.map(r => {
            i++;
            return (
                <div className="reward-container">
                    <RewardComponent reward={r} />
                    <div className="delete-reward"><CloseButton onClick={() => deleteReward(i)} /></div>
                </div>
            );
        }));
    }

    if (!rewardsElems) updateRewards();

    return (
        <Accordion.Item eventKey={member._id}>
            <Accordion.Header>#{position} - {member.name}</Accordion.Header>

            <Accordion.Body className="member-info">
                <p className="member-points">Total Points: {member.points}</p>
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
                        <Button variant="primary" onClick={addReward}><i className="fa-solid fa-circle-plus"></i> Add Reward</Button>
                        <Button variant="success" type="submit"><i className="fa-solid fa-floppy-disk"></i> Save Changes</Button>
                    </div>
                </Form>
            </Accordion.Body>
        </Accordion.Item>
    );
}