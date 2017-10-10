export default class Surface {
    static get kOriginPosition() {
        return
    }

    constructor() {
        this.tiles_ = [];
        this.open_positions_ = [];
        this.open_positions_.push(Surface.kOriginPosition);
    }

    open_positions() {
        return this.open_positions_;
    }

    IsOpen(position) {
        return this.open_positions_.includes(position);

    }

    IsClosed(position) {
        //todo!!!!
        let end=this.tiles_[this.tiles_.length-1];
        if (this.tiles_[position] == end) {
        // if (this.tiles_.find(position) == this.tiles_.end()) {
            return false;
        }

        return true;
    }

    /**
     * Checks to see if a Tile's top side will fit in with with the surface's
     * surrounding landscape.
     */
    IsTopTerrainFit(in_position, in_tile) {
        var top_it = this.tiles_.find(in_position.GetTopNeighbor());

        const top_tile = top_it.second;

        // If there is no tile in the top position.
        if (top_it == this.tiles_.end()) {
            return true;
        }

        if (in_tile.IsTopTerrainMatch(top_tile)) {
            return true;
        }

        return false;
    }

    /**
     * Checks to see if a Tile's right side will fit in with with the surface's
     * surrounding landscape.
     */
    IsRightTerrainFit(in_position, in_tile) {
        var right_it = this.tiles_.find(in_position.GetRightNeighbor());

        const right_tile = (right_it.second);

        // If there is no tile in the right position.
        if (right_it == this.tiles_.end()) {
            return true;
        }

        if (in_tile.IsRightTerrainMatch(right_tile)) {
            return true;
        }

        return false;
    }

    /**
     * Checks to see if a Tile's bottom side will fit in with with the surface's
     * surrounding landscape.
     */
    IsBottomTerrainFit(in_position, in_tile) {
        var bottom_it = this.tiles_.find(in_position.GetBottomNeighbor());

        const bottom_tile = (bottom_it.second);

        // If there is no tile in the bottom position.
        if (bottom_it == this.tiles_.end()) {
            return true;
        }

        if (in_tile.IsBottomTerrainMatch(bottom_tile)) {
            return true;
        }

        return false;
    }

    /**
     * Checks to see if a Tile's left side will fit in with with the surface's
     * surrounding landscape.
     */
    IsLeftTerrainFit(in_position, in_tile) {
        let left_it = this.tiles_.find(in_position.GetLeftNeighbor());

        const left_tile = (left_it.second);

        // If there is no tile in the left position.
        if (left_it == this.tiles_.end()) {
            return true;
        }

        if (in_tile.IsLeftTerrainMatch(left_tile)) {
            return true;
        }

        return false;
    }

    IsTerrainsMatch(position, tile) {
        if (this.IsTopTerrainFit(position, tile)
            && this.IsRightTerrainFit(position, tile)
            && this.IsBottomTerrainFit(position, tile)
            && this.IsLeftTerrainFit(position, tile)) {

            return true;
        }

        return false;
    }

    IsTileFit(position, tile) {
        // The tile cannot be added to a position that is not open.
        if (!this.IsOpen(position)) {
            console.log("That position already has a tile!\n");
            return false;
        }

        if (!this.IsTerrainsMatch(position, tile)) {
            console.log("Terrain does not match!\n");
            return false;
        }

        return true;
    }

    PlaceTile(position, tile) {
        this.tiles_[position] = tile;

        // Get all new positions that will be created by placing the tile
        var new_open_positions = this.GetNewOpenPositions(position);

        // Add the positions opened up by the placed tile to open_positions_.
        while (new_open_positions.length > 0) {
            this.open_positions_.push(new_open_positions.pop());

        }

// The position is no longer open since the new tile is there so remove it
// from the open_positions_.
//std::remove(open_positions_.begin(), open_positions_.end(), position);
        this.open_positions_ = this.open_positions_.filter(p => {
            return p != position;
        });

        return true;
    }

    PlaceStartingTile(starting_tile) {
        return this.PlaceTile(Surface.kOriginPosition, starting_tile);
    }

    GetNeighborPositions(position) {
        var neighbors = [];

        neighbors.push(position.GetTopNeighbor());
        neighbors.push(position.GetRightNeighbor());
        neighbors.push(position.GetBottomNeighbor());
        neighbors.push(position.GetLeftNeighbor());

        return neighbors;
    }

    GetNewOpenPositions(position) {
        // Put all of the position's neighbor positions into a temporary variable.
        var possible_positions = this.GetNeighborPositions(position);

        // Create a container to put all of the open positions from
        // possible_positions in.
        var open_positions = [];

        // Iterate through possible_positions and add any actual open position
        // to the open_positions container.
        while (possible_positions.length > 0) {
            var check_position = possible_positions.pop();
            if (!this.IsOpen(check_position) && !this.IsClosed(check_position)) {
                open_positions.push(check_position);
            }


        }

        return open_positions;
    }

    Render() {
        console.log("Displaying current board...\n");

        this.tiles_.forEach((e,i,arr) => {
            console.log(`${e.ToString()}`);
            var e1=arr[i+1];
            if(e1){
                console.log(`${e1.ToString()}`);
            }

        });
        console.log("Displaying open positions...\n");
        this.open_positions_.forEach((e)=>{
            console.log(`[${e}] ${e.ToString()}`);
        })

    }
}