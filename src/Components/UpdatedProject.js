import React from 'react'
/*  import 'bootstrap/dist/css/bootstrap.min.css';   */
/* import 'bootstrap/dist/js/bootstrap.bundle.min'; */
import './UpdatedProject.css'

const UpdatedProject = () => {
    return (
        <div className='total'>
          {/*   <nav className="navbar navbar-expand-lg navbar-light  container fixed-top">

                <img src="https://shreethemes.in/techwind/layouts/assets/images/logo-dark.png" class="inline-block dark:hidden" alt="" />




                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">




                    <span className="navbar-toggler-icon "></span>
                </button>




                <div className="collapse navbar-collapse justify-content-center " id="navbarTogglerDemo03">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0 px-5">
                        <li className="nav-item active">
                            <a className="nav-link mx-3 navhead" href="#" style={{ color: "black" }}>HOME <span className="sr-only"></span></a>
                        </li>

                        <div class="dropdown  mx-3 mt-2">

                            <a class="dropdown-toggle textd" style={{ color: "rgb(79 70 229 / .9)" }} href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                LANDINGS
                            </a>

                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <a class="dropdown-item" href="#">Something else here</a>
                            </div>
                        </div>
                        <div class="dropdown mx-3 mt-2">
                            <a class="dropdown-toggle textd" style={{ color: "black" }} href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                PAGES
                            </a>

                            <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <a class="dropdown-item" href="#">Something else here</a>
                            </div>
                        </div>
                        <div class="dropdown mx-3 mt-2">
                            <a class="dropdown-toggle textd" style={{ color: "black" }} href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                PORTOFOLIO
                            </a>

                            <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <a class="dropdown-item" href="#">Something else here</a>
                            </div>
                        </div>
                        <div class="dropdown mx-3 mt-2">
                            <a class="dropdown-toggle textd" style={{ color: "black" }} href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                DOCS
                            </a>

                            <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <a class="dropdown-item" href="#">Something else here</a>
                            </div>
                        </div>
                        <li className="nav-item">
                            <a className="nav-link mx-2 navhead" style={{ color: "black" }} href="#">CONTACT</a>
                        </li>
                    </ul>
                </div>



                <div className=" disp mx-5 px-5">
                    <div className='setcon12 mx-2 justify-content-center'>

                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-gear" viewBox="0 0 16 16">
                            <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" />
                            <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z" />
                        </svg>
                    </div>
                    <div className='cartcon justify-content-center my-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="white" class="bi bi-cart" viewBox="0 0 16 16">
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                        </svg>
                    </div>

                </div>



            </nav> */}
            <div className='techwindcon'>

                 <nav className="navbar navbar-expand-lg navbar-light container">

                    <img src="https://shreethemes.in/techwind/layouts/assets/images/logo-dark.png" class="inline-block dark:hidden" alt="" />




                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">




                        <span className="navbar-toggler-icon "></span>
                    </button>




                    <div className="collapse navbar-collapse justify-content-center " id="navbarTogglerDemo03">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0 px-5">
                            <li className="nav-item active">
                                <a className="nav-link mx-3 navhead" href="#" style={{ color: "black" }}>HOME <span className="sr-only"></span></a>
                            </li>

                            <div class="dropdown  mx-3 mt-2">

                                <a class="dropdown-toggle textd" style={{ color: "rgb(79 70 229 / .9)" }} href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    LANDINGS
                                </a>

                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a class="dropdown-item" href="#">Action</a>
                                    <a class="dropdown-item" href="#">Another action</a>
                                    <a class="dropdown-item" href="#">Something else here</a>
                                </div>
                            </div>
                            <div class="dropdown mx-3 mt-2">
                                <a class="dropdown-toggle textd" style={{ color: "black" }} href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    PAGES
                                </a>

                                <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    <a class="dropdown-item" href="#">Action</a>
                                    <a class="dropdown-item" href="#">Another action</a>
                                    <a class="dropdown-item" href="#">Something else here</a>
                                </div>
                            </div>
                            <div class="dropdown mx-3 mt-2">
                                <a class="dropdown-toggle textd" style={{ color: "black" }} href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    PORTOFOLIO
                                </a>

                                <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    <a class="dropdown-item" href="#">Action</a>
                                    <a class="dropdown-item" href="#">Another action</a>
                                    <a class="dropdown-item" href="#">Something else here</a>
                                </div>
                            </div>
                            <div class="dropdown mx-3 mt-2">
                                <a class="dropdown-toggle textd" style={{ color: "black" }} href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    DOCS
                                </a>

                                <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    <a class="dropdown-item" href="#">Action</a>
                                    <a class="dropdown-item" href="#">Another action</a>
                                    <a class="dropdown-item" href="#">Something else here</a>
                                </div>
                            </div>
                            <li className="nav-item">
                                <a className="nav-link mx-2 navhead" style={{ color: "black" }} href="#">CONTACT</a>
                            </li>
                        </ul>
                    </div>



                    <div className=" disp mx-5 px-5">
                        <div className='setcon12 mx-2 justify-content-center'>

                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-gear" viewBox="0 0 16 16">
                                <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" />
                                <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z" />
                            </svg>
                        </div>
                        <div className='cartcon justify-content-center my-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="white" class="bi bi-cart" viewBox="0 0 16 16">
                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                            </svg>
                        </div>

                    </div>



                </nav> 
                {/*    <div className='techwindcon'> */}



                <div className='my-3'>
                    <div className='row'>
                        <div className='justify-content-center'>
                            {/*  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKkjKbWdZz2sxfdH_CXRRixK2SPwKusvnx7Q&usqp=CAU" alt="" className='contimg12' />  */}
                            {/*      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8r5RycACV0BEDLhk9PfNXbsMuwcpVaoN9OA&usqp=CAU" alt="" className='contimg12' /> */}
                            <div className=' order-3 bgcon justify-content-center d-flex'>
                                {/*  <img src="https://yoky.io/assets/glo/img_excited_mobile.png" alt="" className='contimg12' />  */}


                            </div>
                            <img src="https://shreethemes.in/techwind/layouts/assets/images/personal/hero-overlay.png" alt="" className='contimg12 secondimg' />

                        </div>

                        <div className='namecon21'>
                            <h4 style={{ fontSize: "64px", color: "black" }} className="namecon21">John <br />Stradfo</h4>

                        </div>
                        <div class="col-12 card cardcon order-2" style={{ width: "20rem" }}>
                            <div class="card-body ">
                                <h5 class="card-title mb-3 text-2xl" style={{ fontSize: "24px" }}>I'm Professional Web Developer</h5>

                                <p class="card-text para-desc lg:text-slate-400 text-slate-200 dark:text-slate-200 mb-4">Obviously I'm a Web Designer. Web Developer with over 3 years of experience .</p>
                                <button className='btn btn-primary hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-black rounded-md'>Hire Me</button>
                            </div>
                        </div>




                    </div>
                </div>

                <div className='arrcon'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" class="bi bi-arrow-down-circle" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z" />
                    </svg>
                </div>
            </div>
            <div className='container mb-5'>
                <div className='row  ficon'>
                    <div className='col-6 col-sm-4 col-md-2 mb-4 mb-md-0  iconcontainer  '>

                        <img src="https://www.freepnglogos.com/uploads/amazon-png-logo-vector/amazon-png-logo-vector-1.png" className='amazonimg mx-5' alt="" />
                    </div>
                    <div className='col-6 col-sm-4 col-md-2 mb-4 mb-md-0  iconcontainer  '>

                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUQAAACbCAMAAAAtKxK6AAABcVBMVEX///8yhf//NCX/uwAfr0QnsUojs04ksVIqsEcGrTm/48hqxIY1gv/3+vwhfvT/8/HwIwv65eT9GQD/uQD+vQAxhf3u9Pyx0PsjfPz5uAD+NSI3gf/+Mij7NyI0hfn6NSb/Kxn/MSxsoPwuh/37hnv0+/czhvYXfPcfefv4IwD2vgAviPX3Nyr6OBz+tAD/IA79Jh3/7u5xvYwgqE8AoDXI4dDj7v69y++FqO9YlPmkxfDT5fybuPgvh+3K2/d4n+ojc/9ioe80f+twn/WbwveAqumwxvoAcvLy09H5vML8+eL68cP45qv78Mz79unK2/CPr/zwRTnwamP0trL1zU7+4Z7sdWvxTkruioP9zszz0XHyn6Lxy1f45b32sK742Ir2wDL3vyn5RUP1vybwlI/4TE/04530bXP9WGPu0GLx2M/80nH7YVb//+/73IT8e2/4qa7sQif+2J/5xlvsj4Psh43lW0fpnpaRxZ5Ntmlqkvt9dAHZAAAQIklEQVR4nO2ciV/bRhbHkd3s1cE2smV0WYdFdFjywR4GBzAJR0pI0hCgAZKGQJa2u12yaZpt2d2/ft8bieBDErgtwbs73w+lliPb45/evGtGTEwwGAwGg8FgMBgMBoPBYDAYDAaDwWAwGAwGg8FgMBgMBoPBYDAYDAaDwWAwGAwGg8Fg/JLcDrnpYfxX8/tbv/nDrT/8+o9/uumBJDNZBiZvehRpfPrbT259cuvWb3930wOJpT033/HtnOPkckJn/c7CmEr5KSj4q9/8ehxFbC9qokiIwBFA0zjFdZfmuzc9qjjGVsSFqpjzBUI4geMEAX4EzbcVx/HXbnpkw4ypiOVlx7It1/dt27c4C0UEg4QHmpZbGjtrHE8Rpx2LKKLgc0QhHOFQP5DR0jQ0S+7uvTHzjWMp4rKDagFgeVQ7/G37vsYJFhwpwsrCTQ+xjzEUsbzkar5CRdQskJEGFgDtEY4EwbaVzk0Pso/xE7GsEZsQCzUUFM4WROccDDIgpWILufJNj7KPsROx7IMLtCxCLdF3c6tr3TbSnV7srORQWd92p296lP2MnYgdDvyhBX6PE4hY7faFkPbakgjWKK7e1OASGDcR13HOQhiBtNCpDoeP2/dzhLPHLDiPm4hzLgQTSKxBSOd+7Bnl6mcsT0ylbNPwi/mNkJjFpGk4ObXx4MHGVP4qH7b58BHw+PMrDKv95MmTdrL9p4uYD8d0lSH9ImyRJY1wmA4ujR5/8w+ePZV5xPPM7Z3ZtHM3H+3WpEax0WgUpdruF5vJZ07OLfuuSOncb4fPVe9V762uri6fy5osYn7nWeB5MCCPV/f2D0b+Tj+BtqMRy8bZvNIe9bWz+wXeaKlqoKtqJlM3moXtxIu/uStJxWIxi5SyJUmSnj+OP3NycUUkODeohxHdLarbXV/UCAzyMhHzMzpvZCh6JiM3veDF9bvzeZrYCILijOr28vu8V1FlGC0oKFcqOG6Dj5dx88tQvxLoWCpls3AEj57HWWM3J9IRcUSw4PJqxHHn4GnXJ5A9kNwlIu6HCuq6LGdwaLoKE2VnxG82KpM+ieqUUXOYjaApV3QV5avoOrVF1LNViBnyy1o2ssFStogWiY+K2Vrt5dCpi44dVZ+QLNhgir7FOXdARHjaukzEjXeeGRphRZZl04TRwcOWsZfqZ342c2IoIrFHnMyHfL0OEuqZCo5XlivhFDIrBr8/eO7zWrFRyvZSAiQwRunVwKnzIkgVFvG0BwIJrAAqrk3k4H/aJSIe8oYuh8MA/XS4ujBT5ECXPX1jtG83GuFs5jhna7TXnfFwoU1TrtBBg4bhg4wKRll41n/u80axVAtFRK9YQgnhETxXyg6ouO5oQjSiHLDiOFi3C5yzaBNbuMQSzwpBphJOiDo46KZhGHJQkVVT1Y3mdQYYGy4vFXE0QzzkQTdqfrLBV/aAwGtSH6SDG+Jnes99XqyhCww1LB0dHR3TCQ064pyW/t5z6rQDhTsdD4TlhXK53J5ezhFNUATHd30sqFJE3PHgEmI0Ac/8dHv/5GR/G2KMDv5GVtV64frynbZohYO2R3rZQQGNT66buqefbNAMMT97+NqrZ1RVrsumd3Jx7hdSqFmp1Dh69TlmiLc/33x+TN1iAyKN9KhnNBhQOM1WeprA5cWcpWg0j00V8cALdEM3dd3wnp1P3vzBnoeXNjAD76vRlBmBrkhbN5wy0mzOv1PBFWbMoM6f9ebYh6qBoUY1Zf7Ddd9s1DCcgBX2qDUx8eZrSBnh+RqElw8xuhq5QnG1bzm5K/okvNRpIr420D9XZH67z//ttAwYp2oaxuEoX3EU7ojhJRbj670EZprhvJVbA/56ds+QdTNTN43X50/twmSmPvB4oEx5DJO8VKxBkH4fPfPEpVfUdqoDn7fgWpeKeMKbhh5k6t6LgRdPyXWI0aYsq6N8xVFYJGEoFEdJEqd4yG3A99QLwzHv1KgHch1M9EF4/LJRK0pFCMR/Hir1NmsNjC5QwkRZ96odhZShymnO4S4RMd+qBzCZK82zoSEd8HUTvGXl2tLFZY2jI3dHiStvDfTestGKiXj5wAhUWQ/OTfE4W4PsRspKMeXyJszlBlrpLj0si1FMielcrpJLRPzOM2FQevPZ8GsnfmjpmTokX6cjfMdRWOXCiSKOUDbPwnhhfuj8Sdy/PvBguBlVDnPux0XqDmvScFYNfN3INmjEoV4RQ7NtESEu6287tPGeLOJXEORkSGziWhuzTZzQaoW/Uo9kdFZJmOGMIuKOB+khyBTEj+lUVjHxLtA051WY2ZSO49/qzzTTKTW+xoN5TrA1qPJi3XOV0EXcJBFhNkNyE7S+if2Yv4TFNH9NGfdqFPbS08TJ5SpllXrObwysBuRmrCGCxk2dDvkdHhyFFXPji/hz/44BGsLLX/GgwxELq5PYoUAExFImScQDMDZd1RPc3kkoYvOanOLWuR9KXQ8ti2Hq4VIjgdkKV72eVAPM6gatGjDLeSOFRV4xoe+1WcQSGmI0PJ7MCQQrPi32zLYLJQtJFPGkKdMJG29rh81QxKF69JdhMZSHc1Ojc9mlfakVmgjlDXAwgVo3kzzMqUGbADyI/DAUkYoUi1SitYv0GK+UJdgQPwbzm5BJd0nxlUQRZ7Ay0VV1Z+PbqUG+/TayRGMm9q1/NtPuVfLEyBIFGjenPCjqIRd8nXT2TGiJOHkeRSLuJp17BGYIxlh8TBubgqVYXEI3CSxRS26FbcvgQyD/L/CDNOHHCOv61jWJ2HXDwEJSG2HlcFk/TD42UMRMpZWYMJx7oO9AxLABJv0t6dwvwSFid4yKiNFXSxoJVAXEThRxL5QpFfm6RCy7UfdOTD1L7BWRVyE4y+qlIr64gojvoZ7JhiKWHQjARFDipzMVMbmLc6MiTnSiJXtnLuWkQREzIOLllogiZq8iYugTJ3FhFjdgxJ7YFgUtJcXZa92kiItR+24pbadNv4i0eVxpPU06e+YioTj3ie+Tzj2ilbWEIk74kCdCMujGpqy0SZYcnU9vVMQFh9AlFttNSXL6RJw1dOzhyHpSdN7Gdkom4/VE56Okd5aK2KINRewIgob7gGLnxDKkiSl54ltDhRQfAksq15TiYIpLF9Y4kmKKfSJOmHUQUc4UknrFej3IvFN1bwrzQFxOKRZrCQvNmw1s1kJkeQMH87mwGRI3kLJD/y1RxBe8bkLh1zrIp3ElQX4Kc46NqYNiiYuJ5/SL+I0RqFCxGAkVywGvy5Bw1Ct4cITreqWilFix9KRAXVxeAa3itk5d1oDY4WUQUeY/yipzDDQ8WxAXc4mxpV/EnWYFTVF+nVA7G2Y9Y2aMt3jwPBsuAhzFv3E427NFukQwqYWWqMS0wtxL+olTBQNF9OJr5+sHe3Uaiii4SSr2izhbMHCdOaF4PvBkta6qUVX4GEuSUqm/q/2BL6KqMOziTKxHq3zC4IRecOzLWmE/GqasmnpiGXXd3KNb3DVQEtd34+gXESIHLu1VjFbM2k/+aUvFPllU0Lw5rmUbJSlbGuxrI5uNWtifiKrCdo62QyBAr/ZtWujauGyaLuIJb8pQA3jXFYAvo+3gHSuIJq7G5ReTi5GJ5MLicCNcQ8sYT4fXxE/rmP+YqvddePyyJjVwCSCmGfbmCDveuCniYfTMumNbClYmysrFpCivu8QSONsmaUumeQNK50pFrQx3tmHufIRZPpezw7qO+ERcG5SxvObnQhFJJOLEM0PH9SjVCAa6JvlT2vRWZeNDFnkk1WinRjoasMXN42wNni5lG1+ePzW5Imi2rUC6yNna/NxCu929U3VyGG1ggERILvvQFGEGgIqtYRWnAn77p+gyGmuh3xZsYuNm47kLHRfW7uXE87Vgy41EzLcMWZXramAUvut9n4N3YZ5tGhdhcrMoYYcBJm1fiL79SML1UvCXjeLFxqaFz4hNcN89dmAdUYQfRYG5LJB5cDokdQeEin0PWW41B3cDnXmtgH/7czW6nFBFwYfftsWJjt25B3TsnCNCLaZwoUeyPmz1PIDYIhuyqVb44Cwa8+yD1zy2JgC98MPFe38vhTuYijXp+OvNN/S5ze+Pi7jQ1yhmG30x575IiE/v5bIw74IM21/Cem9pYt7SlNQdEAeeTjs5umHsX0yQqZ2gKeumyX8EZ7noYnpBbLpTEffAkKiSwV9WdIfL3Yu4c8IHJkQPFbKZphfsvZ3ZDgpeRY8KrP7Z8x7tjU7prCQdH71///5YkrIS7oColWrZ/rr6jmtzWnjLAoefSyBr0IjYntiCp9Om88TED3wmwE+HFLbwdObkxeHZycxTj68HKhiomdSI/yWhiY6N1sj1A1+BwH+2r4lPes7/B4wYUgoqmyzjrhdwhaqOO+3qxoAf322gYuEGHDTJYpQdorSN5wMD6TpRJKZ7ITgIeb6IOye30C0KgpOyF+cHDz6/omJVKhvNJm7GgeHoAQRB3eAH16Ovg4UlR8GSQeEGVUQz1DhR61/7eMFDPlg3g4sCHx+CMcr80LLlXxuQzFyoF+0Lg7lcbAzuCsMN4q5tW2GHTsObusQq+ugtgeCez9RdYfu8JwfoUN71tx7UjHG+Dn7dLOY4y9asAQ2JAtmFJjpDReGBbpimbPQOVQY7kL2YefO9RPvXdH9nRBFXnONz8G7VdUXQD7coEvHfoSPe0ghO7/SdsoctA2upjNpzaXEltbn30bZvt+85oiII/SJquMlSXI/JH2efQZDWe0QMKhnV+yp+p+wuxui+HYq1YuPLpH3b7TvLtuaIgtZZO7f/qoUiXrRJ4nfKTm17MJn1HhGhzDeCj+APewa/uORGuz7PDZGIbudOwqr0xrPC+foFzQ6b/I+Jq5Ivj6ReEYvFxD3b50z2lS2+APmjcLF48OknoOInw3u2D35sNuUPIkLGwwcnH70WbK+t2mK0dV90tM78XNq6/uzO6VMPaDYLhczpWdqkuf35q10Jt9nh3QPHu6+ucBtGL3d9bHz7HxYP/vmvkOE/pDF1dqoXChBZYFzB6cm17pFNobwwjXQXrrQvYvZgBzjYuMIm/TcPXyIPr3IjSz8Ld30Ol6WT+3W9TG7s0DFNjdt9YDfLoqjhLUvp6+OMVCY1TLM4y2Gm9dNZF5egqh79PpH/T8qdOD/cdQjU9ERzxuym6zHl39Znwzta7t8V6M3E3MoNjOi/j+m7S7az1L9M0a46S9hK9LVxu/t/PCnnNMUnxMmtd8NZPdmeXs0RDkpo/PsK4/WnPMaVLYfg39iy8X4qv1rt+NjQ9C2Fpjfc0si3wf4/0l3RoFYXNKIQursFW9mcoBAfJNSs9I2ojIhyR7Tx7nWYvfZF+Q41Mx5pTMMrMi0KdJsa6emCCNiNy8WmPoxYyus5h9PsaA03bMbZljPaHV+M8prmilxPb1h0nTVW7Y1Me7G64oiuiz+5zvqTy1/BiKW90J2b63ZT/qgLg8FgMBgMBoPBYDAYDAaDwWAwGAwGg8FgMBgMBoPBYDAYDAaDwWAwGAwGg/G/wX8AiyI93KExz9sAAAAASUVORK5CYII=" alt="" className='amazonimg mx-5' />
                    </div>


                    <div className='col-6 col-sm-4 col-md-2 mb-4 mb-md-0  iconcontainer '>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7vX6ZaAuRqZHfExAWF1Nqb6r99KjjC6NgQJU2O9sJ-GSmZ6v3K2iU9TERQyaoKVm3oP0&usqp=CAU" alt="" className='amazonimg mx-5' />
                    </div>
                    <div className='col-6 col-sm-4 col-md-2 mb-4 mb-md-0  iconcontainer'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9H8C_GAmfYY0XP3y_4sJDSTAGKfBe5_BxxA&usqp=CAU" alt="" className='amazonimg mx-5' />
                    </div>
                    <div className='col-6 col-sm-4 col-md-2 mb-4 mb-md-0  iconcontainer '>
                        <img src="https://www.citypng.com/public/uploads/preview/-11597191761n5ghafjnrt.png" alt="" className='amazonimg mx-5' />
                    </div>
                    <div className='col-6 col-sm-4 col-md-2 mb-4 mb-md-0  iconcontainer'>
                        <img src="https://image.similarpng.com/thumbnail/2020/06/3D-spotify-name-transparent-PNG.png" alt="" className='amazonimg mx-5' />
                    </div>
                </div>
            </div>
            <div>

                <div className='disp12  justify-content-center container  my-5 mt-5'>
                    {/*  <div className='col-12'> */}
                    <div className='col-12 col-lg-5 col-md-7'>
                        <img src="https://shreethemes.in/techwind/layouts/assets/images/personal/hero.jpg" alt="" className='aboutimg' />



                        <div className=''>
                            <div className='setcon caretcon justify-content-center'>
                                <div class="embed-responsive embed-responsive-16by9 vid">
                                    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" height={25} width={25} allowfullscreen></iframe>
                                </div>
                            </div>




                        </div>


                    </div>

                    <div className='my-5 mt-5 justify-content-center col-12 col-lg-7 col-md-5 per'>
                        <h6 style={{ color: "#4F45E5", fontSize: "16px", fontWeight: "bold" }} className="mb-3">About us</h6>
                        <h3>Better Design</h3>
                        <h3 className='mb-4'>Better Experience</h3>
                        <p className="mb-5">Obviously I'm a Web Designer over 3 years of experience .</p>
                        <p >WordPress
                            <div className='ds'>
                                <hr className='hrline' />
                                84%
                            </div>
                        </p>
                        <p>Javascript
                            <div className='ds'>
                                <hr className='hrline1' />
                                78%
                            </div>
                        </p>
                        <p >HTML
                            <div className='ds'>
                                <hr className='hrline2' />
                                94%
                            </div>
                        </p>
                    </div>


                </div>
                {/*   </div> */}



                <div className='sercon justify-content-center'>
                    <h6 style={{ color: "#4F45E5", fontSize: "16px", fontWeight: "bold" }} className="mb-3">SERVICES</h6>
                    <h3 className='mb-4'>What do i offer?</h3>
                    <p className="mb-5">Obviously I'm a Web Designer over 3 years of experience .</p>
                </div>


                <div className='disp12 sercon2 my-3 container'>
                    <div className='carddes  px-3 '>
                        <div className='uicon justify-content-center my-4'>
                            <img className='imgi' src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/2x/external-ui-marketing-agency-flaticons-lineal-color-flat-icons.png" alt="" />

                        </div>

                        <h5 className='my-3'>UI/UX design</h5>
                        <p className="my-3">The phrasel sequence of the is now so  <br />the many compaign and grow</p>
                        <p style={{ color: "blue" }}>Read More <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                        </svg></span></p>

                    </div>



                    <div className='carddes  px-3'>
                        <div className='uicon justify-content-center my-4'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-gear" viewBox="0 0 16 16">
                                <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" />
                                <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z" />
                            </svg>

                        </div>

                        <h5 className='my-3'>IOS App Designer</h5>
                        <p className="my-3">The phrasel sequence of the is now so  <br />the many compaign and grow</p>
                        <p style={{ color: "blue" }}>Read More <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                        </svg></span></p>
                    </div>



                    <div className='carddes  px-3'>
                        <div className='uicon justify-content-center my-4'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-camera2" viewBox="0 0 16 16">
                                <path d="M5 8c0-1.657 2.343-3 4-3V4a4 4 0 0 0-4 4z" />
                                <path d="M12.318 3h2.015C15.253 3 16 3.746 16 4.667v6.666c0 .92-.746 1.667-1.667 1.667h-2.015A5.97 5.97 0 0 1 9 14a5.972 5.972 0 0 1-3.318-1H1.667C.747 13 0 12.254 0 11.333V4.667C0 3.747.746 3 1.667 3H2a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1h.682A5.97 5.97 0 0 1 9 2c1.227 0 2.367.368 3.318 1zM2 4.5a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0zM14 8A5 5 0 1 0 4 8a5 5 0 0 0 10 0z" />
                            </svg>

                        </div>

                        <h5 className='my-3'>Photography</h5>
                        <p className="my-3">The phrasel sequence of the is now so  <br />the many compaign and grow</p>
                        <p style={{ color: "blue" }}>Read More <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                        </svg></span></p>

                    </div>
                </div>

                <div className='disp12 sercon2 my-3 container'>
                    <div className='carddes  px-3 '>
                        <div className='uicon justify-content-center my-4'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-flower3" viewBox="0 0 16 16">
                                <path d="M11.424 8c.437-.052.811-.136 1.04-.268a2 2 0 0 0-2-3.464c-.229.132-.489.414-.752.767C9.886 4.63 10 4.264 10 4a2 2 0 1 0-4 0c0 .264.114.63.288 1.035-.263-.353-.523-.635-.752-.767a2 2 0 0 0-2 3.464c.229.132.603.216 1.04.268-.437.052-.811.136-1.04.268a2 2 0 1 0 2 3.464c.229-.132.489-.414.752-.767C6.114 11.37 6 11.736 6 12a2 2 0 1 0 4 0c0-.264-.114-.63-.288-1.035.263.353.523.635.752.767a2 2 0 1 0 2-3.464c-.229-.132-.603-.216-1.04-.268zM9 4a1.468 1.468 0 0 1-.045.205c-.039.132-.1.295-.183.484a12.88 12.88 0 0 1-.637 1.223L8 6.142a21.73 21.73 0 0 1-.135-.23 12.88 12.88 0 0 1-.637-1.223 4.216 4.216 0 0 1-.183-.484A1.473 1.473 0 0 1 7 4a1 1 0 1 1 2 0zM3.67 5.5a1 1 0 0 1 1.366-.366 1.472 1.472 0 0 1 .156.142c.094.1.204.233.326.4.245.333.502.747.742 1.163l.13.232a21.86 21.86 0 0 1-.265.002 12.88 12.88 0 0 1-1.379-.06 4.214 4.214 0 0 1-.51-.083 1.47 1.47 0 0 1-.2-.064A1 1 0 0 1 3.67 5.5zm1.366 5.366a1 1 0 0 1-1-1.732c.001 0 .016-.008.047-.02.037-.013.087-.028.153-.044.134-.032.305-.06.51-.083a12.88 12.88 0 0 1 1.379-.06c.09 0 .178 0 .266.002a21.82 21.82 0 0 1-.131.232c-.24.416-.497.83-.742 1.163a4.1 4.1 0 0 1-.327.4 1.483 1.483 0 0 1-.155.142zM9 12a1 1 0 0 1-2 0 1.476 1.476 0 0 1 .045-.206c.039-.131.1-.294.183-.483.166-.378.396-.808.637-1.223L8 9.858l.135.23c.241.415.47.845.637 1.223.083.19.144.352.183.484A1.338 1.338 0 0 1 9 12zm3.33-6.5a1 1 0 0 1-.366 1.366 1.478 1.478 0 0 1-.2.064c-.134.032-.305.06-.51.083-.412.045-.898.061-1.379.06-.09 0-.178 0-.266-.002l.131-.232c.24-.416.497-.83.742-1.163a4.1 4.1 0 0 1 .327-.4c.046-.05.085-.086.114-.11.026-.022.04-.03.041-.032a1 1 0 0 1 1.366.366zm-1.366 5.366a1.494 1.494 0 0 1-.155-.141 4.225 4.225 0 0 1-.327-.4A12.88 12.88 0 0 1 9.74 9.16a22 22 0 0 1-.13-.232l.265-.002c.48-.001.967.015 1.379.06.205.023.376.051.51.083.066.016.116.031.153.044l.048.02a1 1 0 1 1-1 1.732zM8 9a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                            </svg>

                        </div>

                        <h5 className='my-3'>Graphic Designer</h5>
                        <p className="my-3">The phrasel sequence of the is now so  <br />the many compaign and grow</p>
                        <p style={{ color: "blue" }}>Read More <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                        </svg></span></p>

                    </div>



                    <div className='carddes  px-3'>
                        <div className='uicon justify-content-center my-4'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-hypnotize" viewBox="0 0 16 16">
                                <path d="m7.949 7.998.006-.003.003.009-.01-.006Zm.025-.028v-.03l.018.01-.018.02Zm0 .015.04-.022.01.006v.04l-.029.016-.021-.012v-.028Zm.049.057v-.014l-.008.01.008.004Zm-.05-.008h.006l-.006.004v-.004Z" />
                                <path fill-rule="evenodd" d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM4.965 1.69a6.972 6.972 0 0 1 3.861-.642c.722.767 1.177 1.887 1.177 3.135 0 1.656-.802 3.088-1.965 3.766 1.263.24 2.655-.815 3.406-2.742.38-.975.537-2.023.492-2.996a7.027 7.027 0 0 1 2.488 3.003c-.303 1.01-1.046 1.966-2.128 2.59-1.44.832-3.09.85-4.26.173l.008.021.012-.006-.01.01c.42 1.218 2.032 1.9 4.08 1.586a7.415 7.415 0 0 0 2.856-1.081 6.963 6.963 0 0 1-1.358 3.662c-1.03.248-2.235.084-3.322-.544-1.433-.827-2.272-2.236-2.279-3.58l-.012-.003c-.845.972-.63 2.71.666 4.327a7.415 7.415 0 0 0 2.37 1.935 6.972 6.972 0 0 1-3.86.65c-.727-.767-1.186-1.892-1.186-3.146 0-1.658.804-3.091 1.969-3.768l-.002-.007c-1.266-.25-2.666.805-3.42 2.74a7.415 7.415 0 0 0-.49 3.012 7.026 7.026 0 0 1-2.49-3.018C1.87 9.757 2.613 8.8 3.696 8.174c1.438-.83 3.084-.85 4.253-.176l.005-.006C7.538 6.77 5.924 6.085 3.872 6.4c-1.04.16-2.03.55-2.853 1.08a6.962 6.962 0 0 1 1.372-3.667l-.002.003c1.025-.243 2.224-.078 3.306.547 1.43.826 2.269 2.23 2.28 3.573L8 7.941c.837-.974.62-2.706-.673-4.319a7.415 7.415 0 0 0-2.362-1.931Z" />
                            </svg>

                        </div>

                        <h5 className='my-3'>Web Security</h5>
                        <p className="my-3">The phrasel sequence of the is now so  <br />the many compaign and grow</p>
                        <p style={{ color: "blue" }}>Read More <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                        </svg></span></p>

                    </div>



                    <div className='carddes  px-3'>
                        <div className='uicon justify-content-center my-4'>
                            <img className='imgi' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm0Ax30kZQ0mmsI__fggfJrzQ1WwLCDoeYXA&usqp=CAU" alt="" />

                        </div>

                        <h5 className='my-3'>24/7 Support</h5>
                        <p className="my-3">The phrasel sequence of the is now so  <br />the many compaign and grow</p>
                        <p style={{ color: "blue" }}>Read More <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                        </svg></span></p>

                    </div>
                </div>


                <div className='justify-content-center sercon my-5'>
                    <h6 style={{ color: "#4F45E5", fontSize: "16px", fontWeight: "bold" }} className="mb-3 mt-5">EXPERIENCE</h6>
                    <h3 className='mb-4'>Work Experience</h3>
                    <p className="mb-5">Obviously I'm a Web Designer over 3 years of experience .</p>


                </div>


                {/*   <div className='employcon expcon container'>

                    <div className='jsl'>
                        <div className='content21 z '>
                            <p className='set'><span className='mx-1 cir'></span></p>
                        </div>

                        <div className='content21 mx-2'>

                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="grey" class="bi bi-person-circle content21" viewBox="0 0 16 16">
                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />

                            </svg>


                            <h5 className='content21'>Self Employed</h5>
                            <p className='content21'>2019-21</p>
                        </div>

                        <div className='content21 z '>
                            <p className='set'><span className='mx-1 cir'></span></p>
                        </div>
                        <div className='content21 mx-3'>

                            <h5 className='content21'>Senior UI/UX Developer</h5>
                            <p className='content21 '>CSS is a language that describes how HTML elements are to be displayed<br /> on screen, paper, or in other media. CSS saves a lot of work,<br /> because it can control the layout of multiple web pages all at once</p>
                        </div>

                        <div className='content21 z '>
                            <p className='set'><span className='mx-1 cir'></span></p>
                        </div>
                        <div className='content21 mx-3'>
                            <img alt="" className='lenovoimg content21' src="data:image/jpeg;base64,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" />

                            <h5 className='content21'>Lenovo Ltd</h5>
                            <p className=' content21'>2016-18</p>
                        </div>
                        <div className='content21 z '>
                            <p className='set'><span className='mx-1 cir'></span></p>
                        </div>

                        <div className='content21 mx-3'>

                            <h5 className='content21'>Front end Web Designer</h5>
                            <p className='content21'>CSS is a language that describes how HTML elements are to be displayed<br /> on screen, paper, or in other media. CSS saves a lot of work,<br /> because it can control the layout of multiple web pages all at once</p>
                        </div>
                    </div>

                    <div className='line'>

                    </div>




                    <div className='jsr'>
                        <div className='content12 my-5'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="grey" class="bi bi-person-circle" viewBox="0 0 16 16">
                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                            </svg>

                            <h5 className='content12'>UX/UI DESIGNER</h5>
                            <p className='mb-5 content12'>2019-21</p>
                        </div>



                        <div className='content12 my-5'>
                            <img alt="" className='lenovoimg2 content12' src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png" />

                            <h5 className='content12'>Google Tech</h5>
                            <p className='mb-5 content12'>2018-19</p>
                        </div>

                        <div className='content12 my-5'>
                            <h5 className='content12'>Junior UI/UX Developer</h5>
                            <p className='content12 mb-5'>CSS is a language that describes how HTML elements are to be displayed<br /> on screen, paper, or in other media. CSS saves a lot of work,<br /> because it can control the layout of multiple web pages all at once</p>
                        </div>

                        <div className='content12 my-5'>
                            <img alt="" className='lenovoimg2 content12' src="https://avatars.githubusercontent.com/u/1231870?s=280&v=4" />
                            <h5 className='content12'>Circle Ci</h5>
                            <p className='content12'>2015-16</p>
                        </div>

                    </div>

                </div> */}


                <div className="card df container">


                    <div className="card-body">
                        <div className='jsl'>
                            <div className='content21 mb-5'>

                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="grey" class="bi bi-person-circle content21" viewBox="0 0 16 16">
                                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />

                                </svg>


                                <h5 className='content21'>Self Employed</h5>
                                <p className='content21'>2019-21</p>
                            </div>


                            <div className='content21 mb-5'>

                                <h5 className='content21'>Senior UI/UX Developer</h5>
                                <p className='content21 '>CSS is a language that describes how HTML elements are to be displayed<br /> on screen, paper, or in other media. CSS saves a lot of work,<br /> because it can control the layout of multiple web pages all at once</p>
                            </div>

                            <div className='content21 mb-5'>
                                <img alt="" className='lenovoimg content21' src="data:image/jpeg;base64,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" />

                                <h5 className='content21'>Lenovo Ltd</h5>
                                <p className=' content21'>2016-18</p>
                            </div>


                            <div className='content21 '>

                                <h5 className='content21'>Front end Web Designer</h5>
                                <p className='content21'>CSS is a language that describes how HTML elements are to be displayed<br /> on screen, paper, or in other media. CSS saves a lot of work,<br /> because it can control the layout of multiple web pages all at once</p>
                            </div>


                        </div>

                    </div>

                    <div className="card-body  cb tr">

                        <ol className="progress-list mb-0 mb-sm-4">
                            <li className="success">
                                <button type="button">
                                    <span className="progress-indicator"></span></button>

                            </li>
                            <li className="success">
                                <button type="button">

                                    <span className="progress-indicator"></span></button>
                            </li>
                            <li className="active error">
                                <button type="button">

                                    <span className="progress-indicator"></span></button>
                            </li>
                            <li className="active error">
                                <button type="button">

                                    <span className="progress-indicator"></span></button>
                            </li>
                        
                        </ol>
                    </div>

                    <div className="card-body">
                        <div className='jsr'>

                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="grey" class="bi bi-person-circle" viewBox="0 0 16 16">
                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                            </svg>

                            <h5 className='content12'>UX/UI DESIGNER</h5>
                            <p className='mb-5'>2019-21</p>

                            ￼
--:--
￼Reserve a Table


                            <img alt="" className='lenovoimg2' src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png" />

                            <h5>Google Tech</h5>
                            <p className='mb-5'>2018-19</p>

                            <h5 className='content12'>Junior UI/UX Developer</h5>
                            <p className='content12 mb-5'>CSS is a language that describes how HTML elements are to be displayed<br /> on screen, paper, or in other media. CSS saves a lot of work,<br /> because it can control the layout of multiple web pages all at once</p>

                            <img alt="" className='lenovoimg2' src="https://avatars.githubusercontent.com/u/1231870?s=280&v=4" />
                            <h5>Circle Ci</h5>
                            <p>2015-16</p>
                        </div>
                    </div>
                </div>


                

                <div className='bgicon12 my-5 justify-content-center'>
                    {/*  <img className='bgi' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1aUnCPA5__jWlQbf6-yfAij_WOhLFKNaBPQ&usqp=CAU" alt="" /> */}

                    <div className='carddesc12  justify-content-center mt-5'>
                        <h1 style={{ color: "white", fontSize: "25px" }} className="content1 my-3">I Am Available For Freelancer Projects</h1>
                        <p style={{ color: "white" }} className="content1 my-3">Obviously I'm a Web Designer.Experience with all stages of development cycle <br />for dynamic web projects. web developer over 3 years of experience .</p>
                        <button className='btn btn-primary my-3 justify-content-center mx-5'>Hire Me</button>
                    </div>

                </div>





                <div className='justify-content-center portcon '>
                    <div className='sercon justify-content-center'>
                        <h6 style={{ color: "#4F45E5", fontSize: "16px", fontWeight: "bold" }} className="mb-3">Portofolio</h6>
                        <h3 className='mb-4'>Our Works and Projects</h3>
                        <p className="mb-5">Obviously I'm a Web Designer over 3 years of experience .</p>
                    </div>


                    <div className='imgd justify-content-center my-5'>
                        <div className=' m-3'>
                            <img src="data:image/jpeg;base64,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" alt="" className='fim' />
                        </div>
                        <div className=' m-3'>
                            <img src="data:image/jpeg;base64,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" alt="" className='fim' />
                        </div>
                        <div className=' m-3'>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJZyrI-1B0hTIwy63Kgezaa6AYYvmdDbt5KA&usqp=CAU" alt="" className='fim' />
                        </div>
                        <div className=' m-3'>
                            <img src="data:image/jpeg;base64,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" alt="" className='fim' />
                        </div>
                    </div>

                    <div className='imgd justify-content-center my-5'>
                        <div className=' m-3'>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjLhCw5p_RH42LTbhRwIumUfkxGXhd_ntWig&usqp=CAU" alt="" className='fim' />
                        </div>
                        <div className=' m-3'>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ-h7x8CTVgrZ3sC_CM_vTZx3228F9F3oImQ&usqp=CAU" alt="" className='fim' />
                        </div>
                        <div className=' m-3'>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd_Yfu5ILZsLa3rVfPErfHSszNKkjRlVS1NA&usqp=CAU" alt="" className='fim' />
                        </div>
                        <div className=' m-3'>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW-13DqFkryZ8PYzspa4FQfzq5kbqEL-H8cw&usqp=CAU" alt="" className='fim' />
                        </div>
                    </div>
                    <div className='sercon justify-content-center my-2'>
                        <h6 style={{ color: "#4F45E5", fontSize: "16px", fontWeight: "bold" }} className="mb-3">Blogs</h6>
                        <h3 className='mb-4'>Latest News</h3>

                        <p className="mb-5">Obviously I'm a Web Designer over 3 years of experience .</p>
                    </div>




                    <div className='imgd1 justify-content-center my-5'>
                        {/* <div class="card" style={{ width: "18rem" }}>
                        <img class="card-img-top" src="..." alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div> */}

                        <div className='card1 m-2 p-1'>
                            <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBISEhgSEhIYGBgYGBgYEhgYGhgYGBgYGhgaGRgYGBoeIy4lHB4rIRgYJzgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHBISHjErISc0NDQ0MTQ0NDQ0NDQxMTQ0NDQ0NDQ0NDQ0NDQ0NDE0NDQ0MTQ0NDE0NDQ0NDQ0NDQ/NP/AABEIAL4BCQMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAABAAIEBQYDBwj/xABCEAACAQIEAQkFBQcEAAcAAAABAgADEQQSITEFBhMiQVFhcYGRMqGxwdEUQlJTkiMzYnKC4fAHorLxFSQ0Q4PC4v/EABgBAQADAQAAAAAAAAAAAAAAAAABAgME/8QAIhEAAgICAgMAAwEAAAAAAAAAAAECEQMhEjEEMkETIlFC/9oADAMBAAIRAxEAPwDDiKIRSCw6KCKCAwxsMkgN4IoiYAoILxQAxpivBeAGK8F4rwBGKKCAGCKCAG8EUUAUV4ooAYYIoAbxXghgBvDGiG8AdHCNEcIAYY2KAOgihgg5wRpMV5BcfFeNvFAHXijbxwhECJlZiOKWNqag/wAR28hO/EnIptbrsPU6ybwrk2lVFbOQSOkLC0iUlHsvDG5dFfRxVQ6smndcH01vJiPcXsfOaTA/6cl7lsRY/csCfC9zpvInKLktisDTUtUFRCwAOxU6m1u8XlFkTLyxNIprxXnJXj7zUwHRQRXgBgiJgJgCJgvBeKAGKNvFeAJ3Ci7Gw75HXHoTYXkTEK9Vyi7L6X7ZY4Hk/n9tjp2W+cpKcY9mkccpdDkqAx95evyMbmudouxZATY2IYbkGwmeRiRqLEEhh2ERGal0RKDi9nS8MYI4S5QIjhGwiAPEIjRHCAGGCGAGKAQwQRyYLxphvILjwYrxt4rwBwMV4y8WaAccbQLobdTLfzNvnLqliMTRCFKagDqClgADbVrjffQGVtOuFDgi9107iNj75dVeNMlNKdPXPc9Vj1Aa9dzMcjd00dOFKtM0o5U1aNCnXfC5szMpGYqBl675Tv1C0jcrOUyYvCooRkqZwVT2w9ui2VhsQWGjAGN4LxtlpczWphdSysykob2OTztv22mh4vXp06dN86qtP9s5IFiqD2QOsksoHeBM1rVF5K92ePM5zG4sbm47DfUTqj6SE1bO7PtmZmt4kn5zuraTrRwsk5os05BoQYIOmaImcK1UKLnynCgatU9E2HcJDdFkmyZeG8hU67/fH1EkhoTsNUOvFeNJgzSSAUbK7aHWzfLr8JpOE4jnFYUkJZVLMCepd9t/KUeGRCQX2+mo+c0HJfGpSxFxTNiuVbEAXPUd5yZNtnfhtRRo+R/GHqXVqYVTdRbMbkKG1uNNDM1yp4S1KoawACVGOQDfRRcnx7Oy02fCEWnXqfswNMy2I+/qL9hmb5dY2mW5pCS4dDVFrKAtPoHvY5/RRGJvlSK5kuLsyIjowGOvOs4h0IjRHCAOEcIwR14A4GG8ZeG8AeIo0GOzQCHeG8beGQXHXgJgMBMEDo0mC8k4bAVav7umxHbay27cx0ggimS0xJwrlKi3Q+y399r7ekuuH8AVGvVOYlWAUbA6DfrIBknG8KLr0lDd9tD/AJ2TLLqrWjbDu6exmF45hjQNOsq1Tcc3dVBFtrEa3mb5W8QqVa2SoCMgtlO4ZgG1HVoQLdU9J5PcnMJRRaxpqGAzFmA6PbvtPNeV2DqU8U9SorAVWaohbTRjfL3EAjQ6gESMaTdotlk62UlPeTVMiUxJKmbo52dQY+85gxXggi1znqBeob/Geq8lsPRp0lVAhNukdCbzzHg+F57FBM2W7HpdgHX7p6Vya4ZTXEc2ahfMpznTU27hObM90deGOrKblvgaGZalJkJYEVArA2ZRcXA20v6THobTc8b4HzdFnTEM6JU1TogXPQ2A3GvqZisTSKHXttLYnqimaO7FeAmMQw3m5zivLjgjLzqFsurAtnuR4eEprw4cBzcMQMxF5jlj9N8M2nR64woowenkDuFGVLagbE27LzC8s1Ix1Xvya/8AxU5KwmOpUslidNajX1NtpJx7riqdStUXLnyvT/EqouVT5gE/1SmBNyZfyZJRVmRBjgY4USVDLqGFx29+kZOmjkTTOimOE5gx4gkeDCDGiEQAxRRCAGKKKARYRGXhBkFwkwdw8oiZN4ImbEJf7t29Abe+0EGs5PcmKeXPWAZ7XysMyL3EbE95mywIDE0WRRkClcoABQ6aeB085V8Pcrr1dZte3eeu3eNu+W9FRzlOoLa3Q22ZXW/xVfrLpFCpbhObnqY9qm6tTPcQfkR6SNw9gtU06wyX0XNtfcdIG2vf3TS8PIdqlT8WVCO9bg/GNr4UZ0Yi4BNN+9TqhPgfjIkrVCLp2ZPFtXrV1p0xmpqTmW+VdVKqzHrIYggfw+cs+K8ISulTnaavme631sFRR0TupsDqJP4ThUpqSOutVcnuRnRRJzrde/MW+XwlMceKovklydo8jx3Iuol2oOHW/RR+i4/hvsT6XmbZCrFWFiCQQdwRuDPdMXgRow7bEdoPzE865b8MAUVwvSWwqEfeUkAE+B6+y8vRSzJAwEwKYGMEnLh+I5urmvbUgnsB3m95P5RUXNmJ3plKYckHe5O3f3TzdtzNbyXxddFU03IttoDbwnNlj9OzBL/JY8r6zUHqKzgF3ByKMqb3zZe2x1PbeZ7iNQMtx+KS+U1Go5NSoxZiblj19g7pnWxJAKn/AAxjWrRGXvZJRo8taQkqx5e86Ujjk6OxYnQf51AepE1fDOTYNJM11bKM1rbnXW/jKjkxghUrjNqE6bdl/u+8+6eh010lZJPRMW1tGX4rwmnRotUF2YDo5ukL+A0ldiOJmpTOmUnKGWx6m1Cm1rXHuEtuV9fRKQ2PTfvAIAB8/hM7/wC2t9zr8JeEaWimSTk9jqNU5Fp9aO3oxDfIyxRKdQ9Maljltvlt29t5VoOmO+48xqPn6yXgX/aMb6KLjx2HxMsZvWx/EeHGnZ1uUbYncHsa3x65CE1FNxVpvTP4dPl7wJltevfrlZRovCXJbHiOBjAYQZU0HQiCIQAwxt4rwCFeOBnK8cDILHQmWnJlTzxb8KnTtvpb4ynLS25M1bViv4lPqNfrAZ6HwZ7Gw110B0/pv91uzqPjLqsMiq66BaiM6nQr0xc9x1Omx3HXKSg4SmamTMQO/wCQ2lwMUaqMpClGXKCNTlK731D2Otx6byXJR7EYOV0dcIQmcX9p2ZfCWKC4t3g+h0maGJ/blDoERAveD94HsJv6S/wdYEb7b90sUqtEDDsMiD+ZrfzOzfOWFPWVlwUpFdit18GsRLDDOMt+q9vSANxtQJTZt7Lt39XvlJx/hwr4V168jAdXVtO/FsapqrSVrkhSwHUua4v4kD0kjHn9i2u6nbU7dpgHgNGpJSUKji6oSBu1uiPEyJwzDmpWWntmax7gNT7gZ6PxumtLCKigC7KAB2AE/ITGeTi0l9NoY+SbZhMPw1Tq5v4dQ285suEYJVSyXtZRm7AL7eN95QBGtYD5zvw/G1qYemGJDi4ubZCNSVPULdXhM8ickb42ol5xZUYhCL5bXJJ0tsAO2VeOw1NkPQB8vP5To7B2JKqCxzNlFhc9Q67DxklMN0SerKbbnXz7pWK4omT5E3hnIfDVqAZlKuyBgysRYkX22nnuJwzUKz0W1KFge+3snzuJ7bybrh6CW6ly+mnynlXLBAvEa47QpPjlX6CXwzdtMxzQXG0XPIzDZUdzuSLn3/SapZn+TGlHvLH4CXYcCat7MUtGU5Wt+2/oX3s0p3cZfAS05UteuP5F+LSmq7eV/eZrHoxl7EzhVMO1ydiTt3eMg0amWo4voHI9GJk7g4HNuesX94lHhmuWJ/ET75JWrbNdwRzbMfvnTwA0+frKzHi1Vx/Effr85YcKNiqnqQk+LSJxtbV27wp/2gfKJdDH7MhgxwjBHAzM3Hwxt4rwAxQRXgFeTBmgJjbyCw/NJGBxHN1EfsOvgdD7jIoMRgHrHBMWVYA3PnLmuaVJlVXUCs5AXT221BFtCCe3W503mB4BjTUCgm1wAf5ixBHu982tBWen07AABwwtZcrdH0C3v4yXFSVMiMnF2g4+tSIz5lzU73W4zHTVSPHWdOEYkcw7moudwxsSOoaaXnOs6l2LrbMQ40/EoYX79YGo0G3A87TmWZxbjR1PEp1I7viqSqg5xBZEA6Q00109J3wnE6fN2Adjc2AFve1hK/8AYJoLHyjKnFMPTtmZVudL/KHnl8RC8eP9KgLUTG1GqDo1GzUSbXCKB0DbYjXymqqODSIPZM/xupzxpczdwHzO2q2AVhpffeSnrLTpnOBt5++bY8nJb7McuPi9dHl/CqWXiRA6mc+FwfrNPynclaY6sxB8bafAys4Hg1OLqVRqDYL2gt7QP6ffLrllhzTopUO2dR66TnyO8qOjEqxbKLDML2MGLpqDfXY2tbfv7t5Ap1bGSXqsxsov0WzaXsNNe7W2vfNCpKwTgm5l9Yc2bfhPwmUwZIMtcdjclEr1v0F/q0kNFos2PIzSigP4QT5i9p5ryzuvEq9+vKR4ZF+k9O5MKAg16h7p57/qUgHETbrpqT/uErgf7EZ1+pZcmySjAdTL70Uy/FI21vMzyaymo9+1LfoE1N7idD7OaPRk+UNIc5f+EefT1HvlHiD0iO4D3TSccYZ/6T8RMxUbptNY9GEvYmcKeyVR/Dce+U/DQC9j23MueGJfMO1SPhKVRkqMJPwhds0/Dm0Z+02HhFyhS1RD2p8D/eceH5mUIisw6yqk+clcoqTKKeZWGjWzAqSOjbQi8S6Ij7FOIRGiEGZm48RXgvFeAEmCK8EArSYrxt4pBY6CC8AMV4Bb8AZsz2PRADH+a+lvf6Tb8KxbVCKXOBU9qoNCzIurKOwECx85l+AUrUQ4+8zX8jYD3e+WlPDB9x/12SyKsu+PcWpvX6NQAMiMLb2a9vdaQ04phVNnqFm7M3x7JwbhlNtXGugv4bS5wvB6VSkUqKHXYXtmUnYq3b3TGWBNtm8fIcYpUVtTiQb2aeRf4bOT4tr7pFRsKWzN7Xa17++Sm5KU+bSpTqOmZAx6VxmtrodtbzM4/C4imSC9wNAbbzN+O/hpHyY/TTPjqdNehUF+oAmZnjPEXIzNWJtsNPSZzGYuop3kN8SzCx9ZMMLi7E88ZKjY8jK5YOx3zfITX8aBxeGOGboAsrBxqQVNxpPNuTWPWiXDMFvlK37Re/ymnTlEjDRtNr3meWMlNyRfHKLgkzvR5G6D/wAzr/J/+p3Xkab3OI9Etf8A3SA3KVF+/wC+8A449T2KqDxbWV/ct+hapyaoU7Z6jHXrZVH+ecuKfJnCXWpkzW2u5cAjrFzaYyojVP3lYHuBsI7Du2H1pVWUfwnMP0mRv6yaR6LTszBSpIUEjXTTa4Gpnm3+pNIfbw+bV6alluCFy9EAWGxtfXXeXnDuUDKHL4ikyhSzK2ZGsovZGU3BPzmB4lxQ4nEtVYt0rBM7ZmVQtlBbrtabYItOzHPJcaLzgFwztf2ioHkgvNQXIXTc7TN8nEGXOes6eWnymmp2vmO/V3CdD7OVdGc482RgvWV6Xd01mcv0jL3lN++8FW/mT/aUai7S66MpdstMB0LHtGsqccwXE7X/AO5aV+jYdwHulRUUPWIPUvqbj6yZOkRBXI0nBcUA6nMi7bsJdcuijU6BVgcpYaHMOkAT6ZR+qV/JmiecWw0BnTl3UXnUUAZsrNUtuSSApbtNlM545uUuNHVPBxXKzNAwgxqmK81MjpBADFADeC8BMF4BW3ivBeG8gsG8V4LwXgGn4DxGnTo83UfKc7Wve2uu802AxWHbRaisevKwJ+Mx3COECvRLM5Xp9GwBGgsbjz90l0+SWJdS9NUdQbXDAajXY+XXK/kp0WWO1Z6BhqAqaIt7a7TrXrthlL81fL36+XZMEOG4uhhOilVH59sxTNnVAlgLofZJ8pAr8axhR6dXEVSAVARyT4g5tfWSsiZDxNHpuAdzhKa830iC1jsoZiyjt2Ime4thql71GQX2G2vYB1zItx7GOpBrPsNFLDUbDTXykingq9aqlTm2sroxLk6KGB+8b7CHkQ/C/rKDjboXsjA6m9tvWVQl9xjgrUlL3vZiWA7CdCPCUIkp3sq406HTQYDh/wCzGZb5ukQers8JUcNw/OVFXqvdvAan/O+bVqYy2ErklWi0V9KFuDjdWt2hvkQJKo8AqEBuauDoGuuX1vLFh2j0nfBU69RlWmyCmrHPmFmNxceOomdsvdEenyYqFQQqi5AF3AFzpraXPCeTApvlqNeyq90vqzFhYsw0tl7OuWuGQquW99fneS+GVCd1tZAjX7rW/wDv6yLI5s8d5QU8uKqrly2cgC5Nh1amQKXtDxmm/wBQsAaWNZxtVAYeIAVh7gfOZqiOkL7XE6I9GbZr+BUqhRQFP+GaamWpjbM/UBrbvY9Up+EGrzSlXLrbqNiO68mZFOjNVXzzD3SGQig47mFRi1ibLcjtNz8pCwqXa56tZI4sAHYAk6rvv7N/nI6vlXxl0ZS7OlV7v4Su4aud2fv+J/6nV2sjt/DYeJnTgdElfEymZ1E38eNyN1yXo26RmT45i+dxNRwbgtZf5V6It6X85qKmJ+zYR32awVP5joPmfKYaYYY7cjo8iXUR6mPvOIMdedBynS8RM53hLQBxMF4wmC8ArwYbxgMN4LDrxXjbwXgG15Nf+mTvL+fTI1no2AQU6aUx2a95OpM895Nooo0VbZiT5F2/tN8GCgm97C85pezOheqO2Arc5Uqqwuoyrbq21kfG8Fo587oDvZwASL6WcH2vHeN4GjNSqVFNmz3HfYa/GTMNxJSoDn2rgDvG4kIPsZw/CUzTU5VuvRJUAAlCUJ07bXkTF0ALgDViWPh1fKSMBiUCMF2zvbxztOT3ZtvOQyTBcZPRcHbKw9xnn03PKapkR/Mept85hhOjH0c8+zRclqPtv4KPiflNGJU8nFtQB7Wb42+UtZnN3Jlo9BMfw2rlZj2beehnGptOFJ7E98qDT4etoJY4V+uZ3B1tpfYdtIKsoP8AUnDh6FOrbVWtfubQ++085Ay9Ls1nqPLRc2CcdmVv0sD8p5fWtlBvcsTp2AW9bzeD0ZtbNNwnj2GVQHzIw6wD8Vv8JoafF6TDo1kb+ZkBHjqDPL4/qlqJNNxNs9Z2upBI1U3HsgaSE1zZRuYzCH9ms60D7Tgi9rJf3kS6MX2R+IG9qSbA2Y9rHqmk4Bg7BdNrCZnD1QKiL92+p7SdL+E3jumFotU60To97sOiPePfObO22kju8VJRcmUfKvH56goqejT9rvc7+g09ZRXnNnJJJNyTcntJ3MIM0jHikjKcuUmx94rwXgvLFB4MRMZeK8kDrxZo28F4JIN4rxuYdsWYdsgkdeK8bmHbFmHbANtwZw9BDrZQFNjYgjSabDVm5srnLA/i3HnMZyaq/sTYjoub+BsZpMLVvoDoZzSW2dEXpGu4DW5uiDkZgzNcqL2tbe0quUGKpUaebMyEVA1MOjKGzWzKCRYkWJ8jLTgdV0RlAv8Aey/SVHLXELVwy2YX51AyncEBjYDt09LyB9OHAscXp9BS5U76AXJJ6Wtx42knO7uFqVANbhEJ6tekZncMxUdFst97G3w3ljgmC3YtsN4LGV5YtYMO1/qZjxNLytqhmGv3ifd/eZqdEPU5pdmw5P8A7hf6v+RloJUcCYcyuo6/+TS1Rx2iYy9mWXQ5tpBQEsfH5Sa7i24lXh8QOedLj2VI18b/ABEmtEfS3wzWM0WEfSZii4zbzQ4E9GVEjnynF8G/8rf8TPIQZ67yhcfZH1+6fgZ5HNsfRRivCGjTFNCCZSxjquVSLdhAMbzrnQnyGkji0eh7DJIokgzQco+I85TwyLtzS1Kn87XX3Af75nFPaV9ROtWougDaAdt7b/2lZRTaf8JjJpNf0cI4GcRUHaPWOFVe0eskHW8F5y51e0esPOL2j1gHS8F5zNVe0esXODtHrAOl4rznzi9o9RFzi9o9YJPrX7HS/LT9K/SL7HS/LT9K/SSIpBBH+x0vy0/Sv0i+x0vy0/Sv0kiKAR/slP8ALT9K/SEYan+Wv6R9J3igHIUUGyj0EacPTO6L+kfSd4oBw+y0/wACfpX6RfZU/Av6RO8BgFPUxuEDqpVLNnGbKMoZGVSt7dr77aGNxOOwdOxKq11LjKgbohS1zYaXANp1PB6RLkljmzhtQPbKEgACw9ga773vAnA6Wur6jLqR7GV0ybbWY9+2sAX2zBjfINFNioB6WUAWtv00036Q7YGx2EBAsliHObL0AKds92tYWzDWOp8EpZi+pJZGYnLcuhQhiQL65FuL2301g/8ABqRBN26RcnUDSoFBGg09lDca3W9zc3AbWx2FUXARjdRYKLjM+S7XHRsc2ht7J7JIL4YBWISz+wco6XXcabd84f8AgNHpBizCoQawJBFRgxYFxbvIsLC1hbQW7twxbKMzfswVU3BOQgAoSRqDlW99dN4Bw+3YLTpU9duiP4eq2xzJbtzC24kylzLBSgQh1zLYL0l06QHWNR6iRKXAaIIa7EjLYs1zZGpug22BpL773JvJ2Fwq01VVHsCwJ1Nuy/kPSAQHx2Hy3NM/vBSylNS111sfu2YG56pFxHFMNTJWphimVlXVaJBLAtplc3NgDl9o5hYG8mvwSk5Y1LuS1wWy3W+S4UhRYHIlx/CIcTwak4sS2pcsQ1mYPYOpNtiABpqAosRAIr8RwillemqlXSmAyoMzPfLbXTRS1msbC9tRfk3F8IGZeZBK1Obtait2PODdmAH7ttGIbbTUXmVuBUmJZmcsQVzFrkIQwNMXHs9M9+u+ggHBKYDKGcBhkIDC2Qliae237Rtfa130EAiYji+EpqWehYXOUlKYDhSwZlJIFgVI1sTdbA5he5TC0iARTTUX9kD3Wle3AKOhBZcubm7EdBXzZ1QEWscx3v1WtYWtqdMKoUbKAB4AWEA5/Y6X5afpX6RfY6X5afpX6SRFAI/2Ol+Wn6V+kX2Ol+Wn6V+kkRQCP9jpflp+lfpF9jpflp+lfpJEUAj/AGOl+Wn6V+kX2Ol+Wn6V+kkRQCP9jpflp+lfpF9jpflp+lfpJEUA/9k=" alt="" className='img1' />
                            <h5 className='my-2'>Design your Apps in your own way</h5>
                            <p className="my-3">Obviously I'm a webdeveloper with 3 years of experience with all stages of development </p>
                            <p className='my-3 '>ReadMore <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                            </svg></span></p>
                        </div>
                        <div className='card1 m-2 p-1'>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3266i-D_I3H1YfrAvoaASIccPdpagEJMXww&usqp=CAU" alt="" className='img1' />
                            <h5 className='my-2'>How Apps Changing IT world</h5>
                            <p className="my-3 ">Obviously I'm a webdeveloper with 3 years  of experience with all stages of development </p>
                            <p className='my-3 '>ReadMore <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                            </svg></span></p>
                        </div>
                        <div className='card1 m-2 p-1'>
                            <img src="data:image/jpeg;base64,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" alt="" className='img1' />
                            <h5 className='my-2'>Smartest Application for Business</h5>
                            <p className="my-3 ">Obviously I'm a webdeveloper with 3 years  of experience with all stages of development </p>
                            <p className='my-3 '>ReadMore <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                            </svg></span></p>
                        </div>
                    </div>


                    <div className='sercon justify-content-center'>
                        <h6 style={{ color: "#4F45E5", fontSize: "16px", fontWeight: "bold" }} className="mb-3">CONTACT ME</h6>
                        <h3 className='mb-4' style={{ fontSize: "20px" }}>Have Question? Get in touch!</h3>
                        <p className="mb-2">Obviously I'm a Web Designer over 3 years of experience .</p>
                        <button className='btn btn-primary justify-content-center my-2'><span className='mx-2'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
                            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                        </svg></span>Contact Me</button></div>

                </div>







                <div className='footercon12 mt-3'>
                    <div className='mx-5'>
                        <img src="https://shreethemes.in/techwind/layouts/assets/images/logo-light.png" class="inline-block dark:hidden" alt="" />
                    </div>


                    <div className='footi112 justify-content-end'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-instagram mx-2" viewBox="0 0 16 16">
                            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-meta mx-2" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8.217 5.243C9.145 3.988 10.171 3 11.483 3 13.96 3 16 6.153 16.001 9.907c0 2.29-.986 3.725-2.757 3.725-1.543 0-2.395-.866-3.924-3.424l-.667-1.123-.118-.197a54.944 54.944 0 0 0-.53-.877l-1.178 2.08c-1.673 2.925-2.615 3.541-3.923 3.541C1.086 13.632 0 12.217 0 9.973 0 6.388 1.995 3 4.598 3c.319 0 .625.039.924.122.31.086.611.22.913.407.577.359 1.154.915 1.782 1.714Zm1.516 2.224c-.252-.41-.494-.787-.727-1.133L9 6.326c.845-1.305 1.543-1.954 2.372-1.954 1.723 0 3.102 2.537 3.102 5.653 0 1.188-.39 1.877-1.195 1.877-.773 0-1.142-.51-2.61-2.87l-.937-1.565ZM4.846 4.756c.725.1 1.385.634 2.34 2.001A212.13 212.13 0 0 0 5.551 9.3c-1.357 2.126-1.826 2.603-2.581 2.603-.777 0-1.24-.682-1.24-1.9 0-2.602 1.298-5.264 2.846-5.264.091 0 .181.006.27.018Z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-facebook mx-2" viewBox="0 0 16 16">
                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-twitter mx-2" viewBox="0 0 16 16">
                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="blue" class="bi bi-arrow-up-circle-fill" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z" />
                        </svg>

                    </div>




                    <div className='cookiecon12 px-5'>
                        This website uses cookies to provide you a with a greater user experience <br />By using it you accept our <span style={{ color: "green" }}>use of cookies</span>
                    </div>




                    <div className='backspaceicon'>
                        {/*    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="black" class="bi bi-backspace" viewBox="0 0 16 16">
  <path d="M5.83 5.146a.5.5 0 0 0 0 .708L7.975 8l-2.147 2.146a.5.5 0 0 0 .707.708l2.147-2.147 2.146 2.147a.5.5 0 0 0 .707-.708L9.39 8l2.146-2.146a.5.5 0 0 0-.707-.708L8.683 7.293 6.536 5.146a.5.5 0 0 0-.707 0z"/>
  <path d="M13.683 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-7.08a2 2 0 0 1-1.519-.698L.241 8.65a1 1 0 0 1 0-1.302L5.084 1.7A2 2 0 0 1 6.603 1h7.08zm-7.08 1a1 1 0 0 0-.76.35L1 8l4.844 5.65a1 1 0 0 0 .759.35h7.08a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-7.08z"/>
</svg> */}
                        <img src="https://img.icons8.com/ios-glyphs/344/multiply.png" alt="" className='cim' />

                    </div>
                </div>


            </div>
        </div >
    )
}

export default UpdatedProject
