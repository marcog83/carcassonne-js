/**
 * Created by marcogobbi on 11/10/2017.
 */
const Terrain=require("./Terrain");
module.exports= class City extends Terrain {
    GetNewTerrain() {
        return new City();
    }
}