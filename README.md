**# Frontend Mentor - Age calculator app solution

This is a solution to the [Age calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Table of contents](#table-of-contents)
- [Overview](#overview)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)



## Overview
Age Calculator App is a simple web application that allows users to calculate their age based on their birth date. It provides a user-friendly interface for entering the birth date and displays the age in years, months, and days.

### Screenshot

![Project Screenshot](/assets/images/Project%20preview.jpg)

## My process
I used HTML, CSS, and JavaScript to create the age calculator app. I used the Date object to get the current date and the user's birth date. I used the error handling to validate the user's input. I used the conditional rendering to display the age in years, months, and days. I used the event handling to calculate the age when the user clicks the arrow button.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- JavaScript
- Date object
- Error handling
- Conditional rendering
- Event handling
- Date manipulation




### What I learned
How to use the Date object to get the current date and the user's birth date. How to use the error handling to validate the user's input. How to use the conditional rendering to display the age in years, months, and days. How to use the event handling to calculate the age when the user clicks the arrow button. How to use the date manipulation to get the number of days in the previous month.

Here is the code for the calculateAge function:

```js
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
```

## Author
- Frontend Mentor - [@royal334](https://www.frontendmentor.io/profile/royal334)
- Twitter - [@SamOtuonye](https://www.twitter.com/SamOtuonye)


