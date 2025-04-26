import SlideShow from "../../components/SlideShow.tsx";
import AssetManager from "../../assets/AssetManager.ts";

const assetCollection = [AssetManager.FreezerCollection, AssetManager.ALittleToLateCollection, AssetManager.TractorCollection, AssetManager.SweetDreamsCollection];

function Home(){
    const iconStyle = "w-15 min-w-50p rounded-circle position-absolute";
    return (
        <>
            <div className="d-flex w-100 h-100 p-0 flex-column align-items-center position-relative">
                <div className="w-30 min-w-300p position-relative d-flex flex-column align-items-center">
                    <img src={"/socials/Me.JPG"} alt={""} className={"w-60 mt-5 min-w-150p pt-5 rounded-circle"}/>
                    <a className={"hover-scale-transition-parent-1-2"} target={"_blank"}
                       href={"https://discordapp.com/users/214811109398413313"}><img src={"/socials/Discord.png"}
                                                                                     alt={""}
                                                                                     className={`${iconStyle} top-70 start-0 hover-scale-transition-1-2`}/></a>
                    <a className={"hover-scale-transition-parent-1-2"} target={"_blank"}
                       href={"https://www.linkedin.com/in/wiebe-sportel-5191b5183/"}><img src={"/socials/Linkedin.png"}
                                                                                     alt={""}
                                                                                     className={`${iconStyle} w-20 top-88 start-3 hover-scale-transition-1-2`}/></a>
                    <a className={"hover-scale-transition-parent-1-2"} target={"_blank"}
                       href={"https://github.com/WiebeHero"}><img src={"/socials/Github.png"}
                                                                                     alt={""}
                                                                                     className={`${iconStyle} top-70 end-0 hover-scale-transition-1-2`}/></a>
                    <a className={"hover-scale-transition-parent-1-2"} target={"_blank"}
                       href={"mailto:wiebesportel2001@hotmail.com"}><img src={"/socials/Mail.png"}
                                                                                     alt={""}
                                                                                     className={`${iconStyle} top-90 end-7 hover-scale-transition-1-2`}/></a>
                </div>
                <p className={"text-white h2 mt-5 min-w-100p max-w-250p text-center"}>Wiebe</p>
                <p className={"text-white h4 mt-1 min-w-200p max-w-450p text-center"}>An software developer/Gameplay
                    programmer.</p>
                <div className={"w-100 d-flex flex-column align-items-center mt-5"}>
                    <p className={"h3 text-center text-white"}>Projects i am most proud of.</p>
                </div>
                <SlideShow assetCollection={assetCollection}></SlideShow>
            </div>
        </>
    );
}

export default Home;