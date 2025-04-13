import React from 'react';
import { FaBookmark } from "react-icons/fa";

// const Blog = (props) => {
//     const {blog} =props;
//     console.log(blog)
//     return (
//         <div>
//             <h1>single blog</h1>
//         </div>
//     );
// };
// 2nd way
const Blog = ({blog}) => {
    
    console.log(blog)
    return (
        <div className='m-2'>
            {/* <h1>{blog.id}</h1> */}
            <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src={blog.cover}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <div className="author flex justify-around items-center">
      <h3>{blog.author}</h3>
      <img className='w-16' src={blog.author_img} alt="" />
      <FaBookmark size={25}/>
    </div>
    <h2 className="card-title">{blog.title}</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    
     <div className="flex">
     {
      blog.hashtags.map((has)=> <p>{has}</p>)
    }
     </div>

    <div className="card-actions justify-end">
      <button className="btn btn-primary">mark as read</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Blog;