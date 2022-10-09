import React from 'react'
import Heading from '../../common/Heading';
import "./Pacakge.css";

function Pacakge() {
    return (
        <>
            <div className='pack'>
                <Heading title="Select Your Package" subtitle="Affordable and Cheap Price" />
                <div className='group'>
                    <div className='grp'>
                        <p className='types'>Basic</p>
                        <p className='amount'><span className="dollar">$</span> 29</p>
                        <p className='user'>per user, per month</p>

                        <div className='lists'>
                            <p className='names'><i class="fa-solid fa-check" id="fontawesome"></i> 99.5% Uptime Guarantee </p>
                            <p className='names'> <i class="fa-solid fa-check" id="fontawesome"></i>  120GB CDN Bandwidth </p>
                            <p className='names'> <i class="fa-solid fa-check" id="fontawesome"></i> 5GB Cloud Storage </p>
                            <p className='names'><i class="fa-solid fa-x" id="fontawesome"></i> Personal Help Support </p>
                            <p className='names'> <i class="fa-solid fa-x" id="fontawesome"></i> Enterprise SLA </p>
                        </div>
                        <div className="bttnn">
                            <button id="start">Start Basic</button>
                        </div>
                    </div>

                    <div className='grp'>
                        <p className='types'>Standard</p>
                        <p className='amount'><span className="dollar">$</span> 49</p>
                        <p className='user'>per user, per month</p>

                        <div className='lists'>
                            <p className='names'> <i class="fa-solid fa-check" id="fontawesome"></i> 99.5% Uptime Guarantee </p>
                            <p className='names'> <i class="fa-solid fa-check" id="fontawesome"></i>  120GB CDN Bandwidth </p>
                            <p className='names'> <i class="fa-solid fa-check" id="fontawesome"></i> 5GB Cloud Storage </p>
                            <p className='names'> <i class="fa-solid fa-check" id="fontawesome"></i> Personal Help Support </p>
                            <p className='names'> <i class="fa-solid fa-x" id="fontawesome"></i>  Enterprise SLA </p>
                        </div>
                        <div className="bttnn">
                            <button id="strt">Start Standard</button>
                        </div>
                    </div>

                    <div className='grp'>
                        <p className='types'>Platinum</p>
                        <p className='amount'><span className="dollar">$</span> 79</p>
                        <p className='user'>2 user, per month</p>

                        <div className='lists'>
                            <p className='names'><i class="fa-solid fa-check" id="fontawesome"></i> .5% Uptime Guarantee </p>
                            <p className='names'> <i class="fa-solid fa-check" id="fontawesome"></i>  120GB CDN Bandwidth </p>
                            <p className='names'> <i class="fa-solid fa-check" id="fontawesome"></i> 5GB Cloud Storage </p>
                            <p className='names'> <i class="fa-solid fa-check" id="fontawesome"></i>Personal Help Support </p>
                            <p className='names'><i class="fa-solid fa-check" id="fontawesome"></i> Enterprise SLA </p>
                        </div>
                        <div className="bttnn">
                            <button id="start">Start Platinum</button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Pacakge