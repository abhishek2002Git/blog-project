import React from "react";

const blog = () => {

  const getBlog = async () => {
    const api_url = "https://inotebookbackend.herokuapp.com/api/message/blog/62dbe75f8c6eb24ba7c83cd0";
    const response = await fetch(api_url);
    const data = await response.json();
    console.log(data[0].content);
  };

  return <div onClick={getBlog}>blog</div>;
};

export default blog;
