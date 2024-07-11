export class MXCUrl {
    static parse(mxcUrl: string): MXCUrl {
        if (!mxcUrl?.toLowerCase()?.startsWith("mxc://")) {
            throw Error("mxcUrl does not begin with mxc://");
        }
        const [domain, mediaId] = mxcUrl.slice("mxc://".length).split("/", 2);
        if (!domain) {
            throw Error("missing domain component");
        }
        if (!mediaId) {
            throw Error("missing mediaId component");
        }
        return new MXCUrl(domain, mediaId);
    }

    constructor(public domain: string, public mediaId: string) { }

    public toString() {
        return `mxc://${this.domain}/${this.mediaId}`;
    }
}
