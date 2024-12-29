import "./Menu.css";
export default function Menu() {
    return (
        <>

            <section id="menuu" className="container p-2">
                <h1 className="text-center pt-4" >Our Menu</h1>
                <div className="row p-3">
                    <div className="col-md-3 col-12 p-2" >
                        <div id="parent7" className="card">
                            <img id="img4" src={require("./menu7.jpg")} alt="image" className="bg-dark card-img-top" />
                            <div className="card-body" >
                                <h4 id="info7" className="card-title" >Margarita Marvel</h4>
                                <p id="text7" className="crad-text" >Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>

                                <span id="span7" className="" >$16.99 <span style={{ paddingLeft: "10px" }} >  </span>    <button className='btn ' id="btn7">Order Menu   </button> </span>

                            </div>
                        </div>
                    </div>

                    <div className="col-md-3  col-12 p-2" >
                        <div id="parent7" className="card">
                            <img id="img4" src={require("./menu8.jpg")} alt="image" className="card-img-top" />
                            <div className="card-body" >
                                <h4 id="info7" className="card-title" >Pesto Paradise</h4>
                                <p id="text7" className="crad-text" >Lorem ipsum dolor sit amet consectetur adipisicing elit.  </p>
                                <span id="span7" className="" >$18.99 <span style={{ paddingLeft: "10px" }} >  </span>    <button className='btn ' id="btn7">Order Menu   </button> </span>

                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 col-12 p-2" >
                        <div id="parent7" className="card">
                            <img id="img4" src={require("./menu9.jpg")} alt="image" className="card-img-top" />
                            <div className="card-body" >
                                <h4 id="info7" className="card-title" >Hawaiian Bliss</h4>
                                <p id="text7" className="crad-text" >Lorem ipsum dolor sit amet consectetur adipisicing elit.  </p>
                                <span className="" id="span7" >$14.99 <span style={{ paddingLeft: "10px" }} >  </span>    <button className='btn ' id="btn7">Order Menu  </button> </span>

                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 col-12 p-2" >
                        <div id="parent7" className="card">
                            <img id="img4" src={require("./menu10.jpg")} alt="image" className="card-img-top" />
                            <div className="card-body" >
                                <h4 id="info7" className="card-title" >Truffle Treasures</h4>
                                <p id="text7" className="crad-text" >Lorem ipsum dolor sit amet consectetur adipisicing elit.  </p>
                                <span className="" id="span7" >$15.99 <span style={{ paddingLeft: "10px" }} >  </span>    <button className='btn ' id="btn7">Order Menu   </button> </span>

                            </div>
                        </div>
                    </div>





                </div>
            </section>

        </>
    )
}