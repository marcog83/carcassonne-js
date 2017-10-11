import TerrainSideDecorator from "./TerrainSideDecorator";
import Side from "./Side";
import CitySegment from "./terrain/CitySegment";
export default class CitySideDecorator extends TerrainSideDecorator {
    constructor(src) {
        super(src);
        if (src instanceof CitySideDecorator) {
            this.CopyFrom(src);
        } else if (src instanceof Side) {
            this.middle_ = new CitySegment();
        }


    }

    Clone() {
        return new CitySideDecorator(this);
    }

    Decorate(side) {
        return new CitySideDecorator(side);
    }

    ToString() {
        return "city " + TerrainSideDecorator.ToString();

    }

    IsPotentialTerrainMatch(inTerrainSideDecorator) {
        return inTerrainSideDecorator.IsExistingTerrainMatch(this);
    }


    IsExistingTerrainMatch(inRoadSideDecorator) {
        return inRoadSideDecorator instanceof CitySideDecorator;

    }



}