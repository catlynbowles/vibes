import React from "react";
import "./Postcard.css";

export default function Postcard({ sentence, imageid, postdate }) {
  const formFullImage = (postdate, imageid) => {
    let imgpath = `http://images.wefeelfine.org/data/images/`;
    imgpath += postdate.replaceAll("-", "/");
    imgpath += "/" + imageid;
    imgpath += "_full.jpg";
    return imgpath;
  };

  return (
    <div className="postcard-wrapper">
      <img className="postcard" src={formFullImage(postdate, imageid)} alt=""/>
      <p className="sentence">{sentence}</p>
    </div>
  );
}
