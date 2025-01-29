import { Outlet } from "react-router";
import Navbar from "../../Pages/Common/Navbar";



const MainLayout = () => {
    return (
        <div >
            <nav className="bg-base-100 shadow-xll">
                <Navbar/>
            </nav>
            <main className="min-h-screen"><Outlet ></Outlet></main>
            <h1 className="text-center text-4xl">this is nav Footer</h1>
        </div>
    );
};

export default MainLayout;