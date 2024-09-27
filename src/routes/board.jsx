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
        grade: "Senior",
    },
    {
        name: "Aiden Lee",
        position: "Co-President",
        id: "aiden_lee",
        grade: "Senior",
    },
    {
        name: "Rohith Krish",
        position: "Vice President",
        id: "rohith_krish",
        grade: "Senior",
    },
];

const boardMembers = [
    {
        name: "Isaac Goldberg",
        position: "Secretary",
        id: "isaac_goldberg",
        grade: "Senior",
        otherPosition: "Website Dev",
    },
    {
        name: "Briana Chiu",
        position: "Publicist",
        id: "briana_chu",
        grade: "Junior",
    },
    {
        name: "Nathan Franco",
        position: "Treasurer",
        id: "nathan_franco",
        grade: "Junior",
    },
    {
        name: "Ayush Agarwal",
        position: "ICC Rep",
        id: "ayush_agarwal",
        grade: "Sophomore",
    },
    {
        name: "Parthiv Patel",
        position: "ICC Rep",
        id: "parthiv_patel",
        grade: "Sophomore",
    }
]

const gradeColors = {
    "Senior": "#00b330",
    "Junior": "#0099ff",
    "Sophomore": "#9d3bff",
};

function positionColor(pos) {
    switch (pos) {
        case "Co-President":
            return ["#e8b200", "#ffd859"];
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
                <img src="https://gmedia.playstation.com/is/image/SIEPDC/fortnite-keyart-01-en-30nov23?$facebook$"></img>
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
                <title>WHS Comp Sci Club - Board</title>
            </Helmet>

            <div className="page">
                <Navbar />
                <h1>Club Board</h1>
                <div className="board presidents">{boardPresidentsElems}</div>
                <div className="board members">{boardMembersElems}</div>   
            </div>

            <Footer />
        </div>
    );
}
