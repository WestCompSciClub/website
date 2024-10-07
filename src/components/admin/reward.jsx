import { Col, Form, InputGroup, Row } from "react-bootstrap";

export default function RewardComponent({ reward }) {
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
                        name="reason"
                    />
                </Form.Group>

                <Form.Group as={Col} md="4">
                    <Form.Label>Points</Form.Label>
                    <Form.Control
                        required
                        type="number"
                        defaultValue={reward.points}
                        name="points"
                    />
                </Form.Group>
            </Row>
        </>
    );
}