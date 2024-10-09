import { useEffect, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";

export default function RewardComponent({ reward, id }) {
    function calculateDefaultValue(type) {
        var obj = { reason: null, points: null };
        if (type == "meeting-attended") {
            obj = { reason: "Meeting Attended", points: 2 };
        } else if (type == "hackathon-submission") {
            obj = { reason: "Hackathon Submission", points: null };
        } else if (type == "hackathon-win") {
            obj = { reason: null, points: 2 };
        }
        return obj;
    }

    const [ defaultValue, setDefaultValue ] = useState({ reason: null, points: null });

    const onChange = (event) => {
        var obj = calculateDefaultValue(event.target.value);
        setDefaultValue(obj);
    }

    useEffect(() => {
        if (reward.type) setDefaultValue(calculateDefaultValue(reward.type));
    }, [])

    return (
        <>
            <Row id={reward.timestamp}>
                <Form.Group as={Col} md="8">
                    <Form.Label>Reason</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder=""
                        defaultValue={reward.reason}
                        name={id + "-reason"}
                        value={defaultValue.reason}
                        disabled={Boolean(defaultValue.reason)}
                    />
                </Form.Group>

                <Form.Group as={Col} md="4">
                    <Form.Label className="points-label">Points</Form.Label>
                    <Form.Control
                        required
                        type="number"
                        defaultValue={reward.points}
                        name={id + "-points"}
                        value={defaultValue.points}
                        disabled={Boolean(defaultValue.points)}
                    />
                </Form.Group>

                <Form.Control type="hidden" name={id + "-timestamp"} value={reward.timestamp || Date.now()} />
            </Row>

            <Row>
                <Form.Group as={Col}>
                    <Form.Label className="tags">Reward Type</Form.Label>
                    <Form.Select defaultValue={reward.type} required name={id + "-type"} onChange={onChange}>
                        <option value="other">None/Not Listed Here</option>
                        <option value="meeting-attended">Meeting Attended</option>
                        <option value="hackathon-submission">Hackathon Submission</option>
                        <option value="hackathon-win">Hackathon Category Win</option>
                    </Form.Select>
                </Form.Group>
            </Row>
        </>
    );
}