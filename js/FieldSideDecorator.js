import TerrainSideDecorator from "./TerrainSideDecorator";
import Side from "./Side";
import RoadSideDecorator from "./RoadSideDecorator";
import CitySideDecorator from "./CitySideDecorator";
export default class FieldSideDecorator extends TerrainSideDecorator {
    constructor(src) {
        super(src);
        if (src instanceof FieldSideDecorator) {
            this.CopyFrom(src);
        } else if (src instanceof Side) {
            this.middle_ = new FieldSegment();
        }
    }

    Clone() {
        return new FieldSideDecorator(this);
    }

    Decorate(side) {
        return new FieldSideDecorator(side);
    }

    ToString() {
        return "field " + TerrainSideDecorator.ToString();

    }
    IsPotentialTerrainMatch(inTerrainSideDecorator) {
        return inTerrainSideDecorator.IsExistingTerrainMatch(this);
    }



    IsExistingTerrainMatch(inRoadSideDecorator) {
        return inRoadSideDecorator instanceof FieldSideDecorator;
    }
}