import React, { useEffect, useState } from "react";
import Header from "../components/Header.js";
import Sidebar from "../components/Sidebar.js";
import RecommendedVideos from "../components/RecommendedVideos.js";
import { fetchVideos } from "../utils/fetchVideos.js";

const Home = () => {

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const url = 'https://youtube-v31.p.rapidapi.com/search?relatedToVideoId=7ghhRHRP6t4&part=id%2Csnippet&type=video&maxResults=50';
      const result = await fetchVideos(url);
      setVideos(result.items);
    }

    fetchData();
  },[])

    return (
        <>
        <Header />
        <div className='app_page'>
        <Sidebar />
        <RecommendedVideos videos={videos}/>
      </div></>
    )
}

export default Home;