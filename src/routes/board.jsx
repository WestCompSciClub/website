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
];

const boardMembers = [
    {
        name: "Briana Chiu",
        position: "Publicist",
        id: "briana_chu",
        grade: "Junior",
    },
    {
        name: "Isaac Goldberg",
        position: "Secretary",
        id: "isaac_goldberg",
        grade: "Senior",
        badge: "Website Dev",
    },
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
        <div className="card" key={person.id}>
            <p className="grade" style={{"backgroundColor": gradeColors[person.grade]}}>{person.grade}</p>
            <div className="image-container">
                <img src="https://gmedia.playstation.com/is/image/SIEPDC/fortnite-keyart-01-en-30nov23?$facebook$"></img>
            </div>
            <p className="name">{person.name}</p>
            <p className="position" style={{"backgroundColor": primary, "borderColor": border}}>{person.position}</p>
            {person.badge && <p className="badge" style={{"backgroundColor": primary, "borderColor": border}}>{person.badge}</p>}
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
