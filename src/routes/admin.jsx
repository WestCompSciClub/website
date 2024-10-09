import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Helmet } from 'react-helmet';
import { fetchMembers } from "../utils";
import Loading from "../components/loading";
import { useEffect, useState } from "react";
import { Accordion, Form, InputGroup, Button, Modal } from "react-bootstrap";
import MemberComponent from "../components/admin/member";
import "../css/admin.css";

export default function AdminDashboard() {
    const [accordion, setAccordion] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [savedPassword, setSavedPassword] = useState("");
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    function makeAccordion(entries) {
        return (
            <Accordion defaultActiveKey={[]} alwaysOpen>
                {entries}
            </Accordion>
        );
    }

    function makeAccordionEntry(member, position) {
        return (
            <MemberComponent key={member._id} member={member} position={position} />
        );
    }

    useEffect(() => {
        setSavedPassword(localStorage.getItem("token"));

        fetchMembers(makeAccordionEntry).then((entries) => {
            if (entries) setAccordion(makeAccordion(entries));
            setLoading(false);
        });
    }, []);

    function handlePassword(event) {
        if (event.target.value.length == 0) return localStorage.removeItem("token");
        localStorage.setItem("token", event.target.value);
    }

    return (
        <div className="app">
            <Helmet>
                <title>Computer Science Club - Admin Dashboard</title>
            </Helmet>

            <Navbar />

            <div className="page admin">
                <h1>ADMIN DASHBOARD</h1>

                <p className="text-center">Password is required to make changes to the database. It will automatically be saved.</p>

                <InputGroup>
                    <InputGroup.Text>Password</InputGroup.Text>
                    <Form.Control
                        onInput={handlePassword}
                        placeholder="Type password here..."
                        type="password"
                        defaultValue={savedPassword}
                    />

                    <Button variant="info" onClick={handleShow}>View Dashboard Guidelines</Button>
                </InputGroup>

                <Modal show={showModal} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Admin Dashboard Guidelines</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <ul>
                            <li>For Hackathon points, please create separate rewards for when the member simply makes a submission (the part that is graded out of 10), and another award if their project earned a category win.</li>
                        </ul>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>

                {isLoading ?
                    (
                        <Loading></Loading>
                    ) : (
                        <>
                            {accordion}
                        </>
                    )
                }
            </div>

            <Footer />
        </div>
    );
}
