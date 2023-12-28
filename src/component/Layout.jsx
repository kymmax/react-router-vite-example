import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function Layout(){
    return (
        <div className="d-flex">
            <Navbar/>
            <section>
                <Outlet></Outlet>
            </section>
        </div>
    )
}

export default Layout;