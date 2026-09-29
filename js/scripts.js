




//current year
const currentYear = new Date().getFullYear();
const yearElement = document.getElementById('current-year');
if (yearElement) {
    yearElement.textContent = currentYear;
}

