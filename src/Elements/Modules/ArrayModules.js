export class ArrayModules {

    constructor() {

    }

    /**
     * C
     */
    static constructor() {

    }

    static verifyIsArrayModules(array) {
        return typeof array === "object" && array !== undefined && array !== null;
    }
    static pushArrayModules(array, values) {
        array.push(values);
        return array;
    }
}