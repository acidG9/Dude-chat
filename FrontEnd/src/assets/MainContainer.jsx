import SideMenu from "./sideMenu"
// import WelcomePage from "./WelcomePage";
// import ChatArea from "./ChatArea"
// import CreateGrp from "./CreateGrp";
import Groups from "./Groups";

const MainContainer = () => {
    return (
        <div className="main-container">
          <SideMenu />
          {/* <WelcomePage /> */}
          {/* <ChatArea /> */}
          {/* <CreateGrp /> */}
          <Groups />
        </div>
    );
};

export default MainContainer;