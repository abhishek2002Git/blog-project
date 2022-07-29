import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppState } from "../contexts/Context";
import "./product.css"

const Product = () => { 
  const { setSidebar } = AppState();
  let { id } = useParams();
  // const [blogID, setBlogID] = useState();
  const [blogData, setBlogData] = useState();

  const getBlog = async () => {
    const api_url =
      `https://inotebookbackend.herokuapp.com/api/message/blog/${id}`;
    const response = await fetch(api_url);
    const data = await response.json();
    setBlogData(data[0].content);
  };

  useEffect(() => {
      getBlog();
  }, [])

  return (
    <div onClick={()=>{setSidebar(false)}}> 
    {/* closing sidebar on clicking */}
      <div dangerouslySetInnerHTML={{__html: blogData}} />
    </div>
  );
};

export default Product;
