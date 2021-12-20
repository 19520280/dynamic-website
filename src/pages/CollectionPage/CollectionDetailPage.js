import image1 from "../../assets/images/collection/image2.png";
import image2 from "../../assets/images/collection/image2-1.png";
import image3 from "../../assets/images/collection/image2-2.png";

import Hero from "../../components/Hero/Hero";
import Slider from "../../components/Slider/Slider";

function App() {
  const navbarLinks = [
    { url: "#", title: "Home" },
    { url: "#", title: "Trips" },
    { url: "#", title: "Rewards" },
  ];

  return (
    <div >
      <Hero imageSrc={image1} />
      <Slider
        imageSrc={image2}
        title={"Be an explorer."}
        subtitle={
          "Our platform offers a wide variety of unique travel locations!"
        }
      />
      <Slider
        imageSrc={image3}
        title={"Memories for a lifetime."}
        subtitle={"Your dream vacation is only a few clicks away."}
        flipped={true}
      />
    </div>
  );
}

export default App;