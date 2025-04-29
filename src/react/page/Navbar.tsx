import Home from "./locations/Home.tsx";
import About from "./locations/About.tsx";
import {JSX} from "react";
import {Portfolio} from "./locations/Portfolio/Portfolio.tsx";
import AssetEntry from "../assets/AssetEntry.ts";

interface NavBarProps{
    changePage: (page: JSX.Element, pageNumber: number) => void;
    favorites: Map<AssetEntry, JSX.Element>;
    content: Map<AssetEntry, JSX.Element>;
    currentPage: number;
}

function NavBar({favorites, content, changePage, currentPage}: NavBarProps) {
    const stylingDiv = "container-fluid navbar-item col p-0 text-center";
    const stylingText = "cursor-pointer fs-3 navbar-item text-white mt-2 p-0 min-width-100px text-center h3 hover-scale-transition-1-2";

    return (
      <>
          <nav className="navbar navbar-dark bg-dark p-0 position-sticky top-0 z-3 p-4">
              <p className="d-flex navbar-brand h2 fs-2 ms-sm-2 ps-sm-5 ps-1 pt-2 pb-0">Wiebe</p>
              <div className="d-flex justify-content-end col-lg-6 col-md-3 col-sm-2 col-3">
                  <div className={"d-flex justify-content-end row m-0"}>
                      <div className={`${stylingDiv} hover-scale-transition-parent-1-2 me-sm-5`}>
                          <p onClick={() => {
                              console.log("Changing location...");
                              console.log("Favorites length 1: " + favorites.size);
                              changePage(<Home content={content} changePage={changePage} favorites={favorites}></Home>, 0);
                          }} className={`${currentPage == 0 ? textChange() : ""} ${stylingText}`}>Home</p>
                      </div>
                      <div className={`${stylingDiv} hover-scale-transition-parent-1-2 me-sm-5`}>
                          <p onClick={() => {
                              console.log("Changing location...");
                              changePage(<About></About>, 1);
                          }} className={`${currentPage == 1 ? textChange() : ""} ${stylingText}`}>About</p>
                      </div>
                      <div className={`${stylingDiv} hover-scale-transition-parent-1-2 me-sm-5`}>
                          <p onClick={() => {
                              console.log("Changing location...");
                              changePage(<Portfolio changePage={changePage} content={content}></Portfolio>, 2);
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