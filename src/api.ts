import axios from 'axios';
import dotenv from "dotenv";

dotenv.config();

const options = {
  method: 'GET',
  url: 'https://spotify23.p.rapidapi.com/podcast_episodes/',
  params: {
    id: '5VzFvh1JlEhBMS6ZHZ8CNO',
    offset: '0',
    limit: '50'
  },
  headers: {
    'X-RapidAPI-Key': process.env.KEY,
    'X-RapidAPI-Host': process.env.HOST
  }
};

export async function callSpotifyPodcastAPI(){
  try {
    const response = await axios.request(options);
    const parsedJSON = response.data;
    const episodeURI = parsedJSON.data.podcastUnionV2.uri;
    // console.log(episodeURI);
    const episodeID = episodeURI.slice(13);
    // console.log("sliced ", episodeID);
    const openURL = "https://open.spotify.com/show/" + episodeID;
    console.log(openURL);
  } catch (error) {
    console.error(error);
  }
}

callSpotifyPodcastAPI();