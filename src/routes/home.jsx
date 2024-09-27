import '../css/app.css';
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Helmet } from 'react-helmet';

export default function Home() {
    return (
        <div className="app">
            <Helmet>
                <title>Computer Science Club</title>
            </Helmet>

            <div className="page home">
                <Navbar />
                <h1>West High Computer Science Club</h1>
                <p>Learn how to code, compete in competitions, and hang out with other students interested in CS at West!</p>
                <br />
                <p>Check out the <a href="/events">upcoming events</a> page, which will be updated with more info soon. Once the club starts having competitions, win as many points as you can to make it to the top of the <a href="/leaderboard">leaderboard</a>!</p>
            </div>

            <Footer />
        </div>
    );
}
