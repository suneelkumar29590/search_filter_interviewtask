
import React, { useState } from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';

function Resize() {

    const navigate=useNavigate()
  const [isPopupVisible, setPopupVisible] = useState(false);

  const handleSaveClick = () => {
    setPopupVisible(true);
  };

  const handlePopupDrag = (e) => {
    if (isDragging) {
      const popup = document.getElementById('popup');
      popup.style.left = e.clientX + 'px';
      popup.style.top = e.clientY + 'px';
    }
  };
  const handleCloseClick = () => {
    setPopupVisible(false);
  };

  const handleMouseUp = () => {
    isDragging = false;
    document.body.style.userSelect = 'auto';
  };

  let isDragging = false;

  const navigatenest=()=>{
    navigate("/doubt")
  }

  return (
    <div className="App" onMouseMove={handlePopupDrag} onMouseUp={handleMouseUp}>
       <button id="saveButton" onClick={handleSaveClick}>Save</button>
      <div className="content">
        <section className="left-section resizable">
          <div className='container py-3' style={{backgroundColor:"skyblue",height:"500px"}}>
            <div className='row'>
              <div className='col-md-3 mx-2'>
                <div style={{width:"80px",height:"80px",backgroundColor:"grey"}}></div>

              </div>
              <div className='col-md-3 mx-2'>
              <div style={{width:"80px",height:"80px",backgroundColor:"grey"}}></div>

              </div>
              <div className='col-md-3'>
              <div style={{width:"80px",height:"80px",backgroundColor:"grey"}}></div>

              </div>

            </div>
            <div className='row'>
              <div className='col-md-3 mx-2 my-2 '>
              <div style={{width:"80px",height:"80px",backgroundColor:"grey"}}></div>

              </div>
              <div className='col-md-3 mx-2 my-2'>
              <div style={{width:"80px",height:"80px",backgroundColor:"grey"}}></div>

              </div>
              <div className='col-md-3 my-2'>
              <div style={{width:"80px",height:"80px",backgroundColor:"grey"}}></div>

              </div>

            </div>
            <div className='row'>
              <div className='col-md-3 mx-2'>
              <div style={{width:"80px",height:"80px",backgroundColor:"grey"}}></div>

              </div>
              <div className='col-md-3 mx-2'>
              <div style={{width:"80px",height:"80px",backgroundColor:"grey"}}></div>

              </div>
              <div className='col-md-3'>
              <div style={{width:"80px",height:"80px",backgroundColor:"grey"}}></div>

              </div>

            </div>
           
           
            
          </div>
        </section>
        
      {isPopupVisible && (
        <div id="popup" className="popup resizable " >
          
          <div style={{width:"150px",height:"150px",backgroundColor:"grey"}} className='mt-5 mx-5'><span className="close" onClick={handleCloseClick} style={{marginLeft:"130px"}}>✖</span></div>
          
        </div>
      )}
        <section className="right-section ">
          Right Section
        </section>
      </div>
      

        <button className='btn btn-warning' onClick={navigatenest}>next task</button>
     
    </div>
  );
}

export default Resize;
