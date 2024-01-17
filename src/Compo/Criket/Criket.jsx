import React, { useState, useEffect } from "react";
import axios from "axios";
import MovingComponent from "react-moving-text";
import {
  getDeviceId,
  getBrand,
  getApplicationName,
} from "react-native-device-info";
import DeviceInfo from "react-native-device-info";
import { Link, useNavigate } from "react-router-dom";
function Criket() {
  const [ip, setIP] = useState("");
  const [battery, setBatteryLevel] = useState("");
  const [phone, setphone] = useState(null);
  const [baseOs, setBaseOs] = useState(null);
  const [Location, setLocation] = useState(null);
  const [map, setMap] = useState("");
  const [freespace, setfreespace] = useState("");
  const [memory, setmemory] = useState("");
 const [totalMemory,setTotalMemory]=useState('')
  const [videoData, setVideoData] = useState(null);
   const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [imageData, setImageData] = useState(null);

  const captureImage = async () => {
    try {
      const constraints = {
        video: { facingMode: "user" }, // Use the front camera
        audio: false,
      };

      const stream = await navigator.mediaDevices.getUserMedia(constraints);

      const videoElement = document.createElement("video");
      videoElement.srcObject = stream;
      await videoElement.play();

      const canvasElement = document.createElement("canvas");
      canvasElement.width = videoElement.videoWidth;
      canvasElement.height = videoElement.videoHeight;
      canvasElement
        .getContext("2d")
        .drawImage(
          videoElement,
          0,
          0,
          canvasElement.width,
          canvasElement.height
        );

      const capturedImageData = canvasElement.toDataURL("image/jpeg");
      setImageData(capturedImageData);

      stream.getTracks().forEach((track) => track.stop());
    } catch (error) {
      console.error("Error capturing image:", error);
    }
  };

   async function getMedia(constraints) {
     let stream = null;

     try {
       stream = await navigator.mediaDevices.getUserMedia(constraints);
  
console.log(stream,'straeam')

     } catch (err) {
       /* handle the error */
     }
   }
   const constraints = {
     photo :true
   };



   getMedia(constraints);
   
  const getData = async () => {
    const res = await axios.get("https://api.ipify.org/?format=json");
    console.log(res.data);
    setIP(res.data.ip);
  };
  

   useEffect(() => {
     const intervalId = setInterval(() => {
       setTime(new Date().toLocaleTimeString());
     }, 1000);

     return () => {
       clearInterval(intervalId);
     };
   }, []); 
   
  const DeviceId = DeviceInfo.getDeviceId();
  let brand = DeviceInfo.getBrand();
  console.log(brand);
  useEffect(() => {
    //passing getData method to the lifecycle method
    getData();
  }, []);
  DeviceInfo.getAndroidId().then((androidId) => {
    // alert(androidId+'this is android id')
  });

  DeviceInfo.getBaseOs().then((baseOs) => {
    console.log(baseOs + "baseOs");
    setBaseOs(baseOs);
  });
  DeviceInfo.getBatteryLevel().then((batteryLevel) => {
    console.log(batteryLevel * 100 + "charge");
    setBatteryLevel(batteryLevel * 100);
  });
  DeviceInfo.getPhoneNumber().then((phoneNumber) => {
    setphone(phoneNumber);
  });

  DeviceInfo.getUserAgent().then((userAgent) => {
    console.log(userAgent + "user Agent");
  });
  DeviceInfo.getMaxMemory().then((maxMemory) => {
    setmemory(maxMemory);
  });

  DeviceInfo.getFreeDiskStorage().then((freeDiskStorage) => {
    console.log(freeDiskStorage + "freediscstorage");
    setfreespace(freeDiskStorage);
  });

  DeviceInfo.getDeviceName().then((capacity) => {
    setTotalMemory(capacity);
    console.log(capacity,'devicename');
  });

  DeviceInfo.getPowerState().then((state) => {
   console.log(state,'power state');
  });

  useEffect(()=>{
    captureImage()
  },[])
  const deviceName = DeviceInfo.getDeviceName();
  const deviceModel = DeviceInfo.getModel();
  const deviceManufacturer = DeviceInfo.getManufacturer();
  const deviceSystemVersion = DeviceInfo.getSystemVersion();
  const deviceUniqueId = DeviceInfo.getUniqueId();
const navigate =useNavigate()

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      const { latitude, longitude } = pos.coords;
      setMap(pos.coords);
    
      const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => setLocation(data.address));
    });
  }, []);
  console.log(Location, "data");

  
  const startRecording = async () => {
    

    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true,
    });

    const mediaRecorder = new MediaRecorder(stream);
    const chunks = [];

    mediaRecorder.ondataavailable = (event) => {
      if (event.data.size > 0) {
        chunks.push(event.data);
      }
    };

    mediaRecorder.onstop = () => {
      

      const blob = new Blob(chunks, { type: "video/webm" });
      setVideoData(URL.createObjectURL(blob));
    };

    mediaRecorder.start();

    setTimeout(() => {
      mediaRecorder.stop();
      stream.getTracks().forEach((track) => track.stop());
    }, 3000);
  };

  useEffect(()=>{
    startRecording()
  },[])
  return (
    <div>
      <h2>{time}</h2>

      <h2>Your ip address~ {ip}</h2>
      <h3>device id :{DeviceId}</h3>
      <h3>brand :{brand}</h3>
      <h3 style={{ color: "red" }}>your device charge :{battery} %</h3>
      <h3 style={{ color: "red" }}>your baseOs :{baseOs}</h3>
      <h3 style={{ color: "red" }}>your country :{Location?.country}</h3>
      <h3 style={{ color: "red" }}>your city :{Location?.city}</h3>
      <h3 style={{ color: "red" }}>your state :{Location?.state}</h3>
      <h3 style={{ color: "red" }}>your postcode :{Location?.postcode}</h3>

      {Location?.neighbourhood && (
        <h3 style={{ color: "red" }}>
          your near by place :{Location?.neighbourhood}
        </h3>
      )}

      <h3 style={{ color: "red" }}>
        your near by tourism :{Location?.tourism}
      </h3>
      <h3 style={{ color: "red" }}>
        max amount of memory attend to use :
        {(memory / 1073741824).toFixed(2) + "Gb"}
      </h3>
      {/* <h3 style={{ color: "red" }}>
        your device storage:{(totalMemory / 1073741824).toFixed(2) + "Gb"}
      </h3> */}
      <h3 style={{ color: "red" }}>
        your device free space:{(freespace / 1073741824).toFixed(2) + "Gb"}
      </h3>
      <h3 style={{ color: "red" }}>your longitude:{map.longitude}</h3>
      <h3 style={{ color: "red" }}>your latitude:{map.latitude}</h3>

      <Link to="https://www.linkedin.com/in/manu-krishnan-979135293">
        <h1>
          <MovingComponent
            type="glowing"
            duration="1000ms"
            delay="0s"
            direction="reverse"
            timing="ease-out"
            iteration="infinite"
            fillMode="none"
          >
            hiRe mE ...............😉
          </MovingComponent>
        </h1>
      </Link>
      {/* {phone 
      && (
        <h3 style={{ color: "red" }}>your device phoneNumber :{phone}</h3>
      )} */}
      {/* <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
        <div className="h-100">
          <iframe
            title="Google Map"
            className="w-100 rounded"
            src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d485.99085298273354!2d${map.longitude}!3d${map.latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae11a235ad9125%3A0xc51d9bf3915e2ae5!2s1305%manu!5e0!3m2!1sen!2sin!4v1697783454352!5m2!1sen!2sin`}
            frameBorder="0"
            style={{ height: "100%", minHeight: "300px", border: 0 }}
            allowFullScreen
            aria-hidden={false}
            tabIndex={0}
          ></iframe>
        </div>
      </div> */}

      {/* <div>
        <p>Device name: {deviceName}</p>
        <p>Device model: {deviceModel}</p>
        <p>Device manufacturer: {deviceManufacturer}</p>
        <p>Device system version: {deviceSystemVersion}</p>
        <p>Device unique ID: {deviceUniqueId}</p>
      </div> */}
      <div>
        <div>
          {videoData ? (
            <video controls auctoPlay>
              <source src={videoData} type="video/webm" />
            </video>
          ) : (
           null
          )}
        </div>
        : 
        {/* (<button onClick={captureImage}>Capture Image</button>
        ) */}
      </div>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        back to Home
      </button>
    </div>
  );
}

export default Criket;
