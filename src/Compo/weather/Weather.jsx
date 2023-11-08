import axios from 'axios';
import React, { useState } from 'react'


function Weather() {
const [weather,setWeather]=useState(null)
const [data,setData]=useState(true)
const celvin = -273.5

const deviceName = navigator.userAgent;
console.log(deviceName,"device name");
const deviceNamep = navigator.platform;
console.log(deviceNamep+'platform');
    const handleClick = async () => {
      try {
        const pos = await new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject);
        });

        const { latitude, longitude } = pos.coords;
        console.log(latitude, longitude);

        const options = {
          method: "GET",
          url: `https://open-weather13.p.rapidapi.com/city/latlon/${latitude}/${longitude}`,
          headers: {
            "X-RapidAPI-Key":
              "1f4ca355c1msh755c88fdf2bcb7dp1aeee7jsnbf449bc4cbd6",
            "X-RapidAPI-Host": "open-weather13.p.rapidapi.com",
          },
        };

        const response = await axios.request(options);
        console.log(response.data, "this is response data");
        setWeather(response.data)
        setData(false)
      } catch (error) {
        console.error(error);
      }
    };


  return (
    <div>
      <section className="vh-100" style={{ backgroundColor: "#f5f6f7" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-10 col-lg-8 col-xl-6">
              <div
                className="card bg-dark text-white"
                style={{ borderRadius: "40px" }}
              >
                {data && (
                  <button
                    onClick={() => {
                      handleClick();
                    }}
                    style={{
                      backgroundColor: "yellow",
                      fontWeight: "bolder",
                     
                      zIndex:'999'
                    }}
                  >
                    click here to find your current locality weather
                    informations
                  </button>
                )}
                <div className="bg-image" style={{ borderRadius: "35px" }}>
                  <img
                    src="https://wallpapers.com/images/high/creative-pictures-hb77zjz6aflfn2nq.webp"
                    className="card-img"
                    alt="weather"
                  />
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(190, 216, 232, .5)" }}
                  ></div>
                </div>
                <div className="card-img-overlay text-dark p-5">
                  <h4 className="mb-0">
                    {weather?.name},{weather?.sys?.country}
                  </h4>
                  <p className="display-4 my-3 ptag">
                    {(weather?.main?.temp + celvin).toFixed(2)}°C
                  </p>
                  <p className="mb-2">
                    Feels Like:{" "}
                    <strong>
                      {(weather?.main?.feels_like + celvin).toFixed(2)}°C
                    </strong>
                  </p>
                  <h5>{weather?.weather[0]?.description}</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Weather
