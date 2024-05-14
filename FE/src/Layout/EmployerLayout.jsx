import { NavbarHome } from "../User/Home/NavbarHome";
import { Outlet, useLocation } from "react-router-dom";
import { Footer } from "./Footer";
import { useEffect, useState } from "react";
import { MainSideBar } from "../User/Employer/EmployerUI/MainSideBar";
import { UserProvider } from "../Context/UseContext";

export const EmployerLayout = () => {
    const location = useLocation();
    const [path, setPath] = useState("");

    useEffect(() => {
        window.scrollTo(0, 0);
        setPath(location.pathname);
    }, [location.pathname]);
    return (
        <>
            <UserProvider>
                <NavbarHome />
                <div
                    className="container-fluid"
                    style={{
                        backgroundColor: "#f2f3f7",
                        minHeight: "549px",
                    }}
                >
                    <div className="row pt-1">
                        <div className="col-lg-3 p-0 bg-white">
                            <MainSideBar />
                        </div>
                        <div className="col-lg-9">
                            <Outlet />
                        </div>
                    </div>
                </div>
                <Footer />
            </UserProvider>
        </>
    );
};
