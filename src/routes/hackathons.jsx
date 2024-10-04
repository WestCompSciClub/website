import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Helmet } from 'react-helmet';

export default function Hackathons() {
    return (
        <div className="app">
            <Helmet>
                <title>Computer Science Club - Hackathons</title>
            </Helmet>

            <Navbar />
            
            <div className="page hackathons infopage">
                <h1>HACKATHONS</h1>
                <p>We host a Hackathon every month, where members compete to make the best solution to a prompt we provide. The winners (and runner-ups) will earn points on the <a href="/leaderboard">leaderboard!</a></p>
                <h2>MONTHLY FORMAT</h2>
                <p>
                    <ul>
                        <li>1st meeting (<strong>first</strong> Tuesday of the month): introduce the competition and give you some ideas to get started. Participants will then have a week to write your programs, which will be judged by the board.</li>
                        <li>2nd meeting (<strong>second</strong> Tuesday): we will announce the winners, provide our solutions, explain how the project might apply to real software engineering jobs, etc.</li>
                        <li>3rd meeting (<strong>fourth</strong> Tuesday): an educational meeting where we teach members coding topics, either just to learn in general, or to improve your performance on Hackathons!</li>
                    </ul>
                </p>
                <h2>SOLUTIONS</h2>
                <p>Once a Hackathon has ended, we will post the winner's solution (and/or our own solution) on this page, and maybe some more tips to help you out in future competitions.</p>
            </div>

            <Footer />
        </div>
    );
}
