import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Doubt() {
    const data = [
        {
          day: "SUNDAY",
          temp: 68,
          image: "https://png.pngtree.com/png-clipart/20190904/original/pngtree-windy-weather-png-image_4468848.jpg",
          message: "WINDY",
          date: "02/07/2023",
        },
        {
          day: "MONDAY",
          temp: 74,
          image: "https://clipart-library.com/data_images/193476.png",
          message: "SUNNY",
          date: "03/07/2023",
        },
        {
          day: "TUESDAY",
          temp: 83,
          image: "https://p7.hiclipart.com/preview/275/622/480/thunderstorm-lightning-clip-art-thunder.jpg",
          message: "THUNDERSTORMS",
          date: "04/07/2023",
        },
        {
          day: "WEDSDAY",
          temp: 75,
          image: "https://www.edupics.com/image-01cloudy-dm9953.jpg",
          message: "MOSTLY CLOUDY",
          date: "05/07/2023",
        },
        {
          day: "THUSDAY",
          temp: 82,
          image: "https://w7.pngwing.com/pngs/832/827/png-transparent-cloudy-sun-cloud-material-free-to-pull-the-sun-partly-cloudy-material-thumbnail.png",
          message: "PARTLY CLOUDY",
          date: "06/07/2023",
        },
        {
          day: "FRIDAY",
          temp: 81,
          image: "https://img.freepik.com/free-vector/rainy-cloud-sticker-white-background_1308-59851.jpg?w=2000",
          message: "RAIN",
          date: "07/07/2023",
        },
        {
          day: "SAT",
          temp: 90,
          image: "https://clipart-library.com/data_images/193476.png",
          message: "SUNNY",
          date: "08/07/2023",
        },
      ];
     
    const navigate=useNavigate()
  const [fromDate, setFromDate] = useState(""); // State for the "From" date
  const [toDate, setToDate] = useState(""); // State for the "To" date
  const [filter, setFilter] = useState([]);
  const [wheather,setwheather]=useState(data);
  const handleSubmit = () => {
    // Filter data based on date range
    const filteredData = wheather.filter((item) => {
      const itemDate = new Date(item.date);
      if (!isNaN(itemDate)) {
        if ((!fromDate || itemDate >= new Date(fromDate)) && (!toDate || itemDate <= new Date(toDate))) {
          return true;
        }
      } else {
        return false;
      }
    });

    // Use the filtered data as needed
    console.log(filteredData);
    setFilter(filteredData);
    setwheather(filteredData);
  };

  const nextpage=()=>{
    navigate("/single")
  }

  return (
    <div className="App">
      <div className="container">
        <div className="d-flex flex-row">
          <h1>From</h1>
          <input type="text" value={fromDate} onChange={(e) => setFromDate(e.target.value)} />
          <h1>To</h1>
          <input type="text" value={toDate} onChange={(e) => setToDate(e.target.value)} />
          <button className="btn1" style={{ marginLeft: "20px", marginRight: "20px" }} onClick={handleSubmit}>
            Submit
          </button>
          <h2 className="" style={{ color: "gary" }}>
            FORECAST
          </h2>
        </div>
      </div>

      <ul>
      
 <div className='container mt-5'>
  <div className='row'>
    <div className='col-md-2'></div>
    <div className=''>
      <div className=' d-flex flex-row flex-wrap justify-content-start'>
        {wheather.length > 0 &&
          wheather.map((filteredItem, index) => (
            <div key={index} className='card  mb-5 cardimage shadow' style={{width:"120px"}}>
              <button style={{ backgroundColor: "blue", color: "white", width: "90px" }}>
                {filteredItem.day}
              </button>
              <h5>{filteredItem.temp}</h5>
              <img
                src={filteredItem.image}
                className='img'
                alt={filteredItem.message}
                style={{ height: "100px", width: "100px" }}
              />
              <p>{filteredItem.message}</p>
              <p>{filteredItem.date}</p>
            </div>
          ))}
      </div>
    </div>
  </div>
</div>

      </ul>

      <button className="btn btn-primary" onClick={nextpage}>nest task</button>
    </div>
  );
}

export default Doubt;