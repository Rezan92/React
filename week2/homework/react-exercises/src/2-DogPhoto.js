import React, { useState } from "react";

const URL = "https://dog.ceo/api/breeds/image/random";

const DogPhoto = () => {
  const [dogPhotos, setDogPhotos] = useState([]);

  const getDogPhoto = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setDogPhotos([...dogPhotos, data.message]);
    console.log(dogPhotos);
  };
  return (
    <div className="dog-gallery">
      <div className="dog-gallert-container">
        {dogPhotos.map((dogPhoto, index) => {
          return <DogGallery key={index} dogPhoto={dogPhoto} />;
        })}
      </div>
      <Button getDogPhoto={getDogPhoto} dogPhotos={dogPhotos} />
    </div>
  );
};

const DogGallery = ({ dogPhoto }) => {
  return (
    <div className="dog-img-container">
      <img src={dogPhoto} alt="a dog image" />
    </div>
  );
};

const Button = ({ getDogPhoto, dogPhotos }) => {
  return (
    <button className="profile-btn" onClick={() => getDogPhoto()}>
      {dogPhotos.length == 0
        ? "Get your first dog by clicking the button!"
        : "Get a Dog!"}
    </button>
  );
};

export default DogPhoto;
