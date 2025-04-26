import PageManager from "./page/PageManager.tsx";
import AssetManager from "./assets/AssetManager.ts";

function App(){
    AssetManager.Construct();
    return(
        <>
           <PageManager></PageManager>
        </>
    );
}

export default App;