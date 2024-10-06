import '../css/app.css';
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Helmet } from 'react-helmet';

export default function Home() {
    return (
        <div className="app">
            <Helmet>
                <title>Computer Science Club</title>
                <img src="file:///Ushttps://cdn.britannica.com/77/170477-050-1C747EE3/Laptop-computer.jpgers/neel/Desktop/Screenshot%202024-10-05%20at%2011.58.12%E2%80%AFPM.png"/>
            </Helmet>

            <Navbar />
            
            <div className="page home">
                <h1>West High Computer Science Club</h1>
                <p>Learn how to code, compete in Hackathons, and hang out with other students interested in CS at West!</p>
                <p>Check out the <a href="/events">upcoming events</a> page for meeting dates. Once the club gets underway, you'll have the opportunity to climb the <a href="/leaderboard">leaderboard</a> by attending meetings and winning competitions!</p>
            </div>

            <Footer />
        </div>
    );
}
