export default class TopSideConnections extends SideConnections{
    constructor(src) {
        super(src);

    }

    Clone() {
        return new TopSideConnections(this);
    }

    ToStringVector() {
        var connections = [];

        connections.push("Top(itself)");

        if (this.clockwise_) {
            connections.push("Right");
        }

        if (this.across_) {
            connections.push("Bottom");
        }

        if (this.counterclockwise_) {
            connections.push("Left");
        }

        return connections;

    }
}