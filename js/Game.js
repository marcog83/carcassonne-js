import TileSet from "./TileSet";
import Bag from "./Bag";
import Surface from "./Surface";
import BlackPlayer from "./player/BlackPlayer";
import RedPlayer from "./player/RedPlayer";
import GreenPlayer from "./player/GreenPlayer";
import {shuffle} from "./utility";

export default class Game {
    constructor() {
        this.surface_ = new Surface();
        this.bag_ = new Bag();
        this.players_ = [];
        // Initially set the current_tile_ to NULL so it is clear that a tile
        // has not already been drawn.
        this.current_tile_;
        // Create the standard TileSet.
        this.tile_set_ = new TileSet();
        // Place the starting tile.
        this.surface_.PlaceStartingTile(this.tile_set_.starting_tile_begin());
// Fill the bag with the TileSet's bagable tiles.
        this.bag_.Fill(this.tile_set_.bagable_tiles());
// Shuffle the bag.
        this.bag_.Shuffle();
        this.SetupPlayers_();

    }

    SetupPlayers_() {
        var player_count = 2;
        this.CreatePlayers_(player_count);
    }

    CreatePlayers_(number_of_players) {
        // Make sure players is empty to start out with
        this.players_ = [];

        // Store all possible players in a temporary vector.
        var open_players = [];
        open_players.push(new BlackPlayer());
        open_players.push(new RedPlayer());
        open_players.push(new GreenPlayer());

        // Shuffle them to randomize the colors.
        open_players=shuffle(open_players);
        // Save the desired number of players into the actual players vector
        for (var i = 0; i < number_of_players; i++) {
            this.players_.push(open_players.pop());

        }
    }

    Play() {
        console.log("Playing Game...");

        while (!(this.bag_.IsEmpty()) /* While the bag is not empty... */) {
            // Cycle through players continuously until there are no more tiles
            var l = this.players_.length;
            for (var i = 0; i < l; i++) {
                if (!(this.bag_.IsEmpty()){
                    console.log(`It is the ${i}'s turn.\n`);


                    // Draw a tile from the bag
                    this.Draw_();

                    // Render any tiles that are already placed as well as displaying
                    // any open positions.
                    this.surface_.Render();

                    // Let player choose a position to place the tile
                    this.PlaceTile_();

                    // Lets the player place a follower if they desire.
                    this.PlaceFollower_();
                }
            }
            // for (std::vector<Player>::iterator it = players_.begin();
            // it != players_.end() && !(bag_.IsEmpty()); ++it) {
            //
            // }
        }
        // console.log("The bag is empty...\n");

    }

    Draw_() {
        // Check to make sure the tile has been played before a new one is drawn.
        if (this.current_tile_ !== null) {
            console.log("A tile has already been drawn but not placed.");
            return;
        }

        // Draw a tile from the bag and place it in current_tile_
        this.current_tile_ = this.bag_.Draw();
        console.log("Player has drawn a " + this.current_tile_);
    }

    PlaceTile_() {
        var choice;//Position
        do {
            // Get open positions and display to player.
            console.log("Choose where to place the tile: \n");


            //std::cout << ;
            //std::cout << surface_.open_positions().ToString() << std::endl;

            // If hint mode is turned on display only open positions where
            // current tile will fit.

            // accept input from user as to where the tile will be placed.
            console.log("(-1 to rotate): ");

            var i;
            //std::cin >> i;


            if (i === -1) {
                this.current_tile_.Rotate();
                continue;
            }

            choice = this.surface_.open_positions().at(i);
            if (this.surface_.IsTileFit(choice, this.current_tile_)) {
                this.surface_.PlaceTile(choice, this.current_tile_);
                break;
            }

        } while (true);

        this.current_tile_ = null;
    }

    PlaceFollower_() {
        console.log("Do you wish to place a follower?(y/n): ");
        // std::cout << "Do you wish to place a follower?(y/n): ";


        var wants_to_place = "";


        if (wants_to_place === "y") {
            return;
        }
        console.log("Which side?(t,r,b,l): ");


        var side_to_place = "";
        if (side_to_place === "t") {

        }

        else if (side_to_place === "r") {

        }

        else if (side_to_place === "b") {

        }

        else if (side_to_place === "l") {

        }

        else {

        }
    }
}
