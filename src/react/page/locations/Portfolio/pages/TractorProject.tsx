import Back from "./Back.tsx";
import {JSX} from "react";
import TitleSection from "./components/TitleSection.tsx";

interface TractorProps{
    changePage: (page: JSX.Element, pageNumber: number) => void;
}

function TractorProject({changePage}: TractorProps) {

    //Title etc.
    const title = "The Tractor Project – Educational Assembly Simulation";
    const platform = "Unity | C#";
    const description = <>The Tractor Project is an educational game designed to teach players how to assemble a
        tractor by identifying and correctly placing its various components within a time limit. The game is primarily aimed
        at prospective students attending open days, offering an engaging and interactive introduction to mechanical assembly
        and agricultural engineering concepts.</>;

    return (
      <>
          <Back changePage={changePage}></Back>
          <div className="w-100 d-flex flex-column align-items-center">
              <TitleSection title={title} platform={platform} description={description}></TitleSection>
              
          </div>
      </>
    );
}

export default TractorProject;