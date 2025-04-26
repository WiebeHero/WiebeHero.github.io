import Back from "./Back.tsx";

interface FreezerProjectProps{
    changePage: (page: React.ReactElement<any, string | React.JSXElementConstructor<any>> | undefined, pageNumber: number) => void;
}

function FreezerProject({changePage}: FreezerProjectProps) {
    return (
      <>
        <Back changePage={changePage}></Back>
        <div className="w-100 d-flex flex-column align-items-center">
            <div className="w-75 min-w-350p text-center">
                <p className={"h1 text-white mt-5 pt-5"}>VR Training Simulation – CO₂ Refrigeration System</p>
            </div>
            <div className="w-65 min-w-350p d-flex flex-row text-center">
                <p className={"col-6"}>Test</p>
                <p className={"col-6"}>Test</p>
            </div>
        </div>
      </>
    );
}

export default FreezerProject;