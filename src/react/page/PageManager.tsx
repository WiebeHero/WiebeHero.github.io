import NavBar from "./Navbar.tsx";
import {ReactNode} from "react";

function PageManager(){
    const pages: ReactNode[] = [];
    return (
      <>
        <NavBar pages={pages}></NavBar>
      </>
    );
}

export default PageManager;