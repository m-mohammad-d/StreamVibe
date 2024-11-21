import {
  FaGamepad,
  FaLaptop,
  FaMobileAlt,
  FaTabletAlt,
  FaTv,
  FaVrCardboard,
} from "react-icons/fa";
import DeviceItem from "./DeviceItem";

function Devices() {
  const deviceList = [
    {
      title: "Smartphones",
      paragraph:
        "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store.",
      Icon: FaMobileAlt, 
    },
    {
      title: "Tablet",
      paragraph:
        "StreamVibe provides seamless streaming on all tablets. Enjoy your shows with amazing display quality.",
      Icon: FaTabletAlt,
    },
    {
      title: "Smart TV",
      paragraph:
        "StreamVibe supports Smart TVs, allowing you to enjoy entertainment on a larger screen.",
      Icon: FaTv,
    },
    {
      title: "Laptops",
      paragraph:
        "Stream your favorite content on laptops with full HD support and unmatched speed.",
      Icon: FaLaptop,
    },
    {
      title: "Gaming Consoles",
      paragraph:
        "Experience gaming and streaming combined with StreamVibe's console support.",
      Icon: FaGamepad,
    },
    {
      title: "VR Headsets",
      paragraph:
        "Dive into the world of immersive streaming with VR headsets and enjoy a unique experience.",
      Icon: FaVrCardboard,
    },
  ];

  return (
    <div className="mt-20 mx-4">
      <div className="space-y-4 text-center lg:text-left">
        <h2 className="text-white text-2xl sm:text-3xl font-bold">
          We Provide you streaming experience across various devices.
        </h2>
        <p className="text-grey-60 text-sm sm:text-base">
          With StreamVibe, you can enjoy your favorite movies and TV shows
          anytime, anywhere. Our platform is designed to be compatible with a
          wide range of devices, ensuring that you never miss a moment of
          entertainment.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12 my-8">
        {deviceList.map((device, index) => (
          <DeviceItem
            key={index}
            title={device.title}
            paragraph={device.paragraph}
            Icon={device.Icon} 
          />
        ))}
      </div>
    </div>
  );
}

export default Devices;
