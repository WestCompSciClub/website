import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Helmet } from 'react-helmet';

export default function PointsBreakdown() {
    return (
        <div className="app">
            <Helmet>
                <title>Computer Science Club - Points Breakdown</title>
            </Helmet>

            <Navbar />
            
            <div className="page infopage points-breakdown">
                <h1>POINTS BREAKDOWN</h1>

                <p>Here's a tentative list of how you can earn points to make it to the top of the <a href="/leaderboard">leaderboard</a>:</p>
                <h2>EASY POINTS</h2>
                <p>
                    <ul>
                        <li>Attend a meeting (and sign the sign-in sheet): <code>+1</code></li>
                    </ul>
                </p>
                <h2>COMPETITIVE</h2>
                <p>
                    <ul>
                        <li>
                            Hackathons - these are subject to change any time before the first Hackathon is over:
                            <ul>
                                <li>1st place: <code>+10</code></li>
                                <li>2nd place: <code>+6</code></li>
                                <li>3rd place: <code>+3</code></li>
                                <li>All other participants (must have given some effort): <code>+1</code></li>
                            </ul>
                        </li>
                    </ul>
                </p>
                <h2>MORE INFO</h2>
                <p>
                    <ul>
                        <li>More ways to earn points may be added to this list once the club gets underway.</li>
                        <li>Small amounts of points may be awarded for other reasons not listed here.</li>
                    </ul>
                </p>
            </div>

            <Footer />
        </div>
    );
}
