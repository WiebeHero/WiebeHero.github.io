function SlideShow(){
    return (
        <>
            <div className="w-50 max-w-800p min-w-350p p-0 m-0 position-relative">
                <img className={"w-100"} src={"/projects/sweet_dreams/SweetDreams.jpg"} alt={""}/>
                {/*<video className={"max-w-1000"} controls>
                    <source src={"/projects/sweet_dreams/SweetDreams.mp4"} type="video/mp4" />
                    Your browser doesn't support the video tag.
                </video>*/}
            </div>
        </>
    );
}

export default SlideShow;