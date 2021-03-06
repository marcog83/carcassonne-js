const TripleTerrainSideDecorator=require( "./TripleTerrainSideDecorator");
const TerrainSideDecorator=require( "./TerrainSideDecorator");
const FieldSegment=require( "./terrain/FieldSegment");
const RoadSegment=require( "./terrain/RoadSegment");
module.exports= class RoadSideDecorator extends TripleTerrainSideDecorator {
    constructor(src) {
        super(src);
        this.segment1_ = new FieldSegment();
        this.middle_ = new RoadSegment();
        this.segment2_ = new FieldSegment();
    }

    Clone() {
        return new RoadSideDecorator(this);
    }

    Decorate(side) {
        return new RoadSideDecorator(side);
    }

    ToString() {
        return "road " + TerrainSideDecorator.ToString();

    }

    IsPotentialTerrainMatch(inTerrainSideDecorator) {
        return inTerrainSideDecorator.IsExistingTerrainMatch(this);
    }


    IsExistingTerrainMatch(inRoadSideDecorator) {
        return inRoadSideDecorator instanceof RoadSideDecorator;
    }


}