import { IconButton } from '@mui/material';
import React from "react"
import { useAuthStore } from "./store/useAuthStore";
import LogoutIcon from '@mui/icons-material/Logout';
import TextField from '@mui/material/TextField';
import CameraAltIcon from '@mui/icons-material/CameraAlt';

function Profile(){

  const { checkAuth, authUser, isUpdatingProfile, updateProfile, logout } = useAuthStore();
  const [selectedImg, setSelectedImg] = React.useState(null);
  const [userName, setUserName] = React.useState("");

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = async () => {
      const base64Image = reader.result;
      setSelectedImg(base64Image);
      await updateProfile({ profilePic: base64Image });
    };
  };

  React.useEffect(()=>{
    checkAuth();
    setUserName( authUser?.fullName );
  }, [checkAuth, authUser]);

    return(
        <div className="profile-container">
            <div className="profile-head">
                <div>
                    <div className='dp-chat-head'>
                     { (selectedImg || authUser?.profilePic) ? (
                       <img
                         src={selectedImg || authUser?.profilePic}
                         alt="Profile"
                         className="profile-pic-image-small"
                       />
                     ) : (<p className="friend-dp" >{userName?.[0]?.toUpperCase()}</p>) }
                    </div>
                    <div className='info-chat-head'>
                        <h3>{userName}</h3>
                        <p>today</p>
                    </div>
                </div>
                <IconButton onClick={()=>{
                  logout();
                }}>
                  <LogoutIcon />
                </IconButton>
            </div>
            <div className="profile-body">
                <div className='profile-body-1'>
                  <div className='profile-pic'>
                    <div className='profile-pic-div1'>
                       { (selectedImg || authUser?.profilePic) ? (
                         <img
                           src={selectedImg || authUser?.profilePic}
                           alt="Profile"
                           className="profile-pic-image"
                         />
                       ) : (<p className="profile-static-alphabet">{userName?.[0]?.toUpperCase()}</p>) }
                     </div>
                     <div  className='camera'>
                        <IconButton>
                          <label htmlFor="dpUpload">
                              <CameraAltIcon sx={{ fontSize: 40 }} />
                          </label>
                        </IconButton>
                      <input id="dpUpload" type="file" accept="image/*" onChange={handleImageUpload} disabled={isUpdatingProfile} />
                     </div>
                  </div>
                  <TextField id="outlined-basic" className='profilePage-input' label="UserName" variant="outlined" value={userName} />
                  <TextField id="outlined-basic" className='profilePage-input' label="email" variant="outlined" value={authUser?.email} />
                </div>
                <div className='profile-body-2'>
                    <h1>Account information</h1>
                    <div>
                      <p>Member Since</p>
                      <p>{authUser?.createdAt?.split("T")?.[0]}</p>
                    </div>
                    <hr className='hr' />
                    <div>
                      <p>Account status</p>
                      <p>Active</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;