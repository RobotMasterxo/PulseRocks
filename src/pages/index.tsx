import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { NextPage } from "next";
import { GiWallet, GiChaingun } from "react-icons/gi";
import { SiSemanticweb } from "react-icons/si";
import { FaTwitter, FaRegCommentDots, FaAssistiveListeningSystems} from 'react-icons/fa';
import { SlBasket } from "react-icons/sl";
import { Slide } from 'react-slideshow-image';
import { BiSelectMultiple } from "react-icons/bi";
import 'react-slideshow-image/dist/styles.css';



interface FeatureCardProps {
  title: string;
  desc: string;
  icon: any;
}

const responsiveSettings = [
  {
      breakpoint: 800,
      settings: {
          slidesToShow: 3,
          slidesToScroll: 3
      }
  },
  {
      breakpoint: 500,
      settings: {
          slidesToShow: 2,
          slidesToScroll: 2
      }
  }
];

  const slideImages = [
    'hex_1.png',
    'pulsex_32.png',
    'inc_8.png',
    'pulse_19.png',
  ];



const FeatureCard = ({ title, desc, icon }: FeatureCardProps) => {
  return (
    <div className="relative p-5 rounded-lg bg-white/40 bg-opacity-20">
      <dt className="flex flex-col items-center md:items-start">
        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#f00add] text-white">
          {icon}
        </div>
        <p className="pt-5 text-lg leading-6 font-medium font-semibold text-[#000000]">
          {title}
        </p>
      </dt>
      <dd className="mt-2 text-base text-center text-gray-600 md:text-left">
        {desc}
      </dd>
    </div>
  );
};

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>PulseRocks</title>
        <meta name="description" content="PulseRocks" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="px-4 md:px-0 mx-auto max-w-[1080px]">
        <div className="md:text-left h-[calc(100vh-60px)] flex justify-center flex-row">
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
              <span className="block text-gray-600 xl:inline und">Welcome to</span>
              <span className="block  text-transparent un bg-clip-text bg-gradient-to-r u from-[#f00add] to-[#732fff] pb-4">
                PulseRocks
              </span>
              <span className="block font-semibold text-[#000000] font-medium text-2xl">
                Collection of NFTs Rocks
              </span>
            </h1>
            <p className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            Each NFT in this collection is a digital masterpiece, meticulously crafted to capture the essence of Richard Heart&apos;s  vision
             and the enchanting allure of the space diamond.
            </p>
            <div className="mt-5 sm:mt-8 sm:flex lg:justify-start md:flex-col lg:flex-row">
              <div>
                <Link
                  href="/mintNFT"
                  className="w-full md:w-[70%] lg:w-full flex items-center justify-center px-8 py-3 border-0 border-transparent text-base font-medium rounded-3xl text-white bg-gradient-to-r from-[#a13bf7] to-[#7500ff] hover:drop-shadow-[0_3px_5px_#7d7d7d] md:py-2 md:text-lg md:px-8"
                >
                  Mint soon
                </Link>
                
                <a
                href="https://twitter.com/RocksOnPulse"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-4 text-blue-500 hover:text-purple-700"
                >
                <FaTwitter size={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="md:flex hidden my-auto w-[30%] md:w-[60%] ml-10 items-end">
            <div className="animate-bounce">
              <Image
                src="mintNFT.png"
                width={500}
                height={450}
                className="ml-10"
                alt="Banner"
              />
            </div>
          </div>
        </div>

        <div className="pt-5 pb-20 mx-auto max-w-7xl">
          <div className="flex flex-col w-full mb-5 text-center md:mb-10">
            <h1 className="text-4xl mb-10 font-bold title-font mb-4 text-[#f00add]">
              Features
            </h1>
          </div>
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            <FeatureCard
              icon={<GiWallet size={25} />}
              title="Mint Your Own NFT"
              desc="With our easy-to-use platform, you can mint your own unique NFT in minutes. You own your keys and your NFT."
            />
            <FeatureCard
              icon={<GiChaingun size={25} />}
              title="Fully Decentralized NFT"
              desc="Where true ownership meets freedom. Our NFT  empowers with a groundbreaking approach. With 0% developer tax on transfers and sales, we prioritize the integrity of your transactions."
            />
            
            <FeatureCard
              icon={<SlBasket size={25} />}
              title="Marketplace for buying and selling"
              desc="Our platform provides an immersive and secure environment for artists, collectors, and enthusiasts to explore, trade, and showcase their unique PulseChain Rocks digital assets."
            />
            
            <FeatureCard
              icon={<FaAssistiveListeningSystems size={25} />}
              title="Listening to Our community."
              desc="We believe in the power of community. We value the voices and perspectives of every member, and we are committed to listening and taking action based on your feedback."
            />
            <FeatureCard
              icon={<FaRegCommentDots size={25} />}
              title="Inspired by 4 tokens."
              desc="NFTs Rocks, a revolutionary creation inspired by 4 tokens, incentive, pulse, pulsex and the greatest of them all HEX"
            />
            <FeatureCard
              icon={<BiSelectMultiple size={25} />}
              title="All NFTS are different."
              desc="At our NFT marketplace, we celebrate the uniqueness and individuality of each NFT. We take pride in offering a collection of 372 distinct NFTs, each one unlike any other. In a world where conformity is rare, we embrace the diversity and creativity that shines through every single piece."
            />
          </dl>
        </div>
        <div className="pt-5 pb-20 mx-auto max-w-7xl">
          <div className="flex flex-col w-full mb-5 text-center md:mb-10">
            <h1 className="text-4xl mb-10 font-bold title-font mb-4 text-[#f00add]">
              Showcase
            </h1>   
          </div>
          <Slide>
          {slideImages.map((image, index) => (
            <div className="each-slide" key={index}>
              <img src={image} alt={`Image ${index + 1}`} style={{ width: '300px', height: '400px' }} />
            </div>
          ))}
        </Slide>
          
        </div>
      </main>
    </>
  );
};

export default Home;
