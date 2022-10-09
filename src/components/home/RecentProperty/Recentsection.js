import React from "react"
import Heading from "../../common/Heading";
import "./recentproperty.css";
import RecentProperty from "../RecentProperty/RecentProperty";

const Recentsection = ({searchTerm}) => {
  return (
    <>
      <section className='rec'>
        <div className='cont'>
          <Heading title='Recent Property Listed' subtitle='Find your Dream Home' />
          <RecentProperty searchTerm={searchTerm}/>
        </div>
      </section>
    </>
  )
}

export default Recentsection