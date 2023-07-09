import React from "react";
import Action from "./components/Action";
import Slider from "./pages/Slider";
import "./App.css";
import Responsibilites from "./components/Responsibilites";
import Help from "./components/Help";
import NonProfitTeam from "./components/NonProfitTeam";
import Featured from "./components/Featured";
import Comments from "./components/comments";
import Volunteer from "./components/Volunteer";



function homepage() {
  return (
    <div className="" style={{backgroundColor:"white"}}>
      <Slider />
      <Action />
      <Responsibilites />
      <Help />
      <NonProfitTeam />
      <Featured />
      <Comments />
      <Volunteer />
     
    </div>
  );
}

export default homepage;
