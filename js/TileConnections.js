/**
 * Created by marcogobbi on 10/10/2017.
 */
module.exports= class TileConnections {
    constructor(top_to_right = false, top_to_bottom = false,
                top_to_left = false, top_to_middle = false,
                right_to_bottom = false, right_to_left = false,
                right_to_middle = false, bottom_to_left = false,
                bottom_to_middle = false, left_to_middle = false) {
        this.top_to_right_ = top_to_right;
        this.top_to_bottom_ = top_to_bottom;
        this.top_to_left_ = top_to_left;
        this.top_to_middle_ = top_to_middle;

        this.right_to_top_ = top_to_right;
        this.right_to_bottom_ = right_to_bottom;
        this.right_to_left_ = right_to_left;
        this.right_to_middle_ = right_to_middle;

        this.bottom_to_top_ = top_to_bottom;
        this.bottom_to_right_ = right_to_bottom;
        this.bottom_to_left_ = bottom_to_left;
        this.bottom_to_middle_ = bottom_to_middle;

        this.left_to_top_ = top_to_left;
        this.left_to_right_ = right_to_left;
        this.left_to_bottom_ = bottom_to_left;
        this.left_to_middle_ = left_to_middle;

    }
}