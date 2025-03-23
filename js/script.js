document.addEventListener('DOMContentLoaded', () => {
    // Dynamically add student ID and name
    const studentInfo = document.getElementById('student-info');
    studentInfo.textContent = 'Student ID: 1264118, Name: Mateo Matti';
    
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
