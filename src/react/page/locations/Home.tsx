import SlideShow from "../../components/SlideShow.tsx";
import AssetEntry from "../../assets/AssetEntry.ts";
import {JSX, ReactElement} from "react";

interface HomeProps{
    changePage: (page: JSX.Element, pageNumber: number) => void;
    favorites: Map<AssetEntry, ReactElement>
    content: Map<AssetEntry, ReactElement>
}

function Home({changePage, favorites, content} : HomeProps){
    const iconStyle = "w-15 min-w-50p rounded-circle position-absolute";
    const experienceBox = "d-flex flex-row flex-wrap align-items-center justify-content-center col-xl-3 col-7 p-3 ms-3 me-3 min-w-250p min-h-250p m-1 border border-3 bg-700 border-secondary rounded";
    const textStyle = "text-white text-center d-flex align-items-center justify-content-center h3 col-xl-12 col-12 m-0 p-0";
    return (
        <>
            <div
                className="d-flex w-100 h-100 p-0 flex-row flex-wrap align-items-center justify-content-center position-relative pt-5">
                <div className="col-xl-4 col-7 min-w-300p position-relative d-flex flex-column align-items-center p-4">
                    <img src={"/socials/Me.JPG"} alt={""} className={"w-60 min-w-150p rounded-circle"}/>
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

                    <p className={"text-white h2 pt-2 min-w-100p max-w-250p text-center"}>Wiebe</p>
                    <p className={"text-white h4 w-75 min-w-200p max-w-450p text-center"}>A software developer/Gameplay
                        programmer.</p>
                </div>
                <div
                    className={"col-xl-6 col-11 position-relative d-flex flex-column align-items-center p-5 mt-5 ms-2 me-2"}>
                    <SlideShow favorites={favorites} content={content} changePage={changePage}></SlideShow>
                    <div className={"w-100 min-w-300p d-flex flex-column align-items-center mt-5"}>
                        <p className={"h3 text-center text-white"}>Projects I am most proud of.</p>
                    </div>
                </div>
                <div className={"d-flex col-xl-12 col-12 align-items-center justify-content-center"}>
                    <p className={"text-white h1 mt-5 mb-2"}>
                        Experience
                    </p>
                </div>
                <div
                    className={"d-flex w-100 h-100 p-0 flex-row flex-wrap align-items-center justify-content-center"}>
                    <div className={experienceBox}>
                        <div className={"d-flex justify-content-center align-items-center col-12"}>
                            <img className={"max-w-100p max-h-100p"} src={"/experience_icons/UnityLogo.png"}
                                 alt={"Image Missing"}/>
                            <img className={"max-w-100p max-h-100p"} src={"/experience_icons/CSharpLogo.png"}
                                 alt={"Image Missing"}/>
                        </div>
                        <p className={textStyle}>Unity
                            and C#</p>
                        <p className={textStyle}>6
                            Years</p>
                    </div>
                    <div className={experienceBox}>
                        <p className={"bg-dark rounded-circle max-w-100p min-h-100p text-white d-flex align-items-center justify-content-center h2 col-xl-12 col-12 m-0 p-0"}>{"</>"}</p>
                        <p className={textStyle}>Total
                            Programming Experience</p>
                        <p className={textStyle}>11
                            Years</p>
                    </div>
                    <div className={experienceBox}>
                        <div className={"d-flex justify-content-center align-items-center col-12"}>
                            <img className={"bg-white rounded-circle max-w-100p max-h-100p"}
                                 src={"/experience_icons/Java.png"}
                                 alt={"Image Missing"}/>
                        </div>
                        <p className={textStyle}>Java</p>
                        <p className={textStyle}>3
                            Years</p>
                    </div>
                    <div className={experienceBox}>
                        <div className={"d-flex justify-content-center align-items-center col-4"}>
                            <img className={"max-w-100p max-h-100p"}
                                 src={"/experience_icons/HTML5Icon.png"}
                                 alt={"Image Missing"}/>
                        </div>
                        <div className={"d-flex justify-content-center align-items-center col-4"}>
                            <img className={"max-w-100p max-h-100p"}
                                 src={"/experience_icons/JavascriptIcon.png"}
                                 alt={"Image Missing"}/>
                        </div>
                        <div className={"d-flex justify-content-center align-items-center col-4"}>
                            <img className={"max-w-100p max-h-100p"}
                                 src={"/experience_icons/CSSIcon.png"}
                                 alt={"Image Missing"}/>
                        </div>
                        <div className={"d-flex justify-content-center align-items-center col-4"}>
                            <img className={"max-w-100p max-h-100p"}
                                 src={"/experience_icons/PHPIcon.png"}
                                 alt={"Image Missing"}/>
                        </div>
                        <div className={"d-flex justify-content-center align-items-center col-4"}>
                            <img className={"max-w-100p max-h-100p"}
                                 src={"/experience_icons/LaravelIcon.png"}
                                 alt={"Image Missing"}/>
                        </div>
                        <div className={"d-flex justify-content-center align-items-center col-4"}>
                            <img className={"max-w-100p max-h-100p"}
                                 src={"/experience_icons/VueJSIcon.png"}
                                 alt={"Image Missing"}/>
                        </div>
                        <p className={textStyle}>Fullstack Web Development</p>
                        <p className={textStyle}>2
                            Years</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;