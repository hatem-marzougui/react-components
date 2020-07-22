import React from 'react';
import Image from '../photo.png';
import "../style.css";
const Photo=()=> {
    return (
    <img className="profilImage"   src={Image} alt= "person identity"></img> 
    );
  }

  export default Photo;