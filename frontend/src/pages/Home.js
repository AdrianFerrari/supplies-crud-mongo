import { Outlet } from "react-router-dom";
import SuppliesDataBase from "./SuppliesDataBase";
import "./styles/home.css"

function Home() {
    return (
        <div className="home">
            <Outlet />
            <SuppliesDataBase />
        </div>
    );
}

export default Home;