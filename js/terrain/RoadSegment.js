const TerrainSegment=require( "./TerrainSegment");
module.exports= class RoadSegment extends TerrainSegment {


    Clone() {
        return new RoadSegment( );
    }
};


