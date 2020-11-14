import React, { useState } from "react";
import { MdEmail, MdLocationOn, MdContactPhone } from "react-icons/md";

const URL = "https://www.randomuser.me/api?results=1";

const Friend = () => {
  const [friend, setFriend] = useState({});
  const [content, setContent] = useState("");

  const getFriend = async () => {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      setFriend(data.results[0]);
      setContent("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="friend-container">
      <FriendProfile
        friend={friend}
        content={content}
        setContent={setContent}
      />
      <Button getFriend={getFriend} />
    </div>
  );
};

const FriendProfile = ({ friend, content, setContent }) => {
  const { name, picture, email, location, phone } = friend;
  return (
    <div>
      {Object.keys(friend).length != 0 && (
        <div className="profile-container">

          <img
            className="profile-image"
            src={picture.large}
            alt={`${name.title} ${name.first} ${name.last} image`}
          />

          <h3 className="profile-name">{`${name.title}. ${name.first} ${name.last}`}</h3>

          <div className="profile-content">
            {content !== "" && <p className="profile-text">{content}</p>}
            <div className="profile-icons">
              <span onClick={() => setContent(email)}>
                <MdEmail size={40}/>
              </span>

              <span onClick={() => setContent(`${location.postcode}, ${location.city} ${location.country}`)}>
                <MdLocationOn size={40}/>
              </span>

              <span onClick={() => setContent(phone)}>
                <MdContactPhone size={40}/>
              </span>
              
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const Button = ({ getFriend }) => {
  return (
    <button className="profile-btn" onClick={() => getFriend()}>
      Get a friend!
    </button>
  );
};

export default Friend;
