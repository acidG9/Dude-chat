import Login from "./assets/Login"
import MainContainer from "./assets/MainContainer"
import { Routes, Route } from "react-router-dom"
import WelcomePage from "./assets/WelcomePage";
import ChatArea from "./assets/ChatArea"
import CreateGrp from "./assets/CreateGrp";
import Groups from "./assets/Groups";
import OnlineUsers from "./assets/OnlineUsers";

function App() {

  return (
    <div className="app-container">        
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="app" element={<MainContainer />} >
          <Route path="welcome" element={<WelcomePage />} />
          <Route path="chat" element={<ChatArea />} />
          <Route path="create-grp" element={<CreateGrp />} />
          <Route path="groups" element={<Groups />} />
          <Route path="online-users" element={<OnlineUsers />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
