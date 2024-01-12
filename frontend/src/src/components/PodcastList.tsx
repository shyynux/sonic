import React from 'react';
import { Podcast } from "../../../../src/podcast";
import { FC, useState } from "react";
import PodcastComponent from "./Podcast";


interface PodcastListProps {
  podcasts: Podcast[];
}

const PodcastList: FC<PodcastListProps> = ({ podcasts }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const podcastsPerPage = 5;
  const indexOfLastPodcast = currentPage * podcastsPerPage;
  const indexOfFirstPodcast = indexOfLastPodcast - podcastsPerPage;
  const currentPodcasts = podcasts.slice(indexOfFirstPodcast, indexOfLastPodcast);
 
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div>
      <h1>Podcasts in Tech and business:</h1>

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', marginBottom: '16px' }}>
        {currentPodcasts.map((podcast) => (
          <PodcastComponent key={podcast.id} podcast={podcast} />
        ))}
      </div>

      <div>
        <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
          Previous
        </button>
        <button onClick={() => paginate(currentPage + 1)} disabled={currentPodcasts.length < podcastsPerPage}>
          Next
        </button>
      </div>
    </div>
  );
};

export default PodcastList;
