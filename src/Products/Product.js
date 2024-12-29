import "./Product.css";
export default function Proo() {
    return (
        <>

            <section id="special" className="container  " >
                <h1 className="text-center pt-4" >Our Speciality</h1>
                <div className="row  p-3 " >

                    <div  className="col-md-4 col-12 p-2 " >
                        <div id="parent6"  style={{ width: "100%" }} className="card" >
                            <img id="img7" className="card-img-top bg-dark" alt="image" src={require('./menu1.jpg')} style={{ width: "100%", height: "200px" }} />
                            <div className="card-body" >
                                <h4 id="info6" className="card-title" >Margarita Marvel</h4>
                                <p id="text6" className="card-text" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus dolore </p>
                                <span className="" id="span6" > $16.99<span style={{ paddingLeft: "10px" }} >  </span>    <button className='btn ' id="btn6">Order Now   </button> </span>

                            </div>
                        </div>
                    </div>

                    <div  className="col-md-4 col-12 p-2 " >
                        <div id="parent6" style={{ width: "100%" }} className="card" >
                            <img id="img7" className="card-img-top bg-dark  " alt="image" src={require('./menu2.jpg')} style={{ width: "100%", height: "200px" }} />
                            <div className="card-body" >
                                <h4 id="info6" className="card-title" >Pesto Paradise</h4>
                                <p id="text6" className="card-text" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus dolore </p>
                                <span id="span6" className="" >$18.99<span style={{ paddingLeft: "10px" }} >  </span>    <button id="btn6" className='btn '>Order Now </button> </span>

                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 col-12 p-2 " >
                        <div id="parent6" style={{ width: "100%" }} className="card" >
                            <img id="img7" className="card-img-top bg-dark" alt="image" src={require('./menu3.jpg')} style={{ width: "100%", height: "200px" }} />
                            <div className="card-body" >
                                <h4 id="info6" className="card-title" >Hawaiian Bliss</h4>
                                <p id="text6" className="card-text" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus dolore </p>
                                <span id="span6" className="" >$14.99 <span style={{ paddingLeft: "4px" }} >  </span>    <button className='btn ' id="btn6">Order Now   </button> </span>

                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 col-12 p-2 " >
                        <div id="parent6" style={{ width: "100%" }} className="card" >
                            <img id="img7" className="card-img-top bg-dark" alt="image" src={require('./menu4.jpg')} style={{ width: "100%", height: "200px" }} />
                            <div className="card-body" >
                                <h4 className="card-title" id="info6" >Truffle Treasures</h4>
                                <p className="card-text" id="text6" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus dolore</p>
                                <span className="" id="span6" > $15.99<span style={{ paddingLeft: "4px" }} >  </span>    <button className='btn ' id="btn6">Order Now  </button> </span>

                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 col-12 p-2 " >
                        <div id="parent6" style={{ width: "100%" }} className="card" >
                            <img id="img7" className="card-img-top bg-dark" alt="image" src={require('./menu5.jpg')} style={{ width: "100%", height: "200px" }} />
                            <div className="card-body" >
                                <h4 id="info6" className="card-title" >Farmhouse Harvest</h4>
                                <p id="text6" className="card-text" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus dolore</p>
                                <span id="span6" className="" >$18.99 <span style={{ paddingLeft: "4px" }} >  </span>    <button className='btn ' id="btn6">Order Now  </button> </span>

                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 col-12 p-2 " >
                        <div id="parent6" style={{ width: "100%" }} className="card" >
                            <img id="img7" className="card-img-top bg-dark" alt="image" src={require('./menu6.jpg')} style={{ width: "100%", height: "200px" }} />
                            <div className="card-body" >
                                <h4 className="card-title" id="info6" >Cheese Frenzy</h4>
                                <p className="card-text" id="tetx6" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus dolore</p>
                                <span className="" id="span6" > $13.99<span style={{ paddingLeft: "4px" }} >  </span>    <button className='btn ' id="btn6">Order Now </button> </span>

                            </div>
                        </div>
                    </div>



                </div>
            </section >
        </>
    )
}