/**
 * Created by marcogobbi on 10/10/2017.
 */
import Side from "./Side";
export default class LeftSide extends Side {
    constructor(src) {
        super(src);
        this.middle_ = new TerrainSegment();
        this.connections_ = new LeftSideConnections();
    }

    Clone() {
        return new LeftSide(this);
    }

    ConnectedToTop() {
        this.connections_.set_clockwise(true);

    }

    ConnectedToRight() {
        this.connections_.set_across(true);

    }

    ConnectedToBottom() {
        this.connections_.set_counterclockwise(true);

    }

    ConnectedToLeft() {
    }

    IsConnectedToTop() {
        return this.connections_.clockwise();

    }

    IsConnectedToRight() {
        return this.connections_.across();

    }

    IsConnectedToBottom() {
        return this.connections_.counterclockwise();

    }

    IsConnectedToLeft() {
        return true;

    }

    ToString() {
        return "left side with " + this.connections_.ToString();

    }
}