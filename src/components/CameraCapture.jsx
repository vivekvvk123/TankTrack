
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

