import "./Home.css";
export const Home = () => {
    return (
        <>
            <section  id="parent" className="container-fluid bg-dark">
                <section  className="container p-5">
                    <div  className="row ">
                        <div  id="child" className="col-md-6  col-12 ">
                            <h1 id="head"   >Authentic <span id="span2">Pizzas</span> <br /> Timeless Flavors </h1>
                       
                            <p id="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde labore veniam illo laborum. Rerum quidem nesciunt, eligendi saepe pariatur fugiat?</p>
                            <button id="btn2" > Read More</button>
                        </div>
                        <div className="col-md-5 m-2 col-12" >
                            <img id="img1" src={require('./heroNew.png')}  />
                        </div>
                    </div>
                </section>
            </section>
        </>

    )
}