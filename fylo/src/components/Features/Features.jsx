import React from "react";
import "./Features.css";
import item1 from "../../assets/icon-access-anywhere.svg";
import item2 from "../../assets/icon-security.svg";
import item3 from "../../assets/icon-collaboration.svg";
import item4 from "../../assets/icon-any-file.svg";
import FeaturesItem from "./FeaturesItem";

const features = [
  {
    img: item1,
    title: "Access your files, anywhere",
    description:
      "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.",
  },
  {
    img: item2,
    title: "Security you can trust",
    description:
      "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.",
  },
  {
    img: item3,
    title: "Real-time collaboration",
    description:
      "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.",
  },
  {
    img: item4,
    title: "Store any type of file",
    description:
      "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.",
  },
];

const Features = () => {
  return (
    <div className="fylo__features" id="features">
      {features.map((feature, index) => (
        <FeaturesItem
          key={index}
          img={feature.img}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </div>
  );
};

export default Features;
