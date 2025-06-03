import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import img5 from "../../assets/img5.jpg";
import img6 from "../../assets/img6.jpg";
import img7 from "../../assets/img7.jpg";
import img8 from "../../assets/img8.jpg";
import img9 from "../../assets/img9.jpg";
import { CiLocationOn } from "react-icons/ci";
import { TbListDetails } from "react-icons/tb";

const TravelPackages = [
  {
    id: 1,
    imgSrc: img1,
    destTitle: "Santorini",
    location: "Greece",
    grade: "ROMANTIC GETAWAY",
    fees: "$60",
    description:
      "Santorini is famous for its dramatic cliffs, whitewashed buildings with blue domes, and stunning sunsets over the Aegean Sea.",
  },
  {
    id: 2,
    imgSrc: img2,
    destTitle: "Kyoto",
    location: "Japan",
    grade: "HISTORICAL EXPLORATION",
    fees: "$45",
    description:
      "Kyoto showcases traditional Japanese culture with its ancient temples, bamboo forests, and geisha districts.",
  },
  {
    id: 3,
    imgSrc: img3,
    destTitle: "Banff National Park",
    location: "Canada",
    grade: "NATURE ADVENTURE",
    fees: "$55",
    description:
      "Home to glacial lakes like Lake Louise and rugged Rocky Mountain peaks. Ideal for hiking and wildlife spotting.",
  },
  {
    id: 4,
    imgSrc: img4,
    destTitle: "Marrakech",
    location: "Morocco",
    grade: "CULTURAL IMMERSION",
    fees: "$40",
    description:
      "A sensory overload with vibrant souks, aromatic spice markets, and historic palaces.",
  },
  {
    id: 5,
    imgSrc: img5,
    destTitle: "Great Barrier Reef",
    location: "Australia",
    grade: "MARINE DISCOVERY",
    fees: "$70",
    description:
      "The world's largest coral reef system, teeming with marine life. A paradise for snorkeling and diving.",
  },
  {
    id: 6,
    imgSrc: img6,
    destTitle: "Machu Picchu",
    location: "Peru",
    grade: "ANCIENT WONDERS",
    fees: "$65",
    description: "An iconic Incan citadel nestled high in the Andes Mountains.",
  },
  {
    id: 7,
    imgSrc: img7,
    destTitle: "Serengeti",
    location: "Tanzania",
    grade: "WILDLIFE SAFARI",
    fees: "$75",
    description:
      "Famous for the annual wildebeest migration and Big Five sightings.",
  },
  {
    id: 8,
    imgSrc: img8,
    destTitle: "Reykjavik",
    location: "Iceland",
    grade: "NORTHERN LIGHTS",
    fees: "$80",
    description:
      "Geothermal spas, volcanic landscapes, and the mesmerizing Aurora Borealis.",
  },
  {
    id: 9,
    imgSrc: img9,
    destTitle: "Paris",
    location: "France",
    grade: "URBAN CHARM",
    fees: "$60",
    description:
      "The 'City of Light' dazzles with iconic landmarks like the Eiffel Tower and Louvre Museum.",
  },
];
const Main = () => {
    return (
      <div className="container py-16 flex flex-wrap items-center justify-center gap-8 cursor-pointer">
        {TravelPackages.map((item, index) => (
          <motion.div
            key={item.id}
            className="card w-[360px] h-[550px] bg-white shadow-lg rounded-lg overflow-hidden relative hover:shadow-2xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ 
              scale: 1.03,
              transition: { 
                type: "spring",
                stiffness: 400,
                damping: 10,
                mass: 0.5
              } 
            }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ 
              type: "tween",
              duration: 0.35,
              ease: "easeInOut",
              delay: index * 0.02
            }}
          >
            <div className="cardImage">
              <img
                src={item.imgSrc}
                alt={item.destTitle}
                className="w-full h-[200px] object-cover rounded-t-lg"
              />
            </div>
  
            <div className="cardContent p-4">
              <h2 className="text-xl font-bold">{item.destTitle}</h2>
              <div className="flex items-center gap-2 mt-1 text-gray-500">
                <CiLocationOn className="font-semibold" />
                <span className="font-semibold">{item.location}</span>
              </div>
            </div>
  
            <div className="w-[90%] h-[6px] mx-auto rounded-full bg-gradient-to-r from-primary to-secondary my-2" />
  
            <div className="cardFooter p-4 flex flex-row justify-between items-center bg-white/50 backdrop-blur-md rounded-b-lg">
              <p className="text-muted uppercase text-1xl tracking-wider font-bold">
                {item.grade}
              </p>
              <span className="text-gray-500 font-bold hover:text-gray-800">
                {item.fees}
              </span>
            </div>
            <div className="w-[90%] h-[6px] mx-auto rounded-full bg-gradient-to-r from-primary to-secondary my-2" />

            <div className="cardDescription p-4">
              <p className="text-gray-700 text-sm">{item.description}</p>
            </div>
  
            <div className="px-4 pb-4">
              <button className="btn flex items-center gap-2 transition duration-200">
                Details <TbListDetails />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    );
  };
  
  export default Main;