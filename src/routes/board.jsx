import "../css/app.css";
import "../css/board.css"
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Helmet } from "react-helmet";

const boardPresidents = [
    {
        name: "Neel Karkhanis",
        position: "Co-President",
        id: "neel_karkhanis",
        grade: "12th",
    },
    {
        name: "Aiden Lee",
        position: "Co-President",
        id: "aiden_lee",
        grade: "12th",
    },
    {
        name: "Rohith Krish",
        position: "Vice President",
        id: "rohith_krish",
        grade: "12th",
    },
];

const boardMembers = [
    {
        name: "Isaac Goldberg",
        position: "Secretary",
        id: "isaac_goldberg",
        grade: "12th",
        otherPosition: "Website Dev",
    },
    {
        name: "Briana Chiu",
        position: "Publicist",
        id: "briana_chiu",
        grade: "11th",
    },
    {
        name: "Nathan Franco",
        position: "Treasurer",
        id: "nathan_franco",
        grade: "11th",
    },
    {
        name: "Ayush Agarwal",
        position: "ICC Rep",
        id: "ayush_agarwal",
        grade: "10th",
    },
    {
        name: "Parthiv Patel",
        position: "ICC Rep",
        id: "parthiv_patel",
        grade: "10th",
    }
]

const gradeColors = {
    "12th": "#00b330",
    "11th": "#0099ff",
    "10th": "#9d3bff",
};

function positionColor(pos) {
    switch (pos) {
        case "Co-President":
            return ["#e8b200", "#ffd859"];
        case "Vice President":
            return ["#ff9514", "#ffc987"];
        default:
            return ["#e64100", "#ff6e33"];
    }
}

function makeCard(person) {
    let [primary, border] = positionColor(person.position);
    return (
        <div className="board-member" key={person.id}>
            <p className="grade" style={{"backgroundColor": gradeColors[person.grade]}}>{person.grade}</p>
            <div className="image-container">
                <img src={`/static/board/${person.id}.jpg`} alt=""></img>
            </div>
            <p className="name">{person.name}</p>
            <p className="position" style={{"backgroundColor": primary, "borderColor": border}}>{person.position}</p>
            {person.otherPosition && <p className="otherPosition" style={{"backgroundColor": primary, "borderColor": border}}>{person.otherPosition}</p>}
        </div>
    );
}

const boardPresidentsElems = boardPresidents.map(makeCard);
const boardMembersElems = boardMembers.map(makeCard);

export default function Board() {
    return (
        <div className="app">
            <Helmet>
                <title>Computer Science Club - Board</title>
            </Helmet>
            
            <Navbar />

            <div className="page board">
                <h1>BOARD</h1>
                <div className="board-container presidents">{boardPresidentsElems}</div>
                <div className="board-container nonpresidents">{boardMembersElems}</div>   
            </div>

            <Footer />
        </div>
    );
}
