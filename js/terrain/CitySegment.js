/**
 * Created by marcogobbi on 11/10/2017.
 */
const TerrainSegment=require( "./TerrainSegment");
module.exports= class CitySegment extends TerrainSegment {
    Clone() {
        return new CitySegment();
    }

}