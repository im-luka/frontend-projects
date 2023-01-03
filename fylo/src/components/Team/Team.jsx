import React from "react";
import "./Team.css";
import user1 from "../../assets/profile-1.jpg";
import user2 from "../../assets/profile-2.jpg";
import user3 from "../../assets/profile-3.jpg";
import TeamItem from "./TeamItem";

const team = [
  {
    description:
      "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
    author: "Satish Patel",
    title: "Founder & CEO, Huddle",
    img: user1,
  },
  {
    description:
      "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
    author: "Bruce McKenzie",
    title: "Founder & CEO, Huddle",
    img: user2,
  },
  {
    description:
      "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
    author: "Iva Boyd",
    title: "Founder & CEO, Huddle",
    img: user3,
  },
];

const Team = () => {
  return (
    <div className="fylo__team">
      {team.map((user, index) => (
        <TeamItem
          key={index}
          id={index}
          description={user.description}
          author={user.author}
          title={user.title}
          img={user.img}
        />
      ))}
    </div>
  );
};

export default Team;
