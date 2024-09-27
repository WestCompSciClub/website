import { Helmet } from "react-helmet";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "../css/events.css";

const events = [
    {
        title: "Club Rush",
        date: "September 13",
        description: "hello world"
    }
];

export default function Events() {
    return (
        <div className="app">
            <Helmet>
                <title>WHS Comp Sci Club - Events</title>
            </Helmet>

            <div className="page">
                <Navbar />

                <h1>Upcoming Events</h1>

                <div className="events">
                    <Carousel autoPlay={true} infiniteLoop={true} interval={15000} showStatus={false} emulateTouch={true}>
                        <div className="event">
                            <p className="date">Date TBD</p>
                            <h3><i className="fa-solid fa-handshake"></i> Intro Meeting</h3>
                            <p className="room">Room 4208</p>
                            <p>Get information on how Comp Sci Club will work this year, when meetings are, who's on the board, and get your first points of the year for the <a href="/leaderboard">leaderboard</a> just by showing up to the first meeting!</p>
                        </div>
                        <div className="event">
                            <p className="date">Date TBD</p>
                            <h3><i className="fa-brands fa-python"></i> Python Basics Meeting</h3>
                            <p className="room">Room 4208</p>
                            <p>Learn how to get started coding in Python in our first non-introductory meeting! No beginner experience required. You may have the chance to win points and make it to the top of our <a href="/leaderboard">leaderboard</a>!</p>
                        </div>
                    </Carousel>
                </div>
            </div>
            <Footer />
        </div>
    );
}