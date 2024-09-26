import '../css/app.css';
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Helmet } from 'react-helmet';

export default function Home() {
    return (
        <div className="app">
            <Helmet>
                <title>WHS Comp Sci Club</title>
            </Helmet>

            <div className="page">
                <Navbar />
                <h1>West High Comp Sci Club</h1>
                <p>More info coming soon! For now, <a href="/events">check out upcoming events!</a></p>
            </div>

            <Footer />
        </div>
    );
}
