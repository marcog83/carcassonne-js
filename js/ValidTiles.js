import FieldSideDecorator from "./FieldSideDecorator";
import RoadSideDecorator from "./RoadSideDecorator";
import CitySideDecorator from "./CitySideDecorator";
import Tile from "./Tile";

export default class ValidTiles {
    constructor() {
        // Create SideDecorators for use in initialization.
        this.field_ = new FieldSideDecorator();
        this.road_ = new RoadSideDecorator();
        this.city_ = new CitySideDecorator();
        this.city_road_field_road_ = new Tile(this.city_, this.road_, this.field_, this.road_);
        this.city_road_field_road_.ConnectedRightToLeft();
        this.city_city_field_city_ = new Tile(this.city_, this.city_, this.field_, this.city_);
        this.city_city_field_city_.ConnectedTopToRight()
            .ConnectedTopToLeft()
            .ConnectedRightToLeft();
        // Add Pennant
        this.city_city_field_city_p_ = new Tile(this.city_city_field_city_);
        // Add Pennant
        this.city_city_city_city_p_ = new Tile(this.city_, this.city_, this.city_, this.city_);
        this.city_city_city_city_p_.ConnectedTopToRight()
            .ConnectedTopToBottom()
            .ConnectedTopToLeft()
            .ConnectedRightToBottom()
            .ConnectedRightToLeft()
            .ConnectedBottomToLeft();

    }

    city_road_field_road_copy() {
        return new Tile(this.city_road_field_road_);
    }

    city_city_field_city_copy() {
        return new Tile(this.city_city_field_city_);

    }

    city_city_field_city_p_copy() {
        return new Tile(this.city_city_field_city_p_);

    }

    city_city_city_city_p_copy() {
        return new Tile(this.city_city_city_city_p_);

    }
}