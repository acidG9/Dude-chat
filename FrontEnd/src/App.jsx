import Login from "./assets/Login"
import { useEffect } from "react"
import MainContainer from "./assets/MainContainer"
import { Routes, Route, Navigate } from "react-router-dom"
import WelcomePage from "./assets/WelcomePage"
import ChatArea from "./assets/ChatArea"
import CreateGrp from "./assets/CreateGrp"
import Groups from "./assets/Groups"
import OnlineUsers from "./assets/OnlineUsers"
import { useAuthStore } from "./assets/store/useAuthStore"
import CustomizedProgressBars from "./assets/lib/progress.jsx"

function App() {

  const{ authUser, checkAuth, isCheckingAuth }= useAuthStore();

  useEffect(()=>{
    checkAuth()
  }, [checkAuth]);

  console.log({authUser});

  if(isCheckingAuth && !authUser)return(
    <CustomizedProgressBars />
  )

  return (
    <div className="app-container">        
      <Routes>
        <Route path="/" element={ !authUser ? <Login /> : <Navigate to="/home/welcome" /> } />
        <Route path="/home" element={ authUser ? <MainContainer /> : <Navigate to="/" /> } >
          <Route path="welcome" element={ authUser ? <WelcomePage /> : <Navigate to="/" /> } />
          <Route path="chat" element={ authUser ? <ChatArea /> : <Navigate to="/" /> } />
          <Route path="create-grp" element={ authUser ? <CreateGrp /> : <Navigate to="/" /> } />
          <Route path="groups" element={ authUser ? <Groups /> : <Navigate to="/" /> } />
          <Route path="online-users" element={ authUser ? <OnlineUsers /> : <Navigate to="/" /> } />
        </Route>
      </Routes>
    </div>
  )
}

export default App
