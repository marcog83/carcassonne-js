/**
 * Created by marcogobbi on 10/10/2017.
 */
const Side=require( "./Side");
const RightSideConnections=require( "./RightSideConnections");
const TerrainSegment=require( "./terrain/TerrainSegment");
module.exports= class RightSide extends Side {
    constructor(src) {
        super(src);
        this.middle_ = new TerrainSegment();
        this.connections_ = new RightSideConnections();
    }

    Clone() {
        return new RightSide(this);
    }

    ConnectedToTop() {
        this.connections_.set_counterclockwise(true);

    }

    ConnectedToRight() {


    }

    ConnectedToBottom() {
        this.connections_.set_clockwise(true);

    }

    ConnectedToLeft() {this.connections_.set_across(true);
    }

    IsConnectedToTop() {
        return this.connections_.counterclockwise();

    }

    IsConnectedToRight() {
        return true;

    }

    IsConnectedToBottom() {
        return this.connections_.clockwise();

    }

    IsConnectedToLeft() {
        return this.connections_.across();

    }

    ToString() {
        return "right side with " + this.connections_.ToString();

    }
}