import React, { useEffect, useState } from "react";
import { fetchVideo } from "../utils/fetchVideo";
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ReplyIcon from '@mui/icons-material/Reply';
import DownloadIcon from '@mui/icons-material/Download';
import '../styles/Video.css';

const Video = ( {id} ) => {

    const [video, setVideo] = useState([]);

    useEffect(() => {
        const url = `https://youtube-v31.p.rapidapi.com/videos?part=contentDetails%2Csnippet%2Cstatistics&id=${id}`;
        const fetchData = async () => {
            const results = await fetchVideo(url);
            setVideo(results.items);
        }

        fetchData();
    },[id]);

    return (
        <div className="video">
            <iframe title={video.map((vid) => {return vid.snippet.title})}
            src={`https://www.youtube.com/embed/${id}`}>
            </iframe>
            <div className="video__stats">

                <div className="video__stats__views">
                <h3>{video.map((vid) => {return vid.statistics.viewCount})} views</h3>
                </div>

                <div className="video__stats__icons">

                    <div className="video__stats__icons__like">
                    <ThumbUpOutlinedIcon />
                    <h4>{video.map((vid) => {return vid.statistics.likeCount})}</h4>
                    </div>

                    <div className="video__stats__icons__share" >
                        <ReplyIcon />
                    </div>

                    <div className="video__stats__icons__download" >
                        <DownloadIcon />
                    </div>
                </div>
            </div>
            <h2>{video.map((vid) => {return vid.snippet.title})}</h2>
        </div>
    )
}

export default Video;