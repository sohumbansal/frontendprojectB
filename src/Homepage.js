import React from 'react';
import imgSrc from "./Restraunt__photo.jpg";
const Homepage = () => {
  return (
    <>
     <div className='name-rest'>
        THE HAPPY PLACE
      </div>
      <nav className="navbar">
        <div className="btn-group">
          <button className="btn-group__item" onClick={() => (window.location.href = "./menu")} >
            Menu
          </button>
          <button className="btn-group__item"  onClick={() => (window.location.href = "./login")}>
            reservation
          </button>
        </div>
      </nav>
      <div className='itemphoto'>
   <img src={imgSrc} alt='photophoto' className='photophoto' />
</div>
      <div>
      </div>
    </>
  )
}

export default Homepage