import NavBar from "./Navbar.tsx";
import Home from "./locations/Home.tsx";
import {useEffect/*, useRef*/, useState} from "react";
//import {ReactNode} from "react";

function PageManager(){
    const [location, setLocation] = useState(<Home></Home>);
    //const didMount = useRef(false);
    useEffect(() => {
        /*if ( !didMount.current ) {
            didMount.current = true;
            return;
        }*/
        console.log('Do something after location has changed');
    }, [location]);
    return (
      <>
        <NavBar locationChange={setLocation} ></NavBar>
          <div className={"position-relative translate-x-1000-neg-transition-parent"}>
              <div id={"location-content-container"} className={""}>
                  {location}
              </div>
          </div>
      </>
    );
}

export default PageManager;