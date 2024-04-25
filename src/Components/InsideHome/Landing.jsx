import { useEffect, useState } from "react";
import image1 from "../../Images/land-1.webp";
import image2 from "../../Images/land-2.webp";
import image3 from "../../Images/land-3.webp";
const backGrounds = [image1, image2, image3];
export default function Landing() {
  const [currentImage, setCurrentImage] = useState(0);
  const handleImageChange = (index) => {
    setCurrentImage(index);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      const nexIndex = (currentImage + 1) % backGrounds.length;
      handleImageChange(nexIndex);
      return () => clearInterval(interval);
    }, 3000);
  }, [currentImage]);
  return (
    <div className="w-full h-[100vh] transition-all duration-500 ease-in bg-cover bg-center"
      style={{
        backgroundImage: `url(${backGrounds[currentImage]})`,
      }}
    ></div>
  );
}
