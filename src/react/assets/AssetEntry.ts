class AssetEntry {

    private contentMap: Map<string, string>;

    public constructor() {
        this.contentMap = new Map();
    }

    public AddEntry(identifier: string, content: string) {
        this.contentMap.set(identifier, content);
    }

    public GetEntry(identifier: string): string | undefined{
        console.log("Getting entry of: ", identifier);
        console.log(this.contentMap.get(identifier));
        return this.contentMap.get(identifier);
    }
}

export default AssetEntry;