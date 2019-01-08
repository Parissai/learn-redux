import React from 'react';

import Photo from './Photo';
import Comment from './Comment';

const Single = ({ ...props }) => {
  const { postId } = props.params;
  const i = props.posts.findIndex((post) => post.code === postId);
  const post = props.posts[i];
  const comments = props.comments[postId] || [];

  return (
    <div className='single-photo'>
      <Photo index={i} post={post} {...props} />
      <Comment comments={comments} />
    </div>
  )
}


export default Single;
