import React, { useState } from 'react'
import Heading from "../../common/Heading";
import "./location.css";
import Orleans from "../../images/orleans.jpg";
import california from "../../images/california.jpg";
import liverpool from "../../images/liverpool.jpg";
import montreal from "../../images/montreal.jpg";
import york from "../../images/york.jpg";
import jersey from "../../images/jerrsy.jpg";

function Location() {

    return (
        <>
            <div className='locate'>
                <Heading title="Explore By Location" subtitle="Find your Destiny" />

                <div className='box'>
                    <div className="flip-box">
                        <div className="flip-box-inner">
                            <div className="flip-box-front">
                                <img src={Orleans} style={{ width: '300px', height: '200px' }} />
                            </div>
                            <div className="flip-box-back">
                                <h2>New Orleans, Louisiana</h2>
                                <p>12 Villas 07 Offices 10 Apartments</p>
                            </div>
                        </div>
                    </div>

                    <div className="flip-box">
                        <div className="flip-box-inner">
                            <div className="flip-box-front">
                                <img src={jersey} style={{ width: '300px', height: '200px' }} />
                            </div>
                            <div className="flip-box-back">
                                <h2>Jerrsy, United States</h2>
                                <p>12 Villas 07 Offices 10 Apartments</p>
                            </div>
                        </div>
                    </div>

                    <div className="flip-box">
                        <div className="flip-box-inner">
                            <div className="flip-box-front">
                                <img src={liverpool} style={{ width: '300px', height: '200px' }} />
                            </div>
                            <div className="flip-box-back">
                                <h2>Liverpool, London</h2>
                                <p>12 Villas 07 Offices 10 Apartments</p>
                            </div>
                        </div>
                    </div>

                    <div className="flip-box">
                        <div className="flip-box-inner">
                            <div className="flip-box-front">
                                <img src={york} style={{ width: '300px', height: '200px' }} />
                            </div>
                            <div className="flip-box-back">
                                <h2>NewYork, United States</h2>
                                <p>12 Villas 07 Offices 10 Apartments</p>
                            </div>
                        </div>
                    </div>

                    <div className="flip-box">
                        <div className="flip-box-inner">
                            <div className="flip-box-front">
                                <img src={california} style={{ width: '300px', height: '200px' }} />
                            </div>
                            <div className="flip-box-back">
                                <h2>California, USA</h2>
                                <p>12 Villas 07 Offices 10 Apartments</p>
                            </div>
                        </div>
                    </div>

                    <div className="flip-box">
                        <div className="flip-box-inner">
                            <div className="flip-box-front">
                                <img src={montreal} style={{ width: '300px', height: '200px' }} />
                            </div>
                            <div className="flip-box-back">
                                <h2>Montreal, Canada</h2>
                                <p>12 Villas 07 Offices 10 Apartments</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Location