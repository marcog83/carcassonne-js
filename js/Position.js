/**
 * Created by marcogobbi on 10/10/2017.
 */
module.exports= class Position {
    constructor(dimension1 = 0, dimension2 = 0) {
        if (dimension1 instanceof Position) {
            this.CopyFrom(dimension1);
        } else {
            this.dimension1_ = dimension1;
            this.dimension2_ = dimension2;
        }

    }

    CopyFrom(src) {
        this.dimension1_ = src.dimension1_;
        this.dimension2_ = src.dimension2_;
    }

    Equals(position) {
        return this.dimension1_ === position.dimension1() && this.dimension2_ === position.dimension2();

    }

    dimension1() {
        return this.dimension1_;
    }

    dimension2() {
        return this.dimension2_;
    }

    GetTopNeighbor() {
        return new Position(this.dimension1_, this.dimension2_ + 1);
    }

    GetRightNeighbor() {
        return new Position(this.dimension1_ + 1, this.dimension2_);
    }

    GetBottomNeighbor() {
        return new Position(this.dimension1_, this.dimension2_ - 1);
    }

    GetLeftNeighbor() {
        return new Position(this.dimension1_ - 1, this.dimension2_);
    }

    ToString() {
        return "(" + this.dimension1_ + ", " + this.dimension2_ + ")";
    }

}