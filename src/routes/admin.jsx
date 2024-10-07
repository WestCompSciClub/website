import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Helmet } from 'react-helmet';
import { fetchMembers } from "../utils";
import Loading from "../components/loading";
import { useEffect, useState } from "react";
import { Accordion, Form, InputGroup } from "react-bootstrap";
import MemberComponent from "../components/admin/member";
import "../css/admin.css";

export default function AdminDashboard() {
    const [accordion, setAccordion] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [password, setPassword] = useState("");

    function makeAccordion(entries) {
        return (
            <Accordion defaultActiveKey={[]} alwaysOpen>
                {entries}
            </Accordion>
        );
    }

    function makeAccordionEntry(member, position) {
        return (
            <MemberComponent member={member} position={position} />
        );
    }

    useEffect(() => {
        fetchMembers(makeAccordionEntry).then((entries) => {
            if (entries) setAccordion(makeAccordion(entries));
            setLoading(false);
        });
    }, []);

    return (
        <div className="app">
            <Helmet>
                <title>Computer Science Club - Admin Dashboard</title>
            </Helmet>

            <Navbar />

            <div className="page admin">
                <h1>ADMIN DASHBOARD</h1>

                <p className="text-center">Password is required to make changes to the database.</p>

                <InputGroup>
                    <InputGroup.Text>Password</InputGroup.Text>
                    <Form.Control
                        onChange={setPassword}
                        placeholder="Type password here..."
                    />
                </InputGroup>

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
