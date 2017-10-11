const {shuffle}=require( "./utility");

module.exports= class Bag {
    constructor() {

    }

    Fill(tiles) {
        this.tiles_ = tiles.slice(0);
    }

    Shuffle() {
        this.tiles_=shuffle(this.tiles_);
    }

    Draw() {
        // Get a tile.
        // Remove that tile=require( the rest of the tiles.
        var tile = this.tiles_.pop();


        // Return the tile
        return tile;

    }

    TilesLeft() {
        return this.tiles_.length;

    }

    IsEmpty() {
        return !this.TilesLeft();

    }

}
