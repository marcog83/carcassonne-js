import ValidTiles from "./ValidTiles"

export default class TileSet {
    constructor() {
        this.bagable_tiles_ = [];
        this.valid_tiles_ = new ValidTiles();
        this.starting_tile_begin_ = this.valid_tiles_.city_road_field_road_copy();
        // TODO:Make a function that pushes a certain number of tiles into the tile
//	 set void push_n(Tile**, int);
        this.bagable_tiles_.push(this.valid_tiles_.city_city_field_city_copy());
        this.bagable_tiles_.push(this.valid_tiles_.city_city_field_city_copy());
        this.bagable_tiles_.push(this.valid_tiles_.city_city_field_city_copy());

        this.bagable_tiles_.push(this.valid_tiles_.city_city_field_city_p_copy());

        this.bagable_tiles_.push(this.valid_tiles_.city_city_city_city_p_copy());
    }

    starting_tile_begin() {
        return this.starting_tile_begin_;
    }

    bagable_tiles() {
        return this.bagable_tiles_;
    }
}