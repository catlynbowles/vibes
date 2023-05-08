import React from "react";
import LoadingIcon from "../../LoadingIcon/LoadingIcon";
import Postcard from "../Postcard/Postcard";
import "./Gallery.css";

export default function Gallery({ postcards }) {
  const generatePostcards = () => {
    return postcards
      .filter((postcard) => postcard.$.imageid)
      .map((postcard) => {
        return (
          <Postcard
            sentence={postcard.$.sentence}
            imageid={postcard.$.imageid}
            postdate={postcard.$.postdate}
          />
        );
      });
  };
  return (
    <div className="gallery">
      {postcards.length ? generatePostcards() : <LoadingIcon />}
    </div>
  );
}
