import React, { useRef, useEffect, useState } from "react";


const Avatar = (props) => {
  console.log('imageUrl', props.imageUrl);
  useEffect(() => {}, []);

  return (
    <img src={props.imageUrl} className="avatar-img"/>
  );
};

export default Avatar;
