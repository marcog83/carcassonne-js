import SideConnections from "./SideConnections";

export default class Side {
    constructor(src) {
        this.connections_ = new SideConnections();
        if(src){
            this.CopyFrom(src);
        }

    }
    Clone(){
        return 0;
    }
    CopyFrom(rhs) {

    }


    connections() {
        return this.connections_;
    }

    set_connections(connections) {
        this.connections_ = connections;
    }

    ConnectedToMiddle() {
        this.connections_.set_middle(true);

    }

    IsConnectedToMiddle() {
        return this.connections_.middle();

    }

    ToString() {
        return "side with " + this.connections_.ToString();

    }
}