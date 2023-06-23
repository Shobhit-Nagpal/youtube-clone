import React from "react";
import '../styles/RecommendedVideos.css';
import VideoCard from "./VideoCard";

const RecommendedVideos = ({ videos }) => {
    return (
        <div className="recommendedVideos">
            <h2>Recommended</h2>
            <div className="recommendedVideos_videos">
                {videos.map((video) => video.id.kind==='youtube#video' ? <VideoCard key={video.id.videoId} id={video.id.videoId} image={video.snippet.thumbnails.high.url} channel={video.snippet.channelTitle} title={video.snippet.title} /> : null)}
            </div>
        </div>
    )
}

export default RecommendedVideos;