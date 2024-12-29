import "./Team.css"
export default function People() {
    return (
        <>

            <section id="team" className="container ms-auto ">
                <h3 className="text-md-center m-2 " >Customer's Review</h3>
                <div className="row p-4 ">
                    <div className="col-md-1 col-12"></div>
                    <div id="aha" style={{ margin: '9px' }} className="col-md-3  col-12 ">
                        <div className="crad">
                            <div className="card-body" >
                                <p id="text2" className="crad-text" > Lorem ipsum dolor sit aeam velit quaerat maiores, voluptatem
                                    amet quae ullamilique suscipit cum porro, ab
                                    officbore veniam illo  amet quae ullamilique suscipit cum porro, ab
                                    laboriatur fugiat?</p>
                            </div>
                            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                                <img id="img6" className="card-img p-2" src={require('./pic2.png')} />
                                <p id="name">John Deo</p>

                            </div>
                        </div>
                    </div>

                    <div id="aha" style={{ margin: '9px' }} className="col-md-3 col-12 ">
                        <div className="crad">
                            <div className="card-body" >
                                <p id="text2" className="crad-text" > Lorem ipsum dolor sit aeam velit quaerat maiores, voluptatem
                                    amet quae ullamilique suscipit cum porro, ab
                                    officbore veniam illo  amet quae ullamilique suscipit cum porro, ab
                                    laboriatur fugiat?</p>
                            </div>
                            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                                <img id="img6" className="card-img p-2" src={require('./pic1.png')} />
                                <p id="name">Sophia Azura</p>

                            </div>
                        </div>
                    </div>

                    <div id="aha" style={{ margin: '9px' }} className="col-md-3 col-12 ">
                        <div className="crad">
                            <div className="card-body" >
                                <p id="text2" className="crad-text" > Lorem ipsum dolor sit aeam velit quaerat maiores, voluptatem
                                    amet quae ullamilique suscipit cum porro, ab
                                    officbore veniam illo  amet quae ullamilique suscipit cum porro, ab
                                    laboriatur fugiat?</p>
                            </div>
                            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                                <img id="img6" className="card-img p-2" src={require('./pic3.png')} />
                                <p id="name">Victoria Zoe</p>

                            </div>
                        </div>
                    </div>



                </div>
            </section>

        </>
    )
}