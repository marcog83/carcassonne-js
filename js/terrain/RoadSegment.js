import TerrainSegment from "./TerrainSegment";
export default class RoadSegment extends TerrainSegment {
    constructor(src) {
        super(src);
        if(src){
            this.CopyFrom(src);
        }
    }

    Clone() {
        return new RoadSegment(this);
    }
};


