/**
 * Created by marcogobbi on 10/10/2017.
 */
const SideConnections=require( "./SideConnections");
module.exports= class LeftSideConnections extends SideConnections {
    constructor(src) {
        super(src);

    }

    Clone() {
        return new LeftSideConnections(this);
    }

    ToStringVector() {
        var connections = [];

        connections.push("Left(itself)");

        if (this.clockwise_) {
            connections.push("Top");
        }

        if (this.across_) {
            connections.push("Right");
        }

        if (this.counterclockwise_) {
            connections.push("Bottom");
        }

        return connections;

    }

}