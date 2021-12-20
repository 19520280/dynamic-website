import image1 from "../../assets/images/collection/image2.png";
import image2 from "../../assets/images/collection/image2-1.png";
import image3 from "../../assets/images/collection/image2-2.png";
import image4 from "../../assets/images/collection/image2-3.png";
import image5 from "../../assets/images/collection/image2-4.png";
import image6 from "../../assets/images/collection/image2-5.png";
import image7 from "../../assets/images/collection/image2-6.png";
import image8 from "../../assets/images/collection/image2-7.png";

import Hero from "../../components/Hero/Hero";
import Slider from "../../components/Slider/Slider";
import FooterCollection from "../../components/Footer/FooterCollection";

function App() {
  const navbarLinks = [
    { url: "#", title: "Home" },
    { url: "#", title: "Trips" },
    { url: "#", title: "Rewards" },
  ];

  return (
    <div>
      <Hero imageSrc={image1} title="WINTER 2021" />

      <Slider
        imageSrc={image5}
        flipped={true}
        title={"LOOK 1"}
        subtitle={"You can have anything you want in life if you dress for it."}
      />
      <Slider
        imageSrc={image2}
        title={"LOOK 2"}
        subtitle={"Clothes mean nothing until someone lives in them."}
      />
      <Slider
        imageSrc={image3}
        title={"LOOK 3"}
        subtitle={"Style is a way to say who you are without having to speak. "}
        flipped={true}
      />

      <Slider
        imageSrc={image4}
        title={"LOOK 4"}
        subtitle={
          "Fashion is like eating, you shouldn't stick to the same menu."
        }
      />
      <Slider
        imageSrc={image6}
        title={"LOOK 5"}
        subtitle={
          "I firmly believe that with the right footwear one can rule the world."
        }
        flipped={true}
      />
      <Slider
        imageSrc={image7}
        title={"LOOK 6"}
        subtitle={"In difficult times, fashion is always outrageous."}
      />
      <FooterCollection />
    </div>
  );
}

export default App;
