/**
 * Created by marcogobbi on 10/10/2017.
 */
const Side=require( "./Side");

module.exports= class SideDecorator extends Side {
    constructor(src) {

        super(src);
        //  this.side_;
        if (src) {
            if (src instanceof Side) {
                this.side_ = src;
            } else if (src instanceof SideDecorator) {

                this.CopyFrom(src);
            }
        }

    }

    CopyFrom(src) {
        // FIX: Clone returns a specific side but a generic connection?
      //  console.log(src)
        this.side_ = src.side_.Clone();
    }

    ConnectedToTop() {
        this.side_.ConnectedToTop();

    }

    ConnectedToRight() {
        this.side_.ConnectedToRight();

    }

    ConnectedToBottom() {
        this.side_.ConnectedToBottom();

    }

    ConnectedToLeft() {
        this.side_.ConnectedToLeft();

    }

    IsConnectedToTop() {
        return this.side_.IsConnectedToTop();

    }

    IsConnectedToRight() {
        return this.side_.IsConnectedToRight();

    }

    IsConnectedToBottom() {
        return this.side_.IsConnectedToBottom();

    }

    IsConnectedToLeft() {
        return this.side_.IsConnectedToLeft();

    }

    ToString() {
        return this.side_.ToString();

    }
}