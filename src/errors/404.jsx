import Button from "react-bootstrap/Button";
import Navbar from "../components/navbar";

export default function Error404() {
    return (
        <div className="app">
            <Navbar />
            
            <div className="page infopage">
                <h1>ERROR 404</h1>
                <p className="text-center">Sorry, that page doesn't exist.</p>

                <Button href="/" variant="primary">Return Home</Button>
            </div>
        </div>
    )
}