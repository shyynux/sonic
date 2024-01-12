
import React from "react";
import { FC } from "react";
import { Podcast }from '../../../../src/podcast';

interface PodcastProps{
    podcast: Podcast;
}

const PodcastComponent: FC<PodcastProps> = ({ podcast }) => {
    return (
        <>
         <div> {podcast.name} </div>
         <div> {podcast.id} </div>
         <div> {podcast.uri} </div>
         <div> {podcast.image} </div>
         <div> {podcast.artist} </div>

        </>
    );
}

export default PodcastComponent;