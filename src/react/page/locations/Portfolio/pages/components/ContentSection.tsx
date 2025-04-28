import {JSX} from "react";

interface ContentSectionProps {
    content1: JSX.Element;
    content2?: JSX.Element;
    title?: string
}

function ContentSection({content1, content2, title}: ContentSectionProps): JSX.Element {

    const titleObj = <p className={"h2 text-white mt-5 mb-3 text-center"}>{title}</p>;

    let colFull = "";
    if(content2 === undefined){
        colFull = "col-xl-12";
    }
    else{
        colFull = "col-xl-6";
    }

    return (
        <>
            <div className="container w-75 min-w-300p d-flex align-items-center flex-column">
                {title !== undefined ? titleObj : ""}
                <div className={"d-flex flex-row flex-wrap align-content-center"}>
                    <div className={`d-flex flex-column ${colFull} col-sm-12 col-12`}>
                        {content1}
                    </div>
                    {content2 !== undefined ? <>
                        <div className={`d-flex flex-column ${colFull} col-sm-12 col-12 align-items-center`}>
                            {content2}
                        </div>
                    </> : ""}
                </div>
            </div>
        </>
    );

}

export default ContentSection;