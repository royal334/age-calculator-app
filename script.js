function calculateAge() {
    // Get input values
    const dayInput = document.getElementById('day').value;
    const monthInput = document.getElementById('month').value;
    const yearInput = document.getElementById('year').value;

    // Clear previous error messages
    document.getElementById('day-error').textContent = '';
    document.getElementById('month-error').textContent = '';
    document.getElementById('year-error').textContent = '';

    // Validate inputs
    if (!isValidDate(dayInput, monthInput, yearInput)) {
        return;
    }

    // Get current date
    const currentDate = new Date();
    const birthDate = new Date(yearInput, monthInput - 1, dayInput); // month is 0-based

    // Calculate differences
    let years = currentDate.getFullYear() - birthDate.getFullYear();
    let months = currentDate.getMonth() - birthDate.getMonth();
    let days = currentDate.getDate() - birthDate.getDate();

    // Adjust for negative days
    if (days < 0) {
        months--;
        // Get the number of days in the previous month
        const lastMonthDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
        days += lastMonthDate.getDate();
    }

    // Adjust for negative months
    if (months < 0) {
        years--;
        months += 12;
    }

    // Update the display
    document.getElementById('dash-year').textContent = years;
    document.getElementById('dash-month').textContent = months;
    document.getElementById('dash-days').textContent = days;
}

function isValidDate(day, month, year) {
    const currentDate = new Date();
    const inputDate = new Date(year, month - 1, day);
    let isValid = true;

    // Check if date is valid
    if (day < 1 || day > 31) {
        document.getElementById('day-error').textContent = 'Must be a valid day';
        isValid = false;
    }

    if (month < 1 || month > 12) {
        document.getElementById('month-error').textContent = 'Must be a valid month';
        isValid = false;
    }

    if (year > currentDate.getFullYear()) {
        document.getElementById('year-error').textContent = 'Must be in the past';
        isValid = false;
    }

    // Check if date actually exists (handles cases like February 31st)
    if (inputDate.getMonth() !== month - 1) {
        document.getElementById('day-error').textContent = 'Must be a valid date';
        isValid = false;
    }

    // Check if date is in the future
    if (inputDate > currentDate) {
        document.getElementById('year-error').textContent = 'Must be in the past';
        isValid = false;
    }

    return isValid;
}


document.addEventListener("keydown", (e) => {
     if (e.key==="Enter"){
          calculateAge()
     }
     else{
          
     }})


