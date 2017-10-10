/**
 * Created by marcogobbi on 10/10/2017.
 */
import SideConnections from "./SideConnections";
export default class RightSideConnections extends SideConnections {
    constructor(src) {
        super(src);

    }

    Clone() {
        return new RightSideConnections(this);
    }

    ToStringVector() {
        var connections = [];

        connections.push("Right(itself)");

        if (this.clockwise_) {
            connections.push("Bottom");
        }

        if (this.across_) {
            connections.push("Left");
        }

        if (this.counterclockwise_) {
            connections.push("Top");
        }

        return connections;

    }

}