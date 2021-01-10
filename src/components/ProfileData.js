import React, { useState, useRef } from "react";
import eminem from "./../assets/eminem.jpg";
import uploadIcon from "./../assets/upload.svg";
import editIcon from "./../assets/edit.svg";

const initialState = {
  image: eminem,
  name: "Marshall Bruce Mathers III",
  nickName: "Eminem",
  birthDate: "1972/10/17",
  about:
    "Born Marshall Bruce Mathers III on October 17, 1972, in Kansas City, Missouri. Spent childhood moving back and forth between Kansas City and Metro Detroit. Attended Lincoln High School in Warren 1986-89. Hustled self-made cassettes of his work to places like Record Time in Roseville. His girlfriend (now wife) Kimberly gave birth to daughter Haile Jade on Dec. 25, 1995.",
};

export default function ProfileData() {
  const [user, setUser] = useState(initialState);

  const nameInput = useRef(null);
  const nickNameInput = useRef(null);
  const birthDateInput = useRef(null);
  const aboutInput = useRef(null);

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setUser((prev) => ({ ...prev, image: URL.createObjectURL(img) }));
    }
  };
  const handleInputs = (e) => {
    if (e.target.name === "about") {
      auto_grow(e.target);
    }
    setUser((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const auto_grow = (element) => {
    element.style.height = element.scrollHeight + "px";
  };

  const handleEdit = (el) => {
    el.current.removeAttribute("disabled");
    el.current.focus();
  };

  return (
    <div className="profile row">
      <div className="col-lg-6 mx-auto">
        <div
          className="profile__img"
          style={{ backgroundImage: `url(${user.image})` }}
        >
          <label className="upload">
            <input type="file" onChange={onImageChange} />
            <img src={uploadIcon} alt="upload" />
          </label>
        </div>
        <form>
          <div className="profile__block">
            <div className="input-wrap">
              <span>Name: </span>
              <input
                type="text"
                value={user.name}
                name="name"
                onChange={handleInputs}
                ref={nameInput}
                disabled
                onBlur={(e) => e.target.setAttribute("disabled", true)}
              ></input>
            </div>
            <img
              src={editIcon}
              alt="edit"
              onClick={() => handleEdit(nameInput)}
            />
          </div>
          <div className="profile__block">
            <div className="input-wrap">
              <span>Nickname: </span>
              <input
                type="text"
                value={user.nickName}
                name="nickName"
                onChange={handleInputs}
                ref={nickNameInput}
                disabled
                onBlur={(e) => e.target.setAttribute("disabled", true)}
              ></input>
            </div>
            <img
              src={editIcon}
              onClick={() => handleEdit(nickNameInput)}
              alt="edit"
            />
          </div>
          <div className="profile__block">
            <div className="input-wrap">
              <span>Birth Date: </span>
              <input
                type="text"
                value={user.birthDate}
                name="birthDate"
                onChange={handleInputs}
                ref={birthDateInput}
                disabled
                onBlur={(e) => e.target.setAttribute("disabled", true)}
              ></input>
            </div>
            <img
              src={editIcon}
              onClick={() => handleEdit(birthDateInput)}
              alt="edit"
            />
          </div>
          <div className="profile__block">
            <div className="input-wrap">
              <span>About: </span>
              <textarea
                type="text"
                value={user.about}
                name="about"
                onChange={handleInputs}
                ref={aboutInput}
                disabled
                onBlur={(e) => e.target.setAttribute("disabled", true)}
              ></textarea>
            </div>
            <img
              style={{
                alignSelf: "flex-start",
              }}
              src={editIcon}
              alt="edit"
              onClick={() => handleEdit(aboutInput)}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
