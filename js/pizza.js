// This defines a pizza class to represent a pizza order
class Pizza {
    // Constructor to initialize pizza properties
    constructor(crust, sauce, toppings, size) {
        this.crust = crust;
        this.sauce = sauce;
        this.toppings = toppings;
        this.size = size;
    }
    // Method to describe the pizza order as a string
    describe() {
        return `You ordered a ${this.size} pizza with ${this.crust}, ${this.sauce} sauce, and toppings: ${this.toppings.join(', ')}.`;
    }
}
