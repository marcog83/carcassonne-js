/**
 * Created by marcogobbi on 10/10/2017.
 */
module.exports= class PositionsContainer extends Array {

    ToStringVector() {
        let tmp_vector = [];
        let index = 0;
        for (let i = 0; i < this.length; i++) {
            tmp_vector.push("[" + index++
                + "] " + this[i].ToString());
        }


        return tmp_vector;

    }

    ToString() {
        return this.ToStringVector()

    }
}