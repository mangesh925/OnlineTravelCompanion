import Mountain1 from "../assets/1.jpg";
import Mountain2 from "../assets/2.jpg";
import Mountain3 from "../assets/3.jpg";
import Mountain4 from "../assets/4.jpg";
import "./DestinationStyles.css";
import DestinationData from "./DestinationData";

const Destination = () => {
  return (
    <div className="destination">
      <h1> Popular Destination </h1>
      <p> Trips give you the chance to see a lot, within a time frame </p>
      <DestinationData
        className="first-des"
        heading="Taal Volcano, Batangas"
        text="The Taal Volcano is situated on the island of Luzon in the Philippines. Renowned for its picturesque setting in the middle of Taal Lake, this volcano is one of the most active in the country. Taal has erupted over 30 times since the 16th century, often with devastating consequences for nearby communities. One of its unique features is the Volcano Island, which holds a crater lake. Within this crater lake lies yet another small landmass, Vulcan Point, creating a curious island within a lake on an island within a lake on an island phenomenon. Although Taal stands at a modest height of about 311 meters, its explosive history and close proximity to populated areas make it a significant concern for volcanologists and local authorities. As a popular tourist destination, its scenic views juxtapose its volatile nature, embodying both the beauty and unpredictability of our planet."
        img1={Mountain1}
        img2={Mountain2}
      />
      <DestinationData
        className="first-des-reverse"
        heading="Mt. Daguldul, Batangas"
        text="Mt. Daguldul, located in Batangas, Philippines, is a popular hiking destination known for its relatively easy trail and scenic vistas. Often frequented by beginners and weekend trekkers, the mountain stands at approximately 670 meters above sea level. The hike to its summit offers a blend of different terrains, from forested trails to grasslands.

        En route to the peak, hikers are greeted with views of verdant landscapes, the coastline of Batangas, and even the distant outlines of Mindoro on clearer days. The summit provides panoramic views of the South China Sea, making the trek rewarding. Along the trail, makeshift rest stops and stores, often referred to as 'sari-sari' stores, offer snacks and drinks to replenish trekkers."
        img1={Mountain3}
        img2={Mountain4}
      />
    </div>
  );
};

export default Destination;
