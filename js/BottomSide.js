import Side from "./Side";
import BottomSideConnections from "./BottomSideConnections";

export default class BottomSide extends Side {
    constructor(...args) {
        super();
        this.middle_ = new TerrainSegment();
        this.connections_ = new BottomSideConnections();
        if (args.length === 1) {
            this.CopyFrom(args[0]);
        } else if (args.length === 2) {
            this.middle_ = args[0];
            this.connections_ = args[1];
        }
    }

    Clone() {
        return new BottomSide(this);
    }

    ConnectedToTop() {
        this.connections_.set_across(true);

    }

    ConnectedToRight() {
        this.connections_.set_counterclockwise(true);

    }

    ConnectedToBottom() {
    }

    ConnectedToLeft() {
        this.connections_.set_clockwise(true);
    }

    IsConnectedToTop() {
        return this.connections_.across();
    }

    IsConnectedToRight() {
        return this.connections_.counterclockwise();
    }

    IsConnectedToBottom() {
        return true;
    }

    IsConnectedToLeft() {
        return this.connections_.clockwise();
    }

    ToString() {
        return "bottom side with " + this.connections_.ToString();
    }
}