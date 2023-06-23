import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Video from "../components/Video";
import { useParams } from "react-router-dom";
import '../styles/Watch.css';
import VideoSidebar from "../components/VideoSidebar";

const Watch = () => {

    const { v } = useParams();

    return (
        <div>
            <Header />
        <div className='app_page'>
        <Sidebar />

        <div className="video__content">
            <Video id={v} />
            <VideoSidebar id={v} className="video__content__sidebar" />
        </div>

        </div>
        </div>
    )
}

export default Watch;