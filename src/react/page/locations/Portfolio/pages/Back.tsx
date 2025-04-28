import {Portfolio} from "../Portfolio.tsx";

interface BackProps{
    changePage: (page: JSX.Element, pageNumber: number) => void;
}

function Back({changePage}: BackProps){
    return(
        <>
            <button onClick={() => {changePage(<Portfolio changePage={changePage}></Portfolio>, 2)}}
                    className={"position-sticky top-5 start-95 border border-0 bg-900 text-white fs-1 h1 pe-5 pt-4"}>X
            </button>
        </>
    );
}

export default Back;