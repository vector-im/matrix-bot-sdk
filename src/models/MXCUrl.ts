export class MXCUrl {
    static parse(mxcUrl: string): MXCUrl {
        if (!mxcUrl?.toLowerCase()?.startsWith("mxc://")) {
            throw Error("Not a MXC URI");
        }
        const [domain, ...mediaId] = mxcUrl.slice("mxc://".length).split("/");
        if (!domain) {
            throw Error("missing domain component");
        }
        if (!mediaId?.length) {
            throw Error("missing mediaId component");
        }
        return new MXCUrl(domain, mediaId.join('/'));
    }

    constructor(public domain: string, public mediaId: string) { }

    public toString() {
        return `mxc://${this.domain}/${this.mediaId}`;
    }
}
