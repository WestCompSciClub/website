import '../css/app.css';
import "../css/leaderboard.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Loading from "../components/loading";
import { Helmet } from 'react-helmet';
import { useState, useEffect } from 'react';

function makeEntry(person, index) {
    var addClass = "default";

    if (index === 1) {
        addClass = "first";
    } else if (index === 2) {
        addClass = "second";
    } else if (index === 3) {
        addClass = "third";
    }
    return (
        <div className={`entry ${addClass}`} key={person.name}>
            <div className="leftinfo">
                <p className="position">{index.toString()}.</p>
                <p className="name">{person.name}</p>
            </div>
            <p className="points">{person.points} PTS</p>
            <p className="wins"><i className="fa-solid fa-trophy"></i> {person.wins || 0}</p>
        </div>
    );
}

export default function Leaderboard() {
    const [members, setMembers] = useState([]);
    const [isLoading, setLoading] = useState(true);

    const fetchMembers = async () => {
        try {
            const response = await fetch("https://whscompsciclub.vercel.app/api/leaderboard");
            const json = await response.json();

            function calculatePoints(person) {
                var points = 0;
                for (const reward of person.rewards) {
                    points += reward.points;
                }
                return points;
            }

            const refined = json.map(u => ({...u, points: calculatePoints(u)})).sort((a, b) => {
                if (a.points > b.points) return -1;
                else if (a.points < b.points) return 1;
                else return 0;
            });

            var entries = [];
            for (let i = 0; i < refined.length; i++) {
                entries.push(makeEntry(refined[i], i + 1));
            }
            setMembers(entries);
        } catch (e) {
            console.error(e);
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        fetchMembers();
    }, []);

    return (
        <div className="app">
            <Helmet>
                <title>Computer Science Club - Leaderboard</title>
            </Helmet>

            <Navbar />
            
            <div className="page leaderboard">
                <h1>LEADERBOARD</h1>
                <p style={{marginBottom: 0}}>Come to our meetings and win competitions to earn points on the leaderboard!</p>
                <p><a href="/points-breakdown">See how points are awarded</a></p>

                <div className="leaderboard-container">
                    <div className="headers entry">
                        <div className="leftinfo">
                            <p className="name header">Name</p>
                        </div>
                        <p className="points header">Points</p>
                        <p className="wins header">Hackathon Wins</p>
                    </div>

                    {isLoading ? 
                        (
                            <Loading></Loading>
                        ) : (
                            <>
                            {members}
                            </>
                        )
                    }
                </div>
            </div>

            <Footer />
        </div>
    );
}
