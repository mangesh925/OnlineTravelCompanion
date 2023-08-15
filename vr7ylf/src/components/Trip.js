import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/5.jpg";
import Trip2 from "../assets/8.jpg";
import Trip3 from "../assets/6.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1> Recent Trips</h1>
      <p>You can discover unique destinations using Google Maps.</p>
      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Trip in Indonesia"
          text="Indonesia, an archipelago of over 17,000 islands, offers a diverse tapestry of experiences. From the vibrant streets of Jakarta, the tranquil beaches of Bali, to the ancient temples of Borobudur in Java, there's a world to discover. Dive into the crystal-clear waters of Raja Ampat to witness unparalleled marine biodiversity, or trek Sumatra's jungles to glimpse the majestic orangutan. The rich culture, mouth-watering cuisine, and warm hospitality ensure an unforgettable Indonesian adventure."
        />
        <TripData
          image={Trip2}
          heading="Trip in Malaysia"
          text="
          Malaysia, where the modern meets the traditional, captivates with its contrasting landscapes. Kuala Lumpur's iconic Petronas Towers reach skyward, while ancient rainforests sprawl below in places like Borneo. The UNESCO-listed George Town in Penang woos with colonial charm and a rich culinary scene. From idyllic beaches in Langkawi to the cool highlands of Cameron and Genting, Malaysia promises diversity, adventure, and a melting pot of Malay, Chinese, and Indian cultures."
        />
        <TripData
          image={Trip3}
          heading="Trip in France"
          text="France, the epitome of romance and refinement, beckons with iconic landmarks like the Eiffel Tower and Notre-Dame. Venture beyond Paris to the lavender fields of Provence, the vine-clad valleys of Bordeaux, and the glamorous French Riviera. Immerse in a world of art in the Louvre, relish gourmet cuisine in Lyon, and trace history on Normandy's shores. Whether it's the snowy Alps or the châteaux of the Loire Valley, France is a timeless voyage of discovery.
          "
        />
      </div>
    </div>
  );
}

export default Trip;
