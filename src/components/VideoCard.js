import React from "react";
import { Avatar } from "@mui/material";
import '../styles/VideoCard.css';
import { Link } from "react-router-dom";

const VideoCard = ({id, image, title, channel, views, timestamp, channelImage}) => {

    return (
        <Link to={`/watch/${id}`}>
            <div className="videoCard">
            <img className="videoCard__thumbnail" src={image} alt="" />
                <div className="videoCard__info">
                    <Avatar className="videoCard__avatar" alt={channel} src={channelImage} />

                    <div className="videoCard__text">
                        <h4>{title}</h4>
                        <p>{channel}</p>
                        <p>{views}</p>
                        <p>{timestamp}</p>
                    </div>

                </div>
            </div>
        </Link>
    )

}

export default VideoCard;