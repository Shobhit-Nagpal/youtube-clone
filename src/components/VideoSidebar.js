import React, { useEffect, useState } from "react";
import { fetchVideos } from "../utils/fetchVideos";
import VideoCard from "./VideoCard";
import '../styles/VideoSidebar.css'

const VideoSidebar = ( {id} ) => {

    const [suggestedVideos, setSuggestedVideos] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const url = `https://youtube-v31.p.rapidapi.com/search?relatedToVideoId=${id}&part=id%2Csnippet&type=video&maxResults=50`;
            const result = await fetchVideos(url);
            setSuggestedVideos(result.items);
          }
      
          fetchData();
    }, [id]);

    return (
        <div className="suggestedVideos">
            <div className="suggestedVideos_videos">
                {suggestedVideos.map((video) => video.id.kind==='youtube#video' ? <VideoCard key={video.id.videoId} id={video.id.videoId} image={video.snippet.thumbnails.high.url} channel={video.snippet.channelTitle} title={video.snippet.title} /> : null)}
            </div>
        </div>
    )
}

export default VideoSidebar;