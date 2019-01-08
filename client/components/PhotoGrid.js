import React from 'react';

import Photo from './Photo';

const PhotoGrid = ({ posts, ...props }) => (
  <div className="photo-grid">
    {posts.map((post, i) =>
      <Photo
        key={i}
        index={i}
        post={post}
        {...props}
      />
    )}
  </div>
)

export default PhotoGrid;
