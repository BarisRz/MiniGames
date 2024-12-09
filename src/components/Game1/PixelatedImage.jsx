import React, { useEffect, useRef, useState } from "react";

const PixelatedImage = ({ src, width = 100, length, pixel }) => {
  const canvasRef = useRef(null);
  const imgRef = useRef(new Image());
  const [pixelSize, setPixelSize] = useState(pixel);

  useEffect(() => {
    const img = imgRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    img.onload = () => {
      const originalWidth = img.width;
      const originalHeight = img.height;

      canvas.width = originalWidth;
      canvas.height = originalHeight;

      const scaledWidth = Math.ceil(originalWidth / pixelSize);
      const scaledHeight = Math.ceil(originalHeight / pixelSize);

      const tempCanvas = document.createElement("canvas");
      tempCanvas.width = scaledWidth;
      tempCanvas.height = scaledHeight;
      const tempCtx = tempCanvas.getContext("2d");

      tempCtx.drawImage(img, 0, 0, scaledWidth, scaledHeight);

      ctx.imageSmoothingEnabled = false;
      ctx.drawImage(
        tempCanvas,
        0,
        0,
        scaledWidth,
        scaledHeight,
        0,
        0,
        originalWidth,
        originalHeight
      );
    };

    img.src = src;
  }, [src, pixelSize]);

  useEffect(() => {
    setPixelSize(pixel);
  }, [src, pixel]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPixelSize((prevPixelSize) => Math.max(prevPixelSize - pixel / 5, 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [src]);

  return (
    <div>
      <div className="w-full bg-secondary-accent dark:bg-dark-secondary2 h-20 rounded-tr-[50px]">
        <div
          className="bg-accent h-20 flex items-center rounded-tr-[50px]"
          style={{ width: `${width}%` }}
        >
          <p className="text-3xl font-bold text-black dark:text-dark-title m-10">
            {length} {length === 1 ? "restant" : "restants"}
          </p>
        </div>
      </div>
      <canvas ref={canvasRef} className="rounded-b-[50px] w-full" />
    </div>
  );
};

export default PixelatedImage;
