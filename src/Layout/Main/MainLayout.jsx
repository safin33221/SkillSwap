import { Outlet } from "react-router";


const MainLayout = () => {
    return (
        <div >
            <h1 className="text-center text-4xl">this is nav bar</h1>
            <main className="min-h-screen"><Outlet ></Outlet></main>
            <h1 className="text-center text-4xl">this is nav Footer</h1>
        </div>
    );
};

export default MainLayout;