import React from "react";
import '../styles/VideoRow.css';
import { Link } from "react-router-dom";

const VideoRow = ({ id, views, subs, description, timestamp, channel, title, image}) => {
    return (
        <Link to={`/watch/${id}`}>
            <div className="videoRow">
                <img src={image} alt=""/>
                <div className="videoRow__text">
                    <h3>{title}</h3>
                    <p className="videoRow__headline">{channel} . {subs} subscribers . {views} views . {timestamp}</p>
                    <p className="videoRow__description">{description}</p>
                </div>
            </div>
        </Link>
    )
}

export default VideoRow;