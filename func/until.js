import Data from '../data/description';

export default {
    getData() {
        return Data
    },

    getUnit(str1, str2) {
        return Data[str1].data[str2]
    },

    getFrom(str1, str2) {
        return Data[str1].data[str2.split('-to-')[1]]
    },

    getTo(str1, str2) {
        return Data[str1].data[str2.split('-to-')[0]]
    },

    getAll(name) {
        var arr = []
        for (var index in Data[name].data) {
            arr.push(Data[name].data[index])
        }
        return arr
    },

    getPrimary(type) {
        return Data[type].primary
    },

    getAllType() {
        var arr = []
        for (var index in Data) {
            arr.push(Data[index])
        }
        return arr
    },

    getTypeName(str) {
        return Data[str].name
    },

    getType(str) {
        return Data[str]
    }
}
