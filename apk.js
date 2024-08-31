document.addEventListener('DOMContentLoaded', () => {
    const monthYear = document.getElementById('month-year');
    const calendarDays = document.getElementById('calendar-days');
    const prevMonthButton = document.getElementById('prev-month');
    const nextMonthButton = document.getElementById('next-month');

    let currentDate = new Date();

    function renderCalendar() {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();

        monthYear.textContent = currentDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });

        const firstDayOfMonth = new Date(year, month, 1).getDay();
        const lastDateOfMonth = new Date(year, month + 1, 0).getDate();
        const lastDayOfLastMonth = month === 0 ? new Date(year - 1, 11, 0).getDate() : new Date(year, month, 0).getDate();

        calendarDays.innerHTML = '';

        for (let i = firstDayOfMonth; i > 0; i--) {
            calendarDays.innerHTML += `<div class="prev-date">${lastDayOfLastMonth - i + 1}</div>`;
        }

        for (let i = 1; i <= lastDateOfMonth; i++) {
            calendarDays.innerHTML += `<div>${i}</div>`;n 
        }

        const daysAfter = 42 - calendarDays.children.length;

        for (let i = 1; i <= daysAfter; i++) {
            calendarDays.innerHTML += `<div class="next-date">${i}</div>`;
        }
    }

    prevMonthButton.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderCalendar();
    });

    nextMonthButton.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalendar();
    });

    renderCalendar();
});
    