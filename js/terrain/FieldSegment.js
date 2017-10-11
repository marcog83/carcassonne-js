/**
 * Created by marcogobbi on 11/10/2017.
 */
const TerrainSegment=require( "./TerrainSegment");
module.exports= class FieldSegment extends TerrainSegment {
    Clone() {
        return new FieldSegment();
    }


}