function calculateNewSalary() {
    // Get the values from the input fields
    const baseSalary = parseFloat(document.getElementById('base-salary').value);
    const hikePercentage = parseFloat(document.getElementById('hike-percentage').value);

    // Validate inputs
    if (isNaN(baseSalary) || isNaN(hikePercentage) || baseSalary < 0 || hikePercentage < 0) {
        alert("Please enter valid positive numbers for both fields.");
        return;
    }

    // Calculate the new salary
    const hikeAmount = (hikePercentage / 100) * baseSalary;
    const newSalary = baseSalary + hikeAmount;

    // Display the result without a currency symbol
    document.getElementById('result').textContent = `Your new salary is: ${newSalary.toFixed(2)}`;
}
