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
                <p>We host a Hackathon every month, where members compete to make the best solution to a prompt we provide. Participants will earn points on the <a href="/leaderboard">leaderboard</a>, and winners will earn extra! View the <a href="/points-breakdown">points breakdown here</a>.</p>
                <h2>MONTHLY FORMAT</h2>
                <p>
                    <ul>
                        <li>Meeting 1 (<strong>first</strong> Tuesday of the month): We will introduce the Hackathon prompt and give you some ideas to get started. Participants will then have until Sunday, 11:59 PM to write and submit your programs, which will be judged by the board. Winners will be announced online.</li>
                        <li>Meeting 2 (<strong>last</strong> Tuesday): An educational session to teach new coding skills to perform better on future Hackathons, and we will talk about the successes of those who did well on the previous Hackathon, and how our solutions would've looked.</li>
                    </ul>
                </p>
                <h2>SOLUTIONS</h2>
                <p>Once a Hackathon has ended, we will post the winner's solution (and/or our own solution) on this page, and maybe some more tips to help you out in future competitions.</p>
            </div>

            <Footer />
        </div>
    );
}
