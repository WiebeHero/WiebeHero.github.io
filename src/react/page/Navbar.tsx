import Home from "./locations/Home.tsx";
import About from "./locations/About.tsx";
import {useState} from "react";

interface NavBarProps{
    locationChange: any;
}

function NavBar({locationChange}: NavBarProps) {
    const [currentPage, setCurrentPage] = useState(0);
    const stylingDiv = "container-fluid navbar-item col p-0 text-center";
    const stylingText = "cursor-pointer navbar-item text-white mt-2 p-0 min-width-100px text-center h3 hover-scale-transition-1-2";
    return (
      <>
          <nav className="navbar navbar-dark bg-dark p-0 bg-800">
              <p className="d-flex navbar-brand h2 fs-2 ms-5 mb-2 ps-5 pt-2 pb-0">Wiebe</p>
              <div className="d-flex justify-content-end w-50">
                  <div className={"justify-content-end row pe-4 m-0 w-60 min-w-300p"}>
                      <div className={`${stylingDiv} hover-scale-transition-parent-1-2`}>
                          <p onClick={() => {
                              console.log("Changing location...");
                              setCurrentPage(0);
                              locationChange(<Home></Home>);
                          }} className={`${currentPage == 0 ? textChange() : ""} ${stylingText}`}>Home</p>
                      </div>
                      <div className={`${stylingDiv} hover-scale-transition-parent-1-2`}>
                          <p onClick={() => {
                              console.log("Changing location...");
                              setCurrentPage(1);
                              locationChange(<About></About>);
                          }} className={`${currentPage == 1 ? textChange() : ""} ${stylingText}`}>About</p>
                      </div>
                      <div className={`${stylingDiv} hover-scale-transition-parent-1-2 ps-2`}>
                          <p onClick={() => {
                              console.log("Changing location...");
                              setCurrentPage(2);
                              locationChange();
                          }}
                             className={`${currentPage == 2 ? textChange() : ""} ${stylingText}`}>Portfolio</p>
                      </div>
                  </div>
              </div>
          </nav>
      </>
    );
}

function textChange() {
    return ("text-decoration-underline");
}

export default NavBar;