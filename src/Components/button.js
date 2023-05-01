import { useState, useEffect, useRef } from "react";

export function ImageGallery() {
  const [imageSrc, setImageSrc] = useState("https://source.unsplash.com/random");
  const counterRef = useRef(0);

  useEffect(() => {
    counterRef.current = counterRef.current + 1;
  }, [imageSrc]);

  function handleChangeImage() {
    setImageSrc(`https://source.unsplash.com/random?${counterRef.current}`);
  }

  return (
    <div>
      <img src={imageSrc} alt="Random Image" width="500" height="500" />
      <button onClick={handleChangeImage}>Change Image</button>
    </div>
  );
}