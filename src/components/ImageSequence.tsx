"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

export default function ImageSequence() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const { scrollYProgress } = useScroll(); // 0 to 1

  useEffect(() => {
    // Preload images
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;
    
    const handleImageLoad = () => {
      loadedCount++;
      if (loadedCount === 240) {
        setImages(loadedImages);
        // Draw first frame
        drawFrame(loadedImages[0]);
      }
    };

    for (let i = 1; i <= 240; i++) {
      const img = new window.Image();
      const paddedIndex = i.toString().padStart(3, '0');
      
      // Always set onload and onerror handlers before setting the src
      img.onload = handleImageLoad;
      img.onerror = () => {
        console.warn(`Failed to load frame: ezgif-frame-${paddedIndex}.jpg`);
        handleImageLoad(); // Still count it to prevent blocking initialization
      };
      
      img.src = `${basePath}/sequence/ezgif-frame-${paddedIndex}.jpg`;
      loadedImages.push(img);
    }
  }, []);

  const drawFrame = (img: HTMLImageElement) => {
    const canvas = canvasRef.current;
    if (!canvas || !img) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas dimensions to match window mapping
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const hRatio = canvas.width / img.width;
    const vRatio = canvas.height / img.height;
    const ratio = Math.max(hRatio, vRatio); // Object-cover
    
    const centerShift_x = (canvas.width - img.width * ratio) / 2;
    const centerShift_y = (canvas.height - img.height * ratio) / 2;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Draw background color strictly first to avoid transparent bugs
    ctx.fillStyle = "#050505";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  };

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (images.length === 0) return;
    const scrollVal = Math.max(0, Math.min(1, latest));
    const frameIndex = Math.min(
      Math.floor(scrollVal * 240),
      239
    );
    drawFrame(images[frameIndex]);
  });

  useEffect(() => {
    const handleResize = () => {
      if (images.length > 0) {
        const frameIndex = Math.min(Math.floor(scrollYProgress.get() * 240), 239);
        drawFrame(images[frameIndex]);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [images, scrollYProgress]);

  return (
    <div className="fixed inset-0 w-full h-screen overflow-hidden -z-10 bg-[var(--color-brand-bg)]">
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}
