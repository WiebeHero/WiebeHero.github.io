class AssetEntry {

    private readonly image: string;
    private readonly video: string;

    public constructor(image: string, video: string) {
        this.image = image;
        this.video = video;
    }

    public get Image(){
        return this.image;
    }

    public get Video(){
        return this.video;
    }

}

export default AssetEntry;