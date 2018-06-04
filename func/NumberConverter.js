export default {
    HEX2DEC: function (HEX) {
        return parseInt(HEX, 16)
    },

    DEC2HEX: function (DEC) {
        return DEC.toString(16)
    },

    BIN2DEC: function (BIN) {
        return parseInt(BIN, 2)
    },

    DEC2BIN: function (DEC) {
        return DEC.toString(2)
    },

    OCT2DEC: function (OCT) {
       return parseInt(OCT, 8)
    },

    DEC2OCT: function (DEC) {
        return DEC.toString(8)
    }
}
