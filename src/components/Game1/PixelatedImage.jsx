import React, { useEffect, useRef } from "react";

const PixelatedImage = ({ src, pixelSize = 1, width = 100, length }) => {
  const canvasRef = useRef(null);
  const imgRef = useRef(new Image());

  useEffect(() => {
    const img = imgRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    img.onload = () => {
      const originalWidth = img.width;
      const originalHeight = img.height;

      // Dimensionner le canvas selon l'image originale
      canvas.width = originalWidth;
      canvas.height = originalHeight;

      // Réduction de l'image à une taille plus petite
      const scaledWidth = Math.ceil(originalWidth / pixelSize);
      const scaledHeight = Math.ceil(originalHeight / pixelSize);

      const tempCanvas = document.createElement("canvas");
      tempCanvas.width = scaledWidth;
      tempCanvas.height = scaledHeight;
      const tempCtx = tempCanvas.getContext("2d");

      // Dessiner l'image dans le canvas temporaire (petite échelle)
      tempCtx.drawImage(img, 0, 0, scaledWidth, scaledHeight);

      // Dessiner l'image mise à l'échelle sur le canvas principal
      ctx.imageSmoothingEnabled = false; // Désactive le lissage
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

    // Charger l'image
    img.src = src;
  }, [src, pixelSize]);

  return (
    <div>
      <div className="w-full bg-secondary-accent dark:bg-dark-secondary2 h-20 rounded-tr-[50px]">
        <div
          className="bg-accent h-20 flex items-center rounded-tr-[50px]"
          style={{ width: `${width}%` }}
        >
          <p className="text-3xl font-bold text-black dark:text-dark-title m-10">
            {length} {length == 1 ? "restant" : "restants"}
          </p>
        </div>
      </div>
      <canvas ref={canvasRef} className="rounded-b-[50px] w-full" />
    </div>
  );
};

export default PixelatedImage;
