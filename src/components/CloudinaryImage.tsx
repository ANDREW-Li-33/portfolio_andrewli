'use client';

// components/CloudinaryImage.tsx
import { CldImage } from 'next-cloudinary';
import { useState } from 'react';

interface CloudinaryImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
}

export default function CloudinaryImage({
  src,
  alt,
  width = 800,
  height = 600,
  className = "",
  priority = false,
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
}: CloudinaryImageProps) {
  const [isLoading, setLoading] = useState(true);

  return (
    <div className="relative w-full h-full">
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg" />
      )}
      
      <CldImage
        src={src}
        width={width}
        height={height}
        alt={alt}
        className={`
          w-full h-full object-cover rounded-lg
          duration-700 ease-in-out
          ${isLoading ? 'scale-110 blur-2xl grayscale' : 'scale-100 blur-0 grayscale-0'}
          ${className}
        `}
        onLoad={() => setLoading(false)}
        priority={priority}
        sizes={sizes}
        crop="fill"
      />
    </div>
  );
}