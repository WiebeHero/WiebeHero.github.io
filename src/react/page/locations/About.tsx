import AssetManager from "../../assets/AssetManager.ts";

function About(){

    const meCollection = AssetManager.MeCollection;

    return (
        <>
            <div className="container-fluid d-flex flex-column p-0 w-100 h-100 position-relative align-items-center">
                <div className={"min-w-350p w-100 d-flex align-items-center justify-content-center mt-5 mb-3 pt-5 position-relative"}>
                    <img className={"w-70 rounded-pill"} src={`${meCollection.GetEntry("Image")}`} alt={"Missing"}/>
                    <p className={"w-100 position-absolute start-50 bottom-10 text-white h1 translate-50n text-center m-0"}>Hey,
                        i'm Wiebe.</p>
                </div>
                <div className={"bg-800 w-50 p-1 border border-2 border-primary min-w-300p rounded"}>
                    <p className={"text-white text-center"}>My name is Wiebe and I'm am 23-year-old programmer with over a decade
                        of experience in software/game development, and 2 years in a professional setting. My passion for games began in childhood,
                        sparked by the sense of wonder I felt while playing. That fascination naturally evolved into curiosity—"Could I create
                        something like this myself?"—which led me to begin modding Minecraft servers using Java.
                    </p>
                    <p className={"text-white text-center mb-0"}>
                        This early interest developed into a clear career path. I pursued and completed the Game Developer program at MBO level at
                        Aventus in Apeldoorn, and I am currently in my fourth year of the Creative Media and Game Technologies (CMGT) program.
                        Over the years, I’ve gained a strong foundation in both technical programming and creative problem-solving, and I continue to push
                        myself to grow as a developer and game creator.
                    </p>
                </div>
            </div>
        </>
    );
}

export default About;