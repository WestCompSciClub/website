import Navbar from "../components/navbar";

export default function Error404() {
    return (
        <div className="app">
            <Navbar />
            
            <h1>Error 404</h1>
            <p>Sorry, that page doesn't exist.</p>
        </div>
    )
}