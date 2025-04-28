import {JSX} from "react";


interface TitleSectionProps {
    title: string;
    platform?: string;
    description?: JSX.Element;
}

function TitleSection({title, platform, description}: TitleSectionProps) {

    const platformElement = <p className={"text-white fs-4"}>{platform}</p>
    const descriptionElement = <p className={"w-85 text-white"}>{description}</p>

    return (
        <>
            <div className="d-flex w-75 min-w-300p text-center flex-column align-items-center">
                <p className={"h1 text-white mt-3 pt-5"}>{title}</p>
                {platform !== undefined ? platformElement : ""}
                {description !== undefined ? descriptionElement : ""}
            </div>
        </>
    );
}

export default TitleSection;