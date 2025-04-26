class AssetEntry {

    private contentMap: Map<string, string>;

    public constructor() {
        this.contentMap = new Map();
    }

    public AddContentEntry(identifier: string, content: string) {
        this.contentMap.set(identifier, content);
    }

    public GetContentEntry(identifier: string): string | undefined{
        return this.contentMap.get(identifier);
    }
}

export default AssetEntry;