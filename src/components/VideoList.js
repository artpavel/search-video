import React from 'react';
import VideoItem from './VideoItem';

export const VideoList = ({ videos, onVideoSelect }) => {
  const renderList = videos.map(item => (
    <VideoItem
      key={item.id.videoId}
      video={item}
      onVideoSelect={onVideoSelect}
    />
  ));

  return <div className='ui relaxed divided list'>{renderList}</div>;
};
