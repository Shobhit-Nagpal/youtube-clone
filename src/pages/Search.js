import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import ChannelRow from "../components/ChannelRow";
import VideoRow from "../components/VideoRow";
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import '../styles/Search.css';
import { fetchSearches } from "../utils/fetchSearches";


const Search = () => {

    const [results, setSearchResults] = useState([]);
    const { q } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            const url = `https://youtube-search-results.p.rapidapi.com/youtube-search/?q=${q}`;
            const searches = await fetchSearches(url);
            setSearchResults(searches.items);
        }

        fetchData();
    }, [q])

    return (
        <>
        <Header />
        <div className='app_page'>
        <Sidebar />
        <div className="search">
            <div className="search__filter">
                <TuneOutlinedIcon />
                <h2>FILTER</h2>
            </div>

            <hr />

            {results.map((result) => result.type === 'channel' ? <ChannelRow key={result.channelID}
            image={result.bestAvatar.url} channel={result.name} subs={result.subscribers} noOfVideos={result.videos} description={result.descriptionShort} verified={result.verified} /> : null)}
            
            {results.map((result) => result.type === 'video' ? <VideoRow key={result.id} id={result.id} views={result.views} subs="" description="" timestamp={result.uploadedAt} channel={result.author.name} title={result.title} image={result.bestThumbnail.url}/> : null)}
        </div>
      </div>
        </>
    )
}

export default Search;