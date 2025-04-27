import Back from "./Back.tsx";

interface TractorProps{
    changePage: (page: React.ReactElement<any, string | React.JSXElementConstructor<any>> | undefined, pageNumber: number) => void;
}

function TractorProject({changePage}: TractorProps) {

    /*const tractorCollection: AssetEntry = AssetManager.TractorCollection;
    const figureStyle: string = "text-white fst-italic";*/

    return (
      <>
          <Back changePage={changePage}></Back>
          <div className="w-100 d-flex flex-column align-items-center">
              <div className="d-flex w-75 min-w-300p text-center flex-column align-items-center">
                  <p className={"h1 text-white mt-5 pt-5"}>The Tractor Project – Educational Assembly Simulation</p>
                  <p className={"text-white fs-4"}>Unity | C#</p>
                  <p className={"w-85 text-white"}>The Tractor Project is an educational game designed to teach players how to assemble a
                      tractor by identifying and correctly placing its various components within a time limit. The game is primarily aimed
                      at prospective students attending open days, offering an engaging and interactive introduction to mechanical assembly
                      and agricultural engineering concepts.
                  </p>
              </div>
          </div>
      </>
    );
}

export default TractorProject;