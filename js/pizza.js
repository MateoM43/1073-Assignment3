class Pizza {
    constructor(crust, sauce, toppings, size) {
        this.crust = crust;
        this.sauce = sauce;
        this.toppings = toppings;
        this.size = size;
    }

    describe() {
        return `You ordered a ${this.size} pizza with ${this.crust}, ${this.sauce} sauce, and toppings: ${this.toppings.join(', ')}.`;
    }
}
