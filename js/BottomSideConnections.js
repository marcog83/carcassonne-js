const SideConnections=require( "./SideConnections");

module.exports= class BottomSideConnections extends SideConnections {
    constructor(src) {
        super(src);
        if (src) {
            this.CopyFrom(src);
        }

    }

    Clone() {
        return new BottomSideConnections(this);
    }

    ToStringVector() {
        var connections = [];

        connections.push("Bottom(itself)");

        if (this.clockwise_) {
            connections.push("Left");
        }

        if (this.across_) {
            connections.push("Top");
        }

        if (this.counterclockwise_) {
            connections.push("Right");
        }

        return connections;

    }
}