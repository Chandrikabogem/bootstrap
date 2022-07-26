import React from 'react'
import './Secondtheme.scss'
import { useNavigate } from 'react-router-dom';

const SecondTheme = () => {

 const navigate = useNavigate()

    const aboutus = () => {
        navigate("aboutus")

    }
 

    return (
        <div>
            <div className='touchecontainer'>
             
          

               
                        <div className=' mic  align-self-center p-5 tc1'>
                            <p className='colors1' style={{ fontSize: "12px" }}> <span style={{ color: "orange" }}>CAFE</span> / RESTAURANT</p>
                            <h2 className='fo1 mb-3' >Touché</h2>
                            <p className='cafe colors1 mb-5 '>A unique café located in the heart of Los Angeles. Always fresh coffee and <br />biscuits. Open for indoor dining and to-go orders.</p>
                            <button className='btn bw  text-center' >Make Reservation</button>


                     

                </div>





                <div className='container my-5 '>
                    <div className='row'>



                        <div class="col-12 col-md-6  bg-transparent d-flex text-white mb-5">



                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-twitter mx-3" viewBox="0 0 16 16">
                                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                            </svg>

                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-facebook mx-3" viewBox="0 0 16 16">
                                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                            </svg>

                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-instagram mx-3" viewBox="0 0 16 16">
                                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                            </svg>








                        </div>



                        <div class="text-left  col-12 col-md-6 mb-5">

                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="orange" class="bi bi-geo-alt-fill mx-2" viewBox="0 0 16 16">
                                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                            </svg>
                            <span className='colors'>1234 Dining Str., Los Angeles, CA 12345-0000</span>

                        </div>


                    </div>




                </div>




            </div>



            <div className='container'>
                <div className='row'>


                    <div className='col-12 col-md-3'>
                        <hr class="hrlines bg-orange" />
                        <h6 className=''>Take a coffee break or enjoy a meal.</h6></div>
                    <div className='col-12 col-md-3'> <img src="https://yevgenysim-turkey.github.io/touche/assets/img/2.jpg " className='i1' /></div>

                    <div className='col-12 col-md-6 text-left align-self-center'>
                        <h2>Always amazing experience</h2>
                        <p className='p'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias veritatis nisi, consequatur, laborum libero a neque ducimus. Porro rem illum quo nostrum quisquam asperiores. Possimus facilis velit, voluptatibus!</p>
                    </div>
                </div>

            </div>



            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-md-5 text-left align-self-center'>
                        <h2>Beautiful outdoor seating</h2>
                        <p className='p'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias veritatis nisi, consequatur, laborum libero a neque ducimus. Porro rem illum quo nostrum quisquam asperiores. Possimus facilis velit, voluptatibus!</p>
                    </div>
                    <div className='col-12 col-md-3  align-self-end'> <hr class="hrlines bg-orange" /> <h6 className=''>Great variety of foods you will enjoy.</h6></div>
                    <div className='col-12 col-md-4'> <img src="https://yevgenysim-turkey.github.io/touche/assets/img/7.jpg" className='i1' /></div>


                </div>

            </div>




          


            <div className='bim my-5'>
                <div className='container'>
                    <div className='row'>
                    <div className='col-12 col-md-4 pt-5'>

<hr class="hrlines bg-orange " />

<h6 className=''>Enjoy our specialty coffees and award winning <br />doughnutsin a friendly atmosphere.</h6>

</div>
                    </div>

                </div>
              
                {/*  <img src="https://yevgenysim-turkey.github.io/touche/assets/img/19.jpg" className='boi' /> */}
            </div>


            <div className='container text-center mt-5'>
                <div className='row'>
                    <div className=''>
                        <h2 className='mb-2'>Menu options</h2>
                        <p className='p'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione numquam <br />eos perferendis itaque hic unde, ad, laudantium minima.</p>
                        <div className=''>
                            <ul className='d-flex text-center justify-content-center display'>
                                <li className='mr-3'>MAINS</li>
                                <li className='mr-3'>LUNCH</li>
                                <li className='mr-3'>DINNER</li>
                                <li className='mr-3'>DRINKS</li>
                            </ul>

                        </div>


                        <div className='container mb-5 mt-5'>
                            <div className='row'>
                                <div className='col-12 col-md-6 d-flex l py-3 '>
                                    <div className='mr-5'>
                                        <img src="https://yevgenysim-turkey.github.io/touche/assets/img/26.jpg" className='imgt' />
                                    </div>


                                    <div className='text-left mr-2 as'>
                                        <h6>Lorem ipsum dolor sit amet</h6>
                                        <p className='p'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, obcaecati! Sapiente laudantium.</p>
                                    </div>
                                    <div className=''>
                                        <h5>$15</h5>
                                    </div>

                                </div>

                                <div className='col-12 col-md-6 d-flex l py-3'>
                                    <div className='mr-5'>
                                        <img src="https://yevgenysim-turkey.github.io/touche/assets/img/27.jpg" className='imgt' />
                                    </div>


                                    <div className='text-left mr-2 as'>
                                        <h6>Fusce id ante ut arcu</h6>
                                        <p className='p'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, obcaecati! Sapiente laudantium.</p>
                                    </div>
                                    <div className=''>
                                        <h5>$23</h5>
                                    </div>

                                </div>




                            </div>
                        </div>
                        <div className='container mb-5'>
                            <div className='row'>
                                <div className='col-12 col-md-6 d-flex l py-3'>
                                    <div className='mr-5'>
                                        <img src="https://yevgenysim-turkey.github.io/touche/assets/img/28.jpg" className='imgt' />
                                    </div>


                                    <div className='text-left mr-2 as'>
                                        <h6>Fusce sed dolor eget tortor</h6>
                                        <p className='p'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, obcaecati! Sapiente laudantium.</p>
                                    </div>
                                    <div className=''>
                                        <h5>$16</h5>
                                    </div>

                                </div>
                                <div className='col-12 col-md-6 d-flex l py-3 '>
                                    <div className='mr-5'>
                                        <img src="https://yevgenysim-turkey.github.io/touche/assets/img/29.jpg" className='imgt' />
                                    </div>


                                    <div className='text-left mr-2 as'>
                                        <h6>Lorem ipsum dolor sit amet</h6>
                                        <p className='p'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, obcaecati! Sapiente laudantium.</p>
                                    </div>
                                    <div className=''>
                                        <h5>$15</h5>
                                    </div>

                                </div>




                            </div>
                        </div>
                        <div className='container mb-5'>
                            <div className='row'>
                                <div className='col-12 col-md-6 d-flex l py-3'>
                                    <div className='mr-5'>
                                        <img src="https://yevgenysim-turkey.github.io/touche/assets/img/30.jpg" className='imgt' />
                                    </div>


                                    <div className='text-left mr-2 as'>
                                        <h6>Fusce id ante ut arcu</h6>
                                        <p className='p'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, obcaecati! Sapiente laudantium.</p>
                                    </div>
                                    <div className=''>
                                        <h5>$23</h5>
                                    </div>

                                </div>
                                <div className='col-12 col-md-6 d-flex l py-3'>
                                    <div className='mr-5'>
                                        <img src="https://yevgenysim-turkey.github.io/touche/assets/img/31.jpg" className='imgt' />
                                    </div>


                                    <div className='text-left mr-2 as'>
                                        <h6>Fusce sed dolor eget tortor</h6>
                                        <p className='p'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, obcaecati! Sapiente laudantium.</p>
                                    </div>
                                    <div className=''>
                                        <h5>$16</h5>
                                    </div>

                                </div>




                            </div>
                        </div>


                    </div>


                </div>

            </div>






            <div className='container'>
                <div className='row'>
                    <div className='text-center'>
                        <h2 className='mb-2'>Our featured dishes</h2>
                        <div className=''>
                            <p className='p'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam aliquam id  <br />sint accusamus eius voluptatum explicabo quae similique, quas.</p>
                        </div>

                    </div>
                </div>
            </div>


            <div class="container my-5">





                <hr class="my-5" />


                <div id="multi-item-example" class="carousel slide carousel-multi-item" data-ride="carousel">


                    <div class="controls-top">
                        <a class="btn-floating" href="#multi-item-example" data-slide="prev"><i class="fas fa-chevron-left"></i></a>
                        <a class="btn-floating" href="#multi-item-example" data-slide="next"><i
                            class="fas fa-chevron-right"></i></a>
                    </div>

                    <ol class="carousel-indicators">
                        <li data-target="#multi-item-example" data-slide-to="0" class="active"></li>
                        <li data-target="#multi-item-example" data-slide-to="1"></li>

                    </ol>



                    <div class="carousel-inner" role="listbox">


                        <div class="carousel-item active">

                            <div class="col-md-3" style={{ float: "left" }}>
                                <div class="card mb-2">
                                    <img class="card-img-top"
                                        src="https://yevgenysim-turkey.github.io/touche/assets/img/26.jpg" alt="Card image cap" />
                                    <div class="card-body">
                                        <h4 class="card-title">Lorem ipsum dolor sit amet</h4>
                                        <div className='d-flex'>
                                            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, obcaecati! Sapiente laudantium.</p>
                                            <h5>$15</h5>
                                        </div>


                                    </div>
                                </div>
                            </div>

                            <div class="col-md-3" style={{ float: "left" }}>
                                <div class="card mb-2">
                                    <img class="card-img-top"
                                        src="https://yevgenysim-turkey.github.io/touche/assets/img/27.jpg" alt="Card image cap" />
                                    <div class="card-body">
                                        <h4 class="card-title">Lorem ipsum dolor sit amet</h4>
                                        <div className='d-flex'>
                                            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, obcaecati! Sapiente laudantium.</p>
                                            <h5>$32</h5>
                                        </div>


                                    </div>
                                </div>
                            </div>

                            <div class="col-md-3" style={{ float: "left" }}>
                                <div class="card mb-2">
                                    <img class="card-img-top"
                                        src="https://yevgenysim-turkey.github.io/touche/assets/img/28.jpg" alt="Card image cap" />
                                    <div class="card-body">
                                        <h4 class="card-title">Lorem ipsum dolor sit amet</h4>
                                        <div className='d-flex'>
                                            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, obcaecati! Sapiente laudantium.</p>
                                            <h5>$23</h5>
                                        </div>


                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3" style={{ float: "left" }}>
                                <div class="card mb-2">
                                    <img class="card-img-top"
                                        src="https://yevgenysim-turkey.github.io/touche/assets/img/29.jpg" alt="Card image cap" />
                                    <div class="card-body">
                                        <h4 class="card-title">Lorem ipsum dolor sit amet</h4>
                                        <div className='d-flex'>
                                            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, obcaecati! Sapiente laudantium.</p>
                                            <h5>$16</h5>
                                        </div>


                                    </div>
                                </div>
                            </div>


                        </div>

                        <div class="carousel-item">



                            <div class="col-md-3" style={{ float: "left" }}>
                                <div class="card mb-2">
                                    <img class="card-img-top"
                                        src="https://yevgenysim-turkey.github.io/touche/assets/img/30.jpg" alt="Card image cap" />
                                    <div class="card-body">
                                        <h4 class="card-title">Lorem ipsum dolor sit amet</h4>
                                        <div className='d-flex'>
                                            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, obcaecati! Sapiente laudantium.</p>
                                            <h5>$23</h5>
                                        </div>


                                    </div>
                                </div>
                            </div>

                            <div class="col-md-3" style={{ float: "left" }}>
                                <div class="card mb-2">
                                    <img class="card-img-top"
                                        src="https://yevgenysim-turkey.github.io/touche/assets/img/31.jpg" alt="Card image cap" />
                                    <div class="card-body">
                                        <h4 class="card-title">Lorem ipsum dolor sit amet</h4>
                                        <div className='d-flex'>
                                            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, obcaecati! Sapiente laudantium.</p>
                                            <h5>$16</h5>
                                        </div>


                                    </div>
                                </div>
                            </div>




                        </div>




                    </div>




                </div>
            </div>



            <div className='text-center  co my-5'>
                <h2 className='mb-3'>Make online reservation</h2>
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

            </div>

            <div className='container'>
                <div className='row'>
                    <div className='text-center'>
                        <h2 className='mb-2'>What clients say about us</h2>
                        <p className='p'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>

                        <div class="container-fluid py-2">
                            <div class="row align-items-center">
                                <div class="col-auto">
                                    <a class="h1" href="#carouselExampleControls" role="button" data-slide="prev">
                                        <span>&lt;</span>
                                    </a>
                                </div>
                                <div class="col">
                                    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                                        <div class="carousel-inner">
                                            <div class="carousel-item active">
                                                <div class="row align-items-center">
                                                    <div class="col-md py-2">
                                                        <blockquote>
                                                            <q>  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos at veritatis vitae modi ex quis quibusdam error repudiandae adipisci dolore perspiciatis iste, vel fuga a, libero architecto ratione deleniti sequi. </q>
                                                            <p className='text-left'>LIAM SMITH</p>
                                                        </blockquote>


                                                    </div>
                                                    <div class="col-md py-2">
                                                        <img class="d-block img-fluid" src="https://yevgenysim-turkey.github.io/touche/assets/img/20.jpg" alt="First slide" className='imc' />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="carousel-item">
                                                <div class="row align-items-center">
                                                    <div class="col-md py-2">
                                                        <blockquote>
                                                            <q>  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos at veritatis vitae modi ex quis quibusdam error repudiandae adipisci dolore perspiciatis iste, vel fuga a, libero architecto ratione deleniti sequi. </q>
                                                            <p className='text-left'>LIAM SMITH</p>
                                                        </blockquote>
                                                    </div>
                                                    <div class="col-md py-2">
                                                        <img class="d-block img-fluid" src="https://yevgenysim-turkey.github.io/touche/assets/img/21.jpg" alt="2nd slide" className='imc' />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="carousel-item">
                                                <div class="row align-items-center">
                                                    <div class="col-md py-2">
                                                        <blockquote>
                                                            <q>  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos at veritatis vitae modi ex quis quibusdam error repudiandae adipisci dolore perspiciatis iste, vel fuga a, libero architecto ratione deleniti sequi. </q>
                                                            <p className='text-left'>LIAM SMITH</p>
                                                        </blockquote>
                                                    </div>
                                                    <div class="col-md py-2">
                                                        <img class="d-block img-fluid" src="https://yevgenysim-turkey.github.io/touche/assets/img/22.jpg" alt="Third slide" className='imc' />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-auto">
                                    <a class="h1" href="#carouselExampleControls" role="button" data-slide="next">
                                        <span>&gt;</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>






            <div className='text-center'>
                <h2 className='mb-3'>Upcoming events</h2>
                <p className='p'>Commodi rem veritatis quis eaque mollitia.</p>
            </div>

            <div className='rockcon p-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 col-md-5 p-5'>


                            <p className='date pb-3 pt-5 '>SEPTEMBER 30, 2017</p>
                            <h4 className='loh pb-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum voluptas, aut ea quae!</h4>
                            <p className='lop pb-3'>Alias earum, labore doloremque iusto a modi et, dolorem veritatis iste quis ab. Facere est optio, voluptate molestias aspernatur impedit perferendis odit?</p>
                            <button className='btn bw1  px-4 '> Reserve Table</button>


                        </div>
                    </div>
                </div>







            </div>

            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-2 col-md-1'>
                        <span style={{ fontSize: "40px" }}>29</span><br />
                        <span>Sep</span>

                    </div>


                    <div className='col-10 col-md-8'>
                        <h4>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum voluptas, aut ea quae!
                        </h4>
                    </div>


                    <div className='col-3 col-md-3'>
                        <button className='btn bw1'>Reserve Table</button>
                    </div>
                </div>

            </div>


            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-2 col-md-1'>
                        <span style={{ fontSize: "40px" }}>28</span><br />
                        <span>Sep</span>

                    </div>


                    <div className='col-10 col-md-8'>
                        <h4>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum voluptas, aut ea quae!
                        </h4>

                    </div>


                    <div className='col-3 col-md-3'>
                        <button className='btn bw1'>Reserve Table</button>
                    </div>
                </div>

            </div>





            <div className='newscon text-center p-5 mt-5'>
                <h2 className='mb-3 mt-5'>Newsletter</h2>

                <p className='p mb-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam illo <br /> praesentium sequi in cum, beatae maiores quae qui.</p>
                <div className='d-flex justify-content-center mb-5'>
                    <input className='ic2 mr-5' type="text" />
                    <button className='btn bw1 px-3 mt-2'>Reserve Table</button>
                </div>

            </div>


            <div className='text-center mt-5'>
                <h2>Our gallery</h2>
                <p className='p'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>

            </div>
            <div className='container mb-5'>
                <div className='row'>
                    <div className='col-6 col-md-4 cn'>
                        <img src="https://yevgenysim-turkey.github.io/touche/assets/img/11.jpg" className='imgz mb-3' />
                        <img src="https://yevgenysim-turkey.github.io/touche/assets/img/15.jpg" className='imgz mb-3' />
                        <img src="https://yevgenysim-turkey.github.io/touche/assets/img/18.jpg" className='imgz mb-3' />
                    </div>
                    <div className='col-6 col-md-4 cn'>

                        <img src="https://yevgenysim-turkey.github.io/touche/assets/img/16.jpg" className='imgz1 mb-3' />
                        <img src="https://yevgenysim-turkey.github.io/touche/assets/img/12.jpg" className='imgz mb-3' />
                    </div>
                    <div className='col-6 col-md-4 cn'>
                        <img src="https://yevgenysim-turkey.github.io/touche/assets/img/13.jpg" className='imgz mb-3' />
                        <img src="https://yevgenysim-turkey.github.io/touche/assets/img/14.jpg" className='imgz mb-3' />
                        <img src="https://yevgenysim-turkey.github.io/touche/assets/img/17.jpg" className='imgz mb-3' />
                    </div>



                </div>

            </div>





            <div className='map mb-5'>


                <div class="mapouter"><div class="gmap_canvas"><iframe class="gmap_iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=losangels&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href="https://www.kokagames.com/fnf-friday-night-funkin-mods/"></a></div></div>
            </div>



          








        </div>







    )
}

export default SecondTheme
