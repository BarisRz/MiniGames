import React, { useEffect, useRef } from "react";

const PixelatedImage = ({ src, pixelSize = 1 }) => {
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

  return <canvas ref={canvasRef} />;
};

export default PixelatedImage;
