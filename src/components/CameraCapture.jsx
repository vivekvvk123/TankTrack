// // CameraCapture.jsx
// import React, { useRef, useState } from 'react';

// const CameraCapture = ({ onCapture }) => {
//   const videoRef = useRef(null);
//   const canvasRef = useRef(null);

//     const [capturedImage, setCapturedImage] = useState(null);

//   const startCamera = async () => {
//     try {
//       const stream = await navigator.mediaDevices.getUserMedia({ video: true });
//       videoRef.current.srcObject = stream;
//     } catch (err) {
//       console.error('Error accessing the camera: ', err);
//     }
//   };

//   const captureImage = () => {
//     const canvas = canvasRef.current;
//     const video = videoRef.current;

//     canvas.width = video.videoWidth;
//     canvas.height = video.videoHeight;

//     const context = canvas.getContext('2d');
//     context.drawImage(video, 0, 0, canvas.width, canvas.height);

//     const imageData = canvas.toDataURL('image/png');
//     onCapture(imageData);
//   };

//   return (
//     <div>
//       <div>
//         <video ref={videoRef} autoPlay />
//         <button onClick={startCamera}>Start Camera</button>
//       </div>
//       <div>
//         <button onClick={captureImage}>Capture Image</button>
//       </div>
//       <canvas ref={canvasRef} style={{ display: 'none' }} />
//       {capturedImage && <img src={capturedImage} alt="Captured" />}
//     </div>
//   );
// };

// export default CameraCapture;

// // import React, { useRef, useState } from 'react';

// // const CameraCapture = () => {
// //   const videoRef = useRef(null);
// //   const canvasRef = useRef(null);
// //   const [capturedImage, setCapturedImage] = useState(null);

// //   const startCamera = async () => {
// //     try {
// //       const stream = await navigator.mediaDevices.getUserMedia({ video: true });
// //       videoRef.current.srcObject = stream;
// //     } catch (err) {
// //       console.error('Error accessing the camera: ', err);
// //     }
// //   };

// //   const captureImage = () => {
// //     const canvas = canvasRef.current;
// //     const video = videoRef.current;

// //     canvas.width = video.videoWidth;
// //     canvas.height = video.videoHeight;

// //     const context = canvas.getContext('2d');
// //     context.drawImage(video, 0, 0, canvas.width, canvas.height);

// //     const imageData = canvas.toDataURL('image/png');
// //     setCapturedImage(imageData);
// //   };

// //   return (
// //     <div>
// //       <div>
// //         <video ref={videoRef} autoPlay />
// //         <button onClick={startCamera}>Start Camera</button>
// //       </div>
// //       <div>
// //         <button onClick={captureImage}>Capture Image</button>
// //       </div>
// //       <canvas ref={canvasRef} style={{ display: 'none' }} />
//     //   {capturedImage && <img src={capturedImage} alt="Captured" />}
// //     </div>
// //   );
// // };

// // export default CameraCapture;

// CameraCapture.jsx
import React, { useState, useRef } from "react";
import Webcam from "react-webcam";
import { Button } from "@/components/ui/button";

const CameraCapture = ({ onCapture }) => {
  const webcamRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);

  const capturePhoto = (e) => {
    e.preventDefault();
    const imageSrc = webcamRef.current.getScreenshot();
    setCapturedImage(imageSrc);
    // onCapture(imageSrc);

    // Convert base64 image to Blob
    fetch(imageSrc)
      .then((res) => res.blob())
      .then((blob) => {
        onCapture(blob);
      });
  };

  return (
    <div>
      {capturedImage ? (
        <img src={capturedImage} alt="Captured" />
      ) : (
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width={250}
          height={250}
          style={{ transform: "scaleX(-1)" }}
        />
      )}
      <Button className="" onClick={capturePhoto}>
        {capturedImage ? "Retake Photo" : "Capture Photo"}
      </Button>
    </div>
  );
};

export default CameraCapture;



//working with axios

// import React, { useState, useRef } from "react";
// import Webcam from "react-webcam";
// import { Button } from "@/components/ui/button";
// import axios from 'axios';

// const CameraCapture = ({ onCapture }) => {
//   const webcamRef = useRef(null);
//   const [capturedImage, setCapturedImage] = useState(null);
//   const [uploading, setUploading] = useState(false);
//   const [imageUrl, setImageUrl] = useState('');

//   const capturePhoto = (e) => {
//     e.preventDefault();
//     const imageSrc = webcamRef.current.getScreenshot();
//     setCapturedImage(imageSrc);

//     // Convert base64 image to Blob
//     fetch(imageSrc)
//       .then((res) => res.blob())
//       .then((blob) => {
//         uploadToImgbb(blob);
//       });
//   };

//   const uploadToImgbb = async (imageBlob) => {
//     setUploading(true);

//     const formData = new FormData();
//     formData.append('key', '31cfe7295d591e758c8f72be5ab685cd');
//     formData.append('image', imageBlob);

//     try {
//       const response = await axios.post('https://api.imgbb.com/1/upload', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       setImageUrl(response.data.data.url);
//       onCapture(response.data.data.url);
//     } catch (error) {
//       console.error('Error uploading the image:', error);
//     } finally {
//       setUploading(false);
//     }
//   };

//   return (
//     <div>
//       {capturedImage ? (
//         <img src={capturedImage} alt="Captured" />
//       ) : (
//         <Webcam
//           audio={false}
//           ref={webcamRef}
//           screenshotFormat="image/jpeg"
//           width={250}
//           height={250}
//         />
//       )}
//       <Button onClick={capturePhoto} disabled={uploading}>
//         {uploading ? 'Uploading...' : capturedImage ? "Retake Photo" : "Capture Photo"}
//       </Button>
//       {imageUrl && (
//         <div>
//           <p>Image uploaded successfully!</p>
//           <img src={imageUrl} alt="Uploaded" />
//         </div>
//       )}
//     </div>
//   );
// };

// export default CameraCapture;


// import React, { useState, useRef } from "react";
// import Webcam from "react-webcam";
// import { Button } from "@/components/ui/button";

// const CameraCapture = ({ onCapture }) => {
//   const webcamRef = useRef(null);
//   const [capturedImage, setCapturedImage] = useState(null);

//   const capturePhoto = (e) => {
//     e.preventDefault();
//     const imageSrc = webcamRef.current.getScreenshot();
//     setCapturedImage(imageSrc);

//     // Convert base64 image to Blob
//     fetch(imageSrc)
//       .then((res) => res.blob())
//       .then((blob) => {
//         onCapture(blob);
//       });
//   };

//   return (
//     <div>
//       {capturedImage ? (
//         <img src={capturedImage} alt="Captured" />
//       ) : (
//         <Webcam
//           audio={false}
//           ref={webcamRef}
//           screenshotFormat="image/jpeg"
//           width={250}
//           height={250}
//         />
//       )}
//       <Button onClick={capturePhoto}>
//         {capturedImage ? "Retake Photo" : "Capture Photo"}
//       </Button>
//     </div>
//   );
// };

// export default CameraCapture;

