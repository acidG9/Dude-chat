import ChatArea from "./ChatArea"
import SideMenu from "./sideMenu"
// import WelcomePage from "./WelcomePage";
// import CreateGrp from "./CreateGrp";

const MainContainer = () => {
    return (
        <div className="main-container">
          <SideMenu />
          <ChatArea />
          {/* <WelcomePage /> */}
          {/* <CreateGrp /> */}
        </div>
    );
};

export default MainContainer;