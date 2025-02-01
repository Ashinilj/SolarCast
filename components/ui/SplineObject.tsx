'use client'

import { useEffect, useState } from 'react';
import Spline from '@splinetool/react-spline/next';

export const SplineObject = () => {
  const [sceneUrl, setSceneUrl] = useState<string | null>(null); // State to hold the scene URL

  useEffect(() => {
    // You can simulate fetching the scene URL or performing async tasks here
    const loadScene = async () => {
      try {
        // Example of an async operation (replace with actual logic if needed)
        const fetchedSceneUrl = "https://prod.spline.design/dhuBJ6BGGXIwVzfB/scene.splinecode";
        setSceneUrl(fetchedSceneUrl);
      } catch (error) {
        console.error("Error loading scene:", error);
      }
    };

    loadScene(); // Trigger async operation when component mounts
  }, []); // Empty dependency array ensures this runs once when the component mounts

  return (
    <div className="h-full w-full">
      {/* Render the Spline object only when the scene URL is available */}
      {sceneUrl ? (
        <Spline scene={sceneUrl} />
      ) : (
        <p>Loading...</p> // Show loading message while the scene URL is being fetched
      )}
    </div>
  );
};
