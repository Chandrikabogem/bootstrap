import React from 'react'

const News = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-transparent sticky-top">
                <div class="container">
                    <div class="collapse navbar-collapse ml-5" id="navbarText">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active colors2 mx-1" aria-current="page" href="aboutus">ABOUT</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link colors2 mx-1" href="menu">MENU</a>
                            </li>
                            <li class="nav-item mx-1">
                                <a class="nav-link colors2" href="reservation">RESERVATION</a>
                            </li>

                        </ul>

                    </div>

                    <a class="navbar-brand fo  mr-5 justify-content-center cafe colors21" href="#">Touché</a>




                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse ml-5 pl-5" id="navbarText">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active colors2 mx-1" aria-current="page" href="news">NEWS & EVENTS</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link colors2 mx-1" href="gallery">GALLAERY</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link colors2 mx-1" href="#">CONTACT</a>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>
            <div className='container text-center'>
                <div className='row'>
                    <div className='my-5 mt-5 col-12 col-md-12 '>
                        <p className='newsp mt-5'>NEWS & EVENTS</p>
                        <h1 className='newsh1'>Now delivering <br /> to your door</h1>
                        <p className='p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non aperiam fugiat  <br />velit, quidem eius quas facilis, ut id optio explicabo asperiores?</p>
</div>

                        <img src="https://yevgenysim-turkey.github.io/touche/assets/img/38.jpg" alt="" className='img24' />
                        <div className='text-left m-2'>
                            <p className='p my-5 text-left '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis reprehenderit magni mollitia <br /> voluptatibus in. Debitis, laudantium possimus veritatis dignissimos adipisci deserunt numquam dolorem ullam, alias rem laborum facilis ducimus quis!</p>

                            <p className='p mb-5 text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni qui ut, quibusdam, culpa exercitationem quae eveniet tempore aspernatur dolorem <br />fuga laudantium possimus quasi natus cumque labore molestiae maxime doloribus voluptates?</p>

                            <h2 className='mb-5 text-left'>Ordering online is easy</h2>
                            <p className='p mb-5 text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae  animi amet iste deserunt dolorem facilis exercitationem deleniti pariatur dolores<br /> magni, mollitia debitis non delectus provident a iusto fuga. Nisi, molestias!</p>
                            <p className='p mb-2 text-left'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus illum officiis, beatae quibusdam ex similique, nihil in facilis magni quisquam fuga. Quaerat <br /> quis provident qui quas voluptatem officiis!</p>
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
                            <button className='btn btn-outline-primary  bw1  px-4'> RESERVE A TABLE</button>
                           

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


        </div>
    )
}

export default News
