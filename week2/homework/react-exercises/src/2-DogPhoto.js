import React, { useState } from "react";

const URL = "https://dog.ceo/api/breeds/image/random";

const DogPhoto = () => {
  const [dogPhotos, setDogPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getDogPhoto = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(URL);
      const data = await response.json();
      setDogPhotos([...dogPhotos, data.message]);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="dog-gallery">
      <div className="dog-gallery-container">
        {dogPhotos.map((dogPhoto, index) => {
          return <DogGallery key={index} dogPhoto={dogPhoto} />;
        })}
        {isLoading && (
          <div className="loading-container">
            <div className="loading"></div>
          </div>
        )}
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
