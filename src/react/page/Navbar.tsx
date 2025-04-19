import Home from "./locations/Home.tsx";
import About from "./locations/About.tsx";
import {useState} from "react";
import AnimationState from "./AnimationState.ts";

interface NavBarProps{
    locationChange: any;
    setAnimationState: any;
}

function NavBar({locationChange, setAnimationState}: NavBarProps) {
    const [currentPage, setCurrentPage] = useState(0);
    const [busy, setBusy] = useState(false);
    const stylingDiv = "container-fluid navbar-item col p-0 text-center";
    const stylingText = "cursor-pointer fs-3 navbar-item text-white mt-2 p-0 min-width-100px text-center h3 hover-scale-transition-1-2";
    return (
      <>
          <nav className="navbar navbar-dark bg-dark p-0 bg-800 position-sticky top-0 z-3">
              <p className="d-flex navbar-brand h2 fs-2 ms-sm-5 mb-2 ps-sm-5 ps-3 pt-2 pb-0">Wiebe</p>
              <div className="d-flex justify-content-end w-50 min-w-300p">
                  <div className={"justify-content-end row pe-4 m-0 w-60 min-w-300p"}>
                      <div className={`${stylingDiv} hover-scale-transition-parent-1-2`}>
                          <p onClick={() => {
                              console.log("Changing location...");
                              if(currentPage === 0 || busy)
                                  return;
                              setBusy(true);
                              setCurrentPage(0);
                              setAnimationState(new AnimationState(true, false));
                              setTimeout(() => {
                                  setAnimationState(new AnimationState(false, true));
                                  locationChange(<Home></Home>);
                                  setTimeout(() =>{
                                      setBusy(false);
                                  }, 950);
                              }, 950);
                          }} className={`${currentPage == 0 ? textChange() : ""} ${stylingText}`}>Home</p>
                      </div>
                      <div className={`${stylingDiv} hover-scale-transition-parent-1-2`}>
                          <p onClick={() => {
                              console.log("Changing location...");
                              if(currentPage === 1 || busy)
                                  return;
                              setBusy(true);
                              setCurrentPage(1);
                              setAnimationState(new AnimationState(true, false));
                              setTimeout(() => {
                                  setAnimationState(new AnimationState(false, true));
                                  locationChange(<About></About>);
                                  setTimeout(() =>{
                                      setBusy(false);
                                  }, 950);
                              }, 950);
                          }} className={`${currentPage == 1 ? textChange() : ""} ${stylingText}`}>About</p>
                      </div>
                      <div className={`${stylingDiv} hover-scale-transition-parent-1-2 ps-2`}>
                          <p onClick={() => {
                              console.log("Changing location...");
                              setCurrentPage(2);
                              locationChange();
                          }} className={`${currentPage == 2 ? textChange() : ""} ${stylingText}`}>Portfolio</p>
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