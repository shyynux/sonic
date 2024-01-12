import React from 'react';
import { FC } from "react";
import { Podcast }from '../../../../src/podcast';
import { useNavigate } from 'react-router-dom';

interface PodcastProps{
    podcast: Podcast;
}

const PodcastComponent: FC<PodcastProps> = ({ podcast }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/podcasts/${podcast.id}`);
        console.log("the podcast was clicked.");
    }

    return (
        <div
        style={{
          border: '1px solid #ccc',
          borderRadius: '8px',
          padding: '8px',
          marginBottom: '8px',
          marginRight: '8px',
          cursor: 'pointer',
        }}
        onClick={handleClick}
      >

    <img
        src={podcast.image}
        alt={`${podcast.name} Cover`}
        style={{ maxWidth: '50%', height: 'auto', borderRadius: '8px', marginBottom: '8px' }}
      />
      <h3 style={{ margin: '0', fontSize: '1.2em' }}>{podcast.name}</h3>
      <p style={{ margin: '8px 0', color: '#666' }}>By: {podcast.artist}</p>
        </div>
    );
}

export default PodcastComponent;