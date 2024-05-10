import * as React from "react";
import '../../index.css';
import Button from '../Layout/Button.tsx';
import  { Link } from "react-router-dom";


interface ImageProps {
  src: string;
  alt: string;
  className?: string;
}

const Image: React.FC<ImageProps> = ({ src, alt, className }) => (
  <img loading="lazy" src={src} alt={alt} className={className} />
);

const images = [
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/3345251dd3a2cf79317a388edd7dd9230d17d00df018597e6be46829af9c4fa9?apiKey=fca534dbb5ae4c60a5c6b0192f165ccb&", alt: "Image 1", className: "w-full aspect-[1.69]" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/8fd84d1d6eddaa0243251e4186d474f986496e0a67c2b4e5597b9af96a67df19?apiKey=fca534dbb5ae4c60a5c6b0192f165ccb&", alt: "Image 2", className: "mt-4 w-full aspect-[0.93]" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/8fd84d1d6eddaa0243251e4186d474f986496e0a67c2b4e5597b9af96a67df19?apiKey=fca534dbb5ae4c60a5c6b0192f165ccb&", alt: "Image 3", className: "mt-4 w-full aspect-[0.93]" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ae3fa4a6fa21764298ff32098af03390a31fc8d39ee71b1dfa4b6e0ceef52860?apiKey=fca534dbb5ae4c60a5c6b0192f165ccb&", alt: "Image 4", className: "w-full aspect-[0.94]" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ae3fa4a6fa21764298ff32098af03390a31fc8d39ee71b1dfa4b6e0ceef52860?apiKey=fca534dbb5ae4c60a5c6b0192f165ccb&", alt: "Image 5", className: "mt-4 w-full aspect-[0.94]" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/1dacff21169a9adee786d5020657f95401fa5dc10213b3ff2a186cc19adc6bc7?apiKey=fca534dbb5ae4c60a5c6b0192f165ccb&", alt: "Image 6", className: "mt-4 w-full aspect-[1.69]" },
];



const LandingPage: React.FC = () => {
  return (
    <main className="flex flex-col justify-center px-16 bg-white max-md:px-5">
      <div className="max-md:mr-1 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <section className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-center self-stretch py-20 max-md:max-w-full">
              <div className="flex flex-col mt-60 text-black max-md:mt-10 max-md:max-w-full">
                <h1 className="text-6xl font-bold leading-[67px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
                  Discover a world of books with BiblioTrack
                </h1>
                <p className="mt-6 text-lg leading-7 max-md:max-w-full">
                  Manage your Project Gutenberg E-books with ease
                </p>
              </div>
              <div className="flex gap-4 items-start self-start pt-4 mt-6 text-base leading-6">
                <Link to="/signup" className=" justify-center px-6 py-3 text-white bg-black border border-black border-solid max-md:px-5">
                  Get Started
               </Link>
               <Link to="/login" className=" justify-center px-6 py-3 text-black bg-white border border-black border-solid max-md:px-5">
                  Login
               </Link>
              </div>
            </div>
          </section>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="grow max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow max-md:mt-4">
                    {images.slice(0, 3).map((image, index) => (
                      <Image key={index} {...image} />
                    ))}
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow max-md:mt-4">
                    {images.slice(3).map((image, index) => (
                      <Image key={index} {...image} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LandingPage;