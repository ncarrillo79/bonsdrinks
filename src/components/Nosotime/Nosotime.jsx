import React from "react";
import "./Nosotime.css";

const Nosotime = ({ title, imageUrl, body }) => {
  return (
    
    <div className="card-body">
    <div className="card-container">
      <div className="image-container">
        <img src={'https://scontent.fsdu32-1.fna.fbcdn.net/v/t1.0-9/67655228_10219916535332833_7028405755870969856_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=vHVmt-YiIIEAX8wpHbE&_nc_ht=scontent.fsdu32-1.fna&oh=d5d46f43713ba2b73a8adb1ef9e5322a&oe=6087EAC7'} alt="" />
      </div>

      <div className="card-content"></div>
      <div className="card-title">
        <h3>{title}</h3>
      </div>
      <div className="card-body">
        <p>{body}</p>
      </div>
      <div className="btn">
        <button>
          <a>Ver mas</a>
        </button>
      </div>
    </div>
    </div>
  );
};

export default Nosotime;
