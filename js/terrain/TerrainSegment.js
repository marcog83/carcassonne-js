/**
 * Created by marcogobbi on 11/10/2017.
 */
module.exports= class TerrainSegment {
    Clone() {
        return new TerrainSegment(this);
    }

    CopyFrom(src) {
    }
}