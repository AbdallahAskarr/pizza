import "./Footer.css";
export const Foot = () => {
    return (
        <>
            <section id="foo" className="container-fluid p-3">
                <div className="row">
                    <div className="col-md-4 p-2">
                        <h4 id="aaa">CheesyBites</h4>
                        <p id="aa">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem perspiciatis id dolorum vel consequatur provident.</p>
                    </div>

                    <div className="col-md-3 p-2 col-6">
                        <h5>Links</h5>
                        <h5>Speciality</h5>
                        <h5>About</h5>
                        <h5>Menu</h5>
                        <h5>Review</h5>



                    </div>

                    <div className="col-md-3 p-2 col-6 ">
                        <h5>Menu</h5>
                        <h5>Speciality</h5>
                        <h5>Menu</h5>



                    </div>

                    <div className="col-md-2 p-2 ">
                        <h5>Contact Us</h5>
                        <h5>CheesyBites@gmail.com</h5>
                        <h5>+64 958 248 966</h5>
                        <h5>Social media</h5>
                    </div>
                    <p style={{marginTop:"30px"}} className="text-center text-light p-4"> &copy;copyright developed by <span style={{
                        color:" #e0bc00"
                    }}>" Abdallah Askar "</span> All right reserved.</p>
                </div>
            </section>


        </>
    )
}