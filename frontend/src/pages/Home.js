import { Outlet } from "react-router-dom";
import SuppliesDataBase from "./SuppliesDataBase";
import "./styles/home.css"

function Home() {
    return (
        <div className="home-wrapper">
            <div className="home">
                <Outlet />
                <SuppliesDataBase />
            </div>
        </div>
    );
}

export default Home;