import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import NightlightIcon from '@mui/icons-material/Nightlight';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material';
import Friends from './Friends';
import React from 'react';

const SideMenu = () => {

    const [conversation]= React.useState([
        {
            name: "kaushik",
            lastMsg: "omg ye kese hoga",
            timestamp: "today",
        },
        {
            name: "akash",
            lastMsg: "mera parcel le le",
            timestamp: "today",
        },
        {
            name: "anurag",
            lastMsg: "company ne maa chod di",
            timestamp: "today",
        },
        {
            name: "talibani",
            lastMsg: "kuch sunne me aaya hai",
            timestamp: "yesterday",
        },
        {
            name: "ravi",
            lastMsg: "mera mahindra me ho gya",
            timestamp: "yesterday",
        },
        {
            name: "anirban",
            lastMsg: "bhai me phagwara aara",
            timestamp: "1/02/25",
        },
    ]);

    return (
        <div className="sideMenu-container">
            <div className="optionMenu">
                <IconButton>
                    <AccountCircleIcon />
                </IconButton>
                <div>
                  <IconButton>
                      <PersonAddIcon />
                  </IconButton>
                  <IconButton>
                      <GroupAddIcon />
                  </IconButton>
                  <IconButton>
                      <AddCircleOutlineIcon />
                  </IconButton>
                  <IconButton>
                      <NightlightIcon />
                  </IconButton>
                </div>
            </div>
            <div className="search">
                <IconButton>
                    <SearchIcon />
                </IconButton>
                <input type="text" placeholder='Search' />
            </div>
            <div className="friendList">
                {conversation.map(con=>(
                    <Friends key={con.index} props={con} />
                ))}
            </div>
        </div>
    );
};

export default SideMenu;