import React from "react";
import { IconButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import Group from "./Group";

const OnlineUsers = () => {

    const [group]= React.useState([
        {
            name: "Sonu Bhaiya",
        },
        {
            name: "Monu Bhaiya",
        },
        {
            name: "Kumkum",
        },
        {
            name: "Sumit",
        },
        {
            name: "Akshansh",
        },
        {
            name: "Chintu",
        },
        {
            name: "Saransh",
        },
        {
            name: "Chinu",
        },
        {
            name: "Kannu",
        },
    ]);

    return (
        <div className="groups-container">
            <div className="groups-header">
                <img src="/bgLess.png" alt="logo" />
                <p>Online Users</p>
            </div>
            <div className="groups-search">
                <IconButton>
                    <SearchIcon />
                </IconButton>
                <input type="text" placeholder='Search' />
            </div>
            <div className="available-groups">
                {
                    group.map((grp)=>{
                        return(
                            <Group key={grp.index} props={grp} />
                        )
                    })
                }
            </div>
        </div>
    );
};

export default OnlineUsers;