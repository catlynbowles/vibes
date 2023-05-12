import Image from "next/image";
import React from "react";

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
      <Image className="postcard" src={formFullImage(postdate, imageid)} alt="" height={100} width={100}/>
      <p className="sentence">{sentence}</p>
    </div>
  );
}
