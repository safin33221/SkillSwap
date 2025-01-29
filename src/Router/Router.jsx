import { Route, Routes } from "react-router";
import MainLayout from "../Layout/Main/MainLayout";
import Home from "../Pages/Home/Home";
import Contact from "../Pages/Home/Contact";


const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<MainLayout></MainLayout>}>
                <Route index element={<Home></Home>}></Route>
                <Route path="/contact" element={<Contact/>}></Route>
            </Route>
        </Routes>
    );
};

export default Router;