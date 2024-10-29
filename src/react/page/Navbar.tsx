import {ReactNode} from "react";

interface NavBarProps{
    pages: ReactNode[];
}

function NavBar({pages}: NavBarProps) {
    return (
      <>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-0 bg-800">
              <p className="navbar-brand h2 fs-2 ms-5 ps-5 pt-2">Wiebe</p>
              <div className="container-fluid ms-2 justify-content-end">
                  <div className={"col"}>
                      <p className="navbar-item text-white mt-2 text-center ps-5 pe-5 me-5 h3 float-end">Portfolio</p>
                      <p className="navbar-item text-white mt-2 text-center ps-5 h3 float-end">About</p>
                      <p className="navbar-item text-white mt-2 text-center ps-5 h3 float-end">Home</p>
                  </div>
              </div>
          </nav>
      </>
    );
}

export default NavBar;