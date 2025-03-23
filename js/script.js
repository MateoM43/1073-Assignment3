document.addEventListener('DOMContentLoaded', () => {
    // Dynamically add student ID and name
    const studentInfo = document.getElementById('student-info');
    studentInfo.textContent = 'Student ID: 12345, Name: John Doe';

    // Pizza class
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

    // Order button click event
    document.getElementById('order-btn').addEventListener('click', () => {
        const crust = document.getElementById('crust').value;
        const sauce = document.getElementById('sauce').value;
        const toppings = Array.from(document.querySelectorAll('input[name="topping"]:checked')).map(input => input.value);
        const size = document.getElementById('size').value;

        const pizza = new Pizza(crust, sauce, toppings, size);
        document.getElementById('order-summary').textContent = pizza.describe();
    });
});
