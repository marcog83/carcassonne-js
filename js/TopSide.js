/**
 * Created by marcogobbi on 10/10/2017.
 */
import Side from "./Side";
import TopSideConnections from "./TopSideConnections";
import TerrainSegment from "./terrain/TerrainSegment";
export default class TopSide extends Side {
    constructor(src) {
        super(src);
        this.middle_ = new TerrainSegment();
        this.connections_ = new TopSideConnections();
    }

    Clone() {
        return new TopSide(this);
    }

    ConnectedToTop() {


    }

    ConnectedToRight() {
        this.connections_.set_counterclockwise(true);

    }

    ConnectedToBottom() {
        this.connections_.set_clockwise(true);

    }

    ConnectedToLeft() {  this.connections_.set_across(true);
    }

    IsConnectedToTop() {
        return true;

    }

    IsConnectedToRight() {
        return this.connections_.clockwise();

    }

    IsConnectedToBottom() {
        return this.connections_.across();

    }

    IsConnectedToLeft() {
        return this.connections_.counterclockwise();

    }

    ToString() {
        return "top side with " + this.connections_.ToString();

    }
}