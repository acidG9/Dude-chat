import SideMenu from "./sideMenu"
import { Outlet } from "react-router-dom";

const MainContainer = () => {
    return (
        <div className="main-container">
          <SideMenu />
          <Outlet />
        </div>
    );
};

export default MainContainer;