import React, { useEffect, useState } from "react"
import { list } from "../../data/Data";
import "./recentproperty.css";

const RecentCard = ({ searchTerm }) => {
    const [datalist, setdatalist] = useState(list);
    console.log(list,searchTerm)
    useEffect(() => {
        const newData = list.filter((val) => {
            console.log(val.location)
            if (val.location.toLowerCase().includes(searchTerm.toLowerCase())) {
                return true;
            }
            else return false;
        })
        setdatalist(newData);
    }, [searchTerm])

    return (
        <>
            <div className='div_content'>
                {datalist.map((val, index) => {
                    const { cover, category, location, name, price, type } = val
                    return (
                        <div className='main_box' key={index}>
                            <div className='img'>
                                <img id="img" src={cover} alt='' />
                            </div>
                            <div className='txt'>
                                <div className='cat'>
                                    <div style={{ background: category === "For Sale" ? "#25b5791a" : "#ff98001a", color: category === "For Sale" ? "#25b579" : "#ff9800", padding: "5px", borderRadius: "2px" }}>{category}</div>
                                    <div><i className='fa fa-heart' style={{ color: 'red' }}></i></div>
                                </div>
                                <h4 className="propertyname">{name}</h4>
                                <p className="location">
                                    <i className='fa fa-location-dot'></i> {location}
                                </p>
                            </div>
                            <div className='btn_div'>
                                <button className='btn2'>{price} /sqft</button>
                                <span className="spn">{type}</span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default RecentCard