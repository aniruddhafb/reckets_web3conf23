import React from 'react'
import { GoChevronDown } from "react-icons/go"

const AddTicket = () => {
    return (
        <>
            <div className="uni-banner pt-[200px]">
                <div className="container">
                    <div className="uni-banner-text-area">
                        <h1>Resell Ticket</h1>
                        <ul>
                            <li><a href="index.html">Home</a></li>
                            <li>Add Ticket</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="login ptb-100">
                <div className="container">
                    <span className='text-center'>Please fill all the details correctly to add your ticket on-chain</span>
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                            <div className="login-form pr-20">
                                <form>
                                    <div className="mb-3">
                                        <label for="exampleInputEmail1" className="form-label">Destination*</label>
                                        <input type="destination" required placeholder='Arrival Destination' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                    <div className="mb-3">
                                        <label for="exampleInputPassword1" className="form-label">Flight Type*</label>
                                        <div className='relative'>
                                            <select name="flightType" className="form-control">
                                                <option value="Direct">Direct</option>
                                                <option value="One Stop">One Stop</option>
                                                <option value="Two Stop">Two Stop</option>
                                                <option value="Three Stop">Three Stop</option>
                                            </select>
                                            <GoChevronDown className='text-[20px] absolute right-1 top-2' />
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label for="exampleInputPassword1" className="form-label">Flight Mode*</label>
                                        <div className='relative'>
                                            <select name="flightMode" className="form-control">
                                                <option value="Return">Return</option>
                                                <option value="One Way">One Way</option>
                                            </select>
                                            <GoChevronDown className='text-[20px] absolute right-1 top-2' />
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label for="exampleInputPassword1" className="form-label">Airline Name*</label>
                                        <div className='relative'>
                                            <select name="airlineName" className="form-control">
                                                <option value="Akasa Air">Akasa Air</option>
                                                <option value="Indigo">Indigo</option>
                                                <option value="Air Asia">Air Asia</option>
                                                <option value="Jet Airways">Jet Airways</option>
                                                <option value="Spice Jet">Spice Jet</option>
                                                <option value="Air India">Air India</option>
                                            </select>
                                            <GoChevronDown className='text-[20px] absolute right-1 top-2' />
                                        </div>
                                    </div>
                                    <button type="button" className="default-button"><span>Add Ticket</span></button>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                            <div className="login-form">
                                <form>
                                    <div className="mb-3">
                                        <label for="exampleInputPassword1" className="form-label">Travellers*</label>
                                        <div className='relative'>
                                            <select name="travellers" className="form-control">
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </select>
                                            <GoChevronDown className='text-[20px] absolute right-1 top-2' />
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label for="exampleInputPassword1" className="form-label">Cabin Type*</label>
                                        <div className='relative'>
                                            <select name="cabinType" className="form-control">
                                                <option value="Economy">Economy</option>
                                                <option value="Premium Economy">Premium Economy</option>
                                                <option value="Business Class">Business Class</option>
                                                <option value="First Class">First Class</option>
                                            </select>
                                            <GoChevronDown className='text-[20px] absolute right-1 top-2' />
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label for="exampleInputUsername1" className="form-label">Upload Ticket*</label>
                                        <input type="file" name='ticketImg' required className="form-control" id="exampleInputUsername1" />
                                    </div>
                                    <div className="mb-3">
                                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                                        <input type="email" name='emailID' placeholder='example@gmail.com' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddTicket