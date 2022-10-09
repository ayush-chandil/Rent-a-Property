import React from 'react'
import Search from "./Search/Search";
import Property from "./Property/PropertyTypes";
import RecentSection from "../home/RecentProperty/Recentsection";
import Awards from "./Awards/Awards";
import Location from "./location/Location";
import Agents from "./Agents/Agents";
import Pacakge from "./Pacakge/Pacakge";


function Home() {
  return (
    <>
      <Search/>
      <Property/>
      <RecentSection searchTerm={""}/>
      <Awards/>
      <Location/>
      <Agents/>
      <Pacakge/>
    </>
  )
}

export default Home