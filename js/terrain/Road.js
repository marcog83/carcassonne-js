/**
 * Created by marcogobbi on 11/10/2017.
 */
const Terrain=require("./Terrain");
module.exports= class Road extends Terrain {
    GetNewTerrain() {
        return new Road();
    }
}