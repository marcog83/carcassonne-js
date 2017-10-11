module.exports= class SideConnections {
    constructor(src) {
        this.clockwise_ = false;
        this.across_ = false;
        this.counterclockwise_ = false;
        this.middle_ = false;
        if (src) {
            this.CopyFrom(src);
        }
    }

    clockwise() {
        return this.clockwise_
    };

    across() {
        return this.across_
    };

    counterclockwise() {
        return this.counterclockwise_
    };

    middle() {
        return this.middle_
    };

    set_clockwise(clockwise) {
        this.clockwise_ = clockwise
    };

    set_across(across) {
        this.across_ = across
    };

    set_counterclockwise(counterclockwise) {
        this.counterclockwise_ = counterclockwise
    };

    set_middle(middle) {
        this.middle_ = middle
    };

    ToStringVector() {
        var tmp = [];
        if (this.clockwise_) {
            tmp.push("clockwise");
        }

        if (this.across_) {
            tmp.push("across");
        }

        if (this.counterclockwise_) {
            tmp.push("counterclockwise");
        }

        return tmp;
    }

    ToString() {
        return "connection(s) to " + this.ToStringVector();
    }

    CopyFrom(src) {
        this.clockwise_ = src.clockwise_;
        this.across_ = src.across_;
        this.counterclockwise_ = src.counterclockwise_;
        this.middle_ = src.middle_;

    }

    Clone() {
        return new SideConnections(this);
    }
}