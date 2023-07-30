import React, { useState, useRef } from "react";
import ProfileImage from "../../img/profileImg.jpg";
import "./PostShare.css";
import { UilScenery } from "@iconscout/react-unicons";
import { UilPlayCircle } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilSchedule } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";

const PostShare = () => {
  const [image, setImage] = useState(null);
  const imageRef = useRef();

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage({
        image: URL.createObjectURL(img),
      });
    }
  };

  const handleImageClose = () => {
    setImage(null);
  };

  const handleImageClick = () => {
    imageRef.current.click();
  };

  const handleShareClick = () => {
    // Lógica para compartir el post
  };

  return (
    <div className="PostShare">
      <img className="PostShare__profile-image" src={ProfileImage} alt="" />
      <div className="PostShare__input-wrapper">
        <input
          className="PostShare__input"
          type="text"
          placeholder="What's happening"
        />
        <PostOptions
          onImageClick={handleImageClick}
          onShareClick={handleShareClick}
        />
        {image && (
          <PreviewImage image={image} onCloseClick={handleImageClose} />
        )}
        <input
          type="file"
          name="myImage"
          ref={imageRef}
          onChange={onImageChange}
          style={{ display: "none" }}
        />
      </div>
    </div>
  );
};

const PostOptions = ({ onImageClick, onShareClick }) => {
  return (
    <div className="PostShare__post-options">
      <Option color="var(--photo)" icon={<UilScenery />} onClick={onImageClick}>
        Photo
      </Option>
      <Option color="var(--video)" icon={<UilPlayCircle />}>
        Video
      </Option>
      <Option color="var(--location)" icon={<UilLocationPoint />}>
        Location
      </Option>
      <Option color="var(--shedule)" icon={<UilSchedule />}>
        Shedule
      </Option>
      <button className="PostShare__button ps-button" onClick={onShareClick}>
        Share
      </button>
    </div>
  );
};

const Option = ({ color, icon, onClick, children }) => {
  return (
    <div className="PostShare__option" style={{ color }} onClick={onClick}>
      {icon}
      {children}
    </div>
  );
};

const PreviewImage = ({ image, onCloseClick }) => {
  return (
    <div className="PostShare__preview-image">
      <UilTimes onClick={onCloseClick} />
      <img src={image.image} alt="" />
    </div>
  );
};

export default PostShare;