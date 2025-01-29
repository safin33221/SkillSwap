import { Route, Routes } from "react-router";
import MainLayout from "../Layout/Main/MainLayout";
import Home from "../Pages/Home/Home";



const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<MainLayout></MainLayout>}>
                <Route index element={<Home></Home>}></Route>
                
            </Route>
        </Routes>
    );
};

export default Router;