import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Helmet } from 'react-helmet';

export default function AdminDashboard() {
    return (
        <div className="app">
            <Helmet>
                <title>Computer Science Club - Admin Dashboard</title>
            </Helmet>

            <Navbar />
            
            <div className="page admin">
                <h1>Admin Dashboard</h1>
            </div>

            <Footer />
        </div>
    );
}
