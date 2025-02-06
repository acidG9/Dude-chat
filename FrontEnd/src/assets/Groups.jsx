import React from "react";
import { IconButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import Group from "./Group";

const Groups = () => {

    const [group]= React.useState([
        {
            name: "K21GP",
        },
        {
            name: "K21GX",
        },
        {
            name: "K21RX",
        },
        {
            name: "K21FA",
        },
        {
            name: "K21AK",
        },
        {
            name: "K21RB",
        },
    ]);

    return (
        <div className="groups-container">
            <div className="groups-header">
                <img src="./bgLess.png" alt="logo" />
                <p>Available Groups</p>
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

export default Groups;