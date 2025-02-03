import ChatArea from "./ChatArea"
import SideMenu from "./sideMenu"

const MainContainer = () => {
    return (
        <div className="main-container">
          <SideMenu />
          <ChatArea />
        </div>
    );
};

export default MainContainer;