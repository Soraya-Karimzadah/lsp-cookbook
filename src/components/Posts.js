import React from 'react';
import { Post } from "./Post";
import Recipe from "./Recipe";

export const Posts = ({ posts }) => {
  console.log(posts);

  return (
    <div>
      {posts.map((article, index) => (
        <Post article={article} key={index} />
      ))}
    </div>
  );
};




export default function Posts({posts}) {
    return (
        <div>{posts.map((item)=>
           <h2>{item.fields.name} </h2> )}
            
        </div>
    );
}

















