import axios from 'axios';
import dotenv from "dotenv";
import { Podcast } from "./podcast";

dotenv.config();

export let data: Podcast[] = [];

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

export async function callAPIbyGenre() {
const options = {
  method: 'GET',
  url: 'https://spotify23.p.rapidapi.com/genre_view/',
  params: {
    id: '0JQ5DAqbMKFQRiNGmKYj3B',
    content_limit: '25',
    limit: '25'
  },
  headers: {
    'X-RapidAPI-Key': process.env.KEY,
    'X-RapidAPI-Host': process.env.HOST
  }
};

try {
	const response = await axios.request(options);
  const podcastsResponse = response.data.content.items[1].content;
  for(let index = 0; index < 25; index++){
   const id = podcastsResponse.items[index].id;
   const name = podcastsResponse.items[index].name;
   const artist = podcastsResponse.items[index].publisher;
   const image = podcastsResponse.items[index].images[1].url;
   const uri = podcastsResponse.items[index].uri;
   const newPodcast: Podcast = {
    id,
    name,
    artist,
    uri,
    image
   };
   data.push(newPodcast);
  }
  console.log(data);
} catch (error) {
	console.error(error);
}
}

// callSpotifyPodcastAPI();
callAPIbyGenre();