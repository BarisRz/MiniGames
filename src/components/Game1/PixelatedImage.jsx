import React, { useEffect, useRef, useState } from "react";

const PixelatedImage = ({ src, width = 100, length, pixel, isImageClear }) => {
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
    if (isImageClear) {
      setPixelSize(1);
    } else {
      setPixelSize(pixel);
    }
  }, [src, pixel, isImageClear]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPixelSize((prevPixelSize) => Math.max(prevPixelSize - pixel / 5, 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [src]);

  return (
    <div
      className={`ring-2 ${
        isImageClear ? "ring-green-500" : "ring-primary dark:ring-dark-primary"
      } rounded-[50px] rounded-tl-none overflow-hidden transition-colors max-[500px]:rounded-none`}
    >
      <div className="w-full bg-secondary-accent dark:bg-dark-secondary2 h-20 max-[500px]:h-12">
        <div
          className={`${
            isImageClear ? "bg-green-500" : "bg-accent"
          } h-20 flex items-center max-[500px]:h-12`}
          style={{ width: `${width}%` }}
        >
          <p className="text-3xl font-bold text-black dark:text-dark-title m-10 fixed max-[500px]:text-xl max-[500px]:m-4">
            {isImageClear
              ? "Bonne réponse!"
              : `${length} ${length === 1 ? "restant" : "restants"}`}
          </p>
        </div>
      </div>
      <canvas ref={canvasRef} className="w-full" />
    </div>
  );
};

export default PixelatedImage;
