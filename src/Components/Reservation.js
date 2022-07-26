import React from 'react'
import './Reservation.scss'

const Reservation = () => {
    return (
        <div>
            <div className='reservationContainer'>

                <div className='tc'>


                    <h1 className='au'>Reservation</h1>
                </div>







            </div>

            <div className='text-center  co my-5'>
                <h2 className='mb-3'>Online table reservation</h2>
                <p className='p mb-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam illo <br /> praesentium sequi in cum, beatae maiores quae qui.</p>


                <div className='container '>
                    <div className='row'>
                        <div className='col-12 col-md-6 mt-3'>
                            <div className=' text-left mb-3'>
                                <input type="text" placeholder='Full name' className='ic' />
                            </div>

                            <div className=' text-left mb-3'>
                                <input type="number" placeholder='Phone Number' className='ic' />
                            </div>
                            <div className='text-left mb-1'>
                                <input type="email" placeholder='Email Address' className='ic' />
                            </div>
                        </div>

                        <div className='col-12 col-md-6 mt-3'>

                            <div className=' text-right mb-3'>
                                <select className='ic'>
                                    <option value="1 person">1 Person</option>
                                    <option value="2 persons">2 Persons</option>
                                    <option value="3 persons">3 Persons</option>
                                    <option value="4 persons">4 Persons</option>
                                </select>
                            </div>

                            <div className=' text-right mb-3'>
                                <input type="date" placeholder='2 persons' className='ic' />
                            </div>
                            <div className=' text-right mb-3'>
                                <input type="time" placeholder='2 persons' className='ic' />
                            </div>

                        </div>

                    </div>

                </div>

                <button className='btn bw1 my-3'>Reserve a Table</button>


                <div class="container my-5 p-5">
                    <div class="row justify-content-center">
                        <div class="col-lg-8 text-center">
                            <div class="block-decoration-1 py-3">


                                <p class="mb-2 text-xs text-center">
                                    or call us:
                                </p>


                                <a class="display-6 font-serif text-decoration-none text-black ff" href="tel:+19876543210">+1 987 654 3210</a>

                            </div>
                        </div>
                    </div>
                </div>

            </div>


            <div className='map'>


<div class="mapouter"><div class="gmap_canvas"><iframe class="gmap_iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=losangels&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href="https://www.kokagames.com/fnf-friday-night-funkin-mods/"></a></div></div>
</div>


        </div>
    )
}

export default Reservation
