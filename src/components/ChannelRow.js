import { Avatar } from "@mui/material";
import React from "react";
import '../styles/ChannelRow.css';
import VerifiedIcon from '@mui/icons-material/Verified';

const ChannelRow = ({ image, channel, subs, noOfVideos, description, verified}) => {
    return (
        <div className="channelRow">

            <Avatar className="channelRow__logo" alt={channel} src={image}/>
            <div className="channelRow__text">
                <h4>{channel} {verified && <VerifiedIcon />}</h4>
                <p>{subs} subscribers . {noOfVideos} Videos</p>
                <p>{description}</p>
            </div>

            <hr />
        </div>
    )
}

export default ChannelRow;