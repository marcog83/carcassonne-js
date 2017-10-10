export default class Tile {
    static get kNoRotation() {
        return 0
    }

    static get kQuarterRotation() {
        return 1
    }

    static get kFullRotation() {
        return 4
    }

    constructor() {
        this.orientation_ = Tile.kNoRotation;
        this.init_sides_();
        const [top_terrain, right_terrain, bottom_terrain, left_terrain] = Array.from(arguments);
        if (arguments.length === 4) {
            this.init_terrains_(top_terrain, right_terrain, bottom_terrain, left_terrain);
        } else if (arguments.length === 1) {
            this.CopyFrom(arguments[0]);
        }

    }

    CopyFrom(src) {
        // fix memory leak
        this.top_side_ = src.top_side_.Clone();
        this.right_side_ = src.right_side_.Clone();
        this.bottom_side_ = src.bottom_side_.Clone();
        this.left_side_ = src.left_side_.Clone();
    }

    Clone() {
        return new Tile(this);
    }

    init_sides_() {
        this.top_side_ = new TopSide();
        this.right_side_ = new RightSide();
        this.bottom_side_ = new BottomSide();
        this.left_side_ = new LeftSide();
    }

    init_terrains_(top_terrain, right_terrain, bottom_terrain, left_terrain) {
        this.top_side_ = (top_terrain.Decorate(new TopSide()));
        this.right_side_ = (right_terrain.Decorate(new RightSide()));
        this.bottom_side_ = (bottom_terrain.Decorate(new BottomSide()));
        this.left_side_ = (left_terrain.Decorate(new LeftSide()));
    }

    ConnectedTopToRight() {
        this.top_side_.ConnectedToRight();
        this.right_side_.ConnectedToTop();
        return this;
    }

    ConnectedTopToBottom() {
        this.top_side_.ConnectedToBottom();
        this.bottom_side_.ConnectedToTop();
        return this;

    }

    ConnectedTopToLeft() {
        this.top_side_.ConnectedToLeft();
        this.left_side_.ConnectedToTop();
        return this;

    }

    ConnectedRightToBottom() {
        this.right_side_.ConnectedToBottom();
        this.bottom_side_.ConnectedToRight();
        return this;

    }

    ConnectedRightToLeft() {
        this.right_side_.ConnectedToLeft();
        this.left_side_.ConnectedToRight();
        return this;

    }

    ConnectedBottomToLeft() {
        this.bottom_side_.ConnectedToLeft();
        this.left_side_.ConnectedToBottom();
        return this;

    }

    set_top_side(top) {
        this.top_side_ = top;

    }

    set_right_side(right) {
        this.right_side_ = (right);

    }

    set_bottom_side(bottom) {
        this.bottom_side_ = (bottom);

    }

    set_left_side(left) {
        this.left_side_ = (left);

    }

    Rotate() {
        this.orientation_ += Tile.kQuarterRotation;
        if (this.orientation_ >= Tile.kFullRotation) {
            this.orientation_ = Tile.kNoRotation;
        }

        console.log("Rotating tile...\n");

    }

    ToString() {
        return `$tile with: 
                TOP:${this.GetAdjustedTopSide().ToString()}
                RIGHT:${this.GetAdjustedRightSide().ToString()}
                BOTTOM:${this.GetAdjustedBottomSide().ToString()}
                LEFT:${this.GetAdjustedLeftSide().ToString()}
                torientation:${this.orientation_}`
    }

    GetAdjustedTopSide() {
        if (this.orientation_ === Tile.kQuarterRotation) {
            return this.left_side_;
        } else if (this.orientation_ === 2 * Tile.kQuarterRotation) {
            return this.bottom_side_;
        } else if (this.orientation_ === 3 * Tile.kQuarterRotation) {
            return this.right_side_;
        }

        return this.top_side_;
    }

    GetAdjustedRightSide() {
        if (this.orientation_ === Tile.kQuarterRotation) {
            return this.top_side_;
        } else if (this.orientation_ === 2 * Tile.kQuarterRotation) {
            return this.left_side_;
        } else if (this.orientation_ === 3 * Tile.kQuarterRotation) {
            return this.bottom_side_;
        }

        return this.right_side_;
    }

    GetAdjustedBottomSide() {
        if (this.orientation_ === Tile.kQuarterRotation) {
            return this.right_side_;
        } else if (this.orientation_ === 2 * Tile.kQuarterRotation) {
            return this.top_side_;
        } else if (this.orientation_ === 3 * Tile.kQuarterRotation) {
            return this.left_side_;
        }

        return this.bottom_side_;
    }

    GetAdjustedLeftSide() {
        if (this.orientation_ === Tile.kQuarterRotation) {
            return this.bottom_side_;
        } else if (this.orientation_ === 2 * Tile.kQuarterRotation) {
            return this.right_side_;
        } else if (this.orientation_ === 3 * Tile.kQuarterRotation) {
            return this.top_side_;
        }

        return this.left_side_;
    }

    IsTopTerrainMatch(in_top_tile) {
        let top_side = this.GetAdjustedTopSide();

        let in_bottom_side = in_top_tile.GetAdjustedBottomSide();

        if (top_side.IsPotentialTerrainMatch(in_bottom_side)) {
            return true;
        }

        return false;
    }

    IsRightTerrainMatch(in_right_tile) {
        const right_side = this.GetAdjustedRightSide();

        const in_left_side = in_right_tile.GetAdjustedLeftSide();

        if (right_side.IsPotentialTerrainMatch(in_left_side)) {
            return true;
        }

        return false;
    }

    IsBottomTerrainMatch(in_bottom_tile) {
        const bottom_side = this.GetAdjustedBottomSide();
        const in_top_side = in_bottom_tile.GetAdjustedTopSide();

        if (bottom_side->IsPotentialTerrainMatch( * in_top_side))
        {
            return true;
        }

        return false;
    }

    IsLeftTerrainMatch(in_left_tile) {
        var left_side = this.GetAdjustedLeftSide();

        var in_right_side = in_left_tile.GetAdjustedRightSide();

        if (left_side.IsPotentialTerrainMatch(in_right_side)) {
            return true;
        }

        return false;
    }
}