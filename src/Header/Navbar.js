
import "./Navbar.css";
export default function Nav() {

    return (
        <>
            <nav  class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a id="logo" class="navbar-brand" href="#">CheesyBites.</a>
                    <button style={{border:"none"}} class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler" style={{ border: "none" }}><i style={{}} class="fa-solid fa-eye"></i></span>
                    </button>
                    <div class="collapse navbar-collapse  " id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2  ms-auto mb-lg-0 ">
                            <li style={{ paddingLeft: "10px" }} class="nav-item">
                                <a id="a" class="nav-link " aria-current="page" href="#parent">Home</a>
                            </li>
                            <li style={{ paddingLeft: "10px" }} class="nav-item ">
                                <a id="a" class="nav-link" href="#special">Speciality</a>
                            </li>

                            <li style={{ paddingLeft: "10px" }} class="nav-item">
                                <a id="a" class="nav-link" href="#parent_two">About</a>
                            </li>

                            <li style={{ paddingLeft: "10px" }} class="nav-item">
                                <a id="a" class="nav-link" href="#menuu">Menu</a>
                            </li>

                            <li style={{ paddingLeft: "10px" }} class="nav-item">
                                <a id="a" class="nav-link" href="#team">Review</a>
                            </li>

                        </ul>
                        <form class="d-flex">
                            <button id="btn" class="btn btn-success" type="submit"> Sign Up</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>


    )
}