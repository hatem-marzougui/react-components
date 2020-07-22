import React from 'react';
import Photo from "./profile/ProfilPhoto";
import Adress from "./profile/Adress";
import Name from "./profile/FullName"
import './App.css';

function Main() {
  return (
    <div className="body">
        <Name/>
        <Photo/>
        <Adress/>
      
    </div>
  );
}

export default Main;
