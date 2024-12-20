import { Helmet } from "react-helmet";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "../css/events.css";

const events = [
    {
        title: <><i className="fa-solid fa-handshake"></i> Intro Meeting</>,
        date: "October 15",
        location: "Room 4221",
        description: <>Get information on how Comp Sci Club will work this year, when meetings are, who's on the board, and get your first points of the year for the <a href="/leaderboard">leaderboard</a> just by showing up to the first meeting!</>,
    },
    {
        title: <><i className="fa-brands fa-python"></i> Python Basics Meeting</>,
        date: "October 29",
        location: "Room 4221",
        description: <>Learn how to get started coding in Python in our first non-introductory meeting! No beginner experience required. You may have the chance to win points for the <a href="/leaderboard">leaderboard</a>!</>
    },
    {   title: <><i className="fa-solid fa-computer"></i> First Club Hackathon</>,
        date: "November 5",
        location: "Room 4221",
        description: <>Get information on the first hackathon we will be hosting, and learn protocol for future meetings. Get inspiration and Start working on your project with help from board members. Be sure to compete in order to gain points on our <a href="/leaderboard">leaderboard</a>!</>
    },
    {   title: <><i class="fa-regular fa-file"></i> Hackathon Submission Due!!!</>,
        date: "November 10",
        location: "westhighcompsciclub@gmail.com",
        description: <>Be sure to submit your hackathon project to our email, westhighcompsciclub@gmail.com, or #hackathon-submissions in our discord by Nov 10 11:59 to be considered in our competition. We look forward to judging your projects! </>
    },
];

const eventsElems = events.map((event) => {
    return (
        <div className="event">
            <p className="date">{event.date}</p>
            <h3>{event.title}</h3>
            <p className="room">{event.location}</p>
            <p className="description">{event.description}</p>
        </div>
    );
});

export default function Events() {
    return (
        <div className="app">
            <Helmet>
                <title>Computer Science Club - Events</title>
            </Helmet>

            <Navbar />
            
            <div className="page events">
                <h1>UPCOMING EVENTS</h1>
                <p>Please note that some dates on this page are still tentative.</p>

                <div className="events-container">
                    <Carousel autoPlay={true} infiniteLoop={true} interval={15000} showStatus={false} emulateTouch={true}>
                        {eventsElems}
                    </Carousel>
                </div>
            </div>
            <Footer />
        </div>
    );
}