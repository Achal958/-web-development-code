// script.js
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('reminder-form');
    const reminderList = document.getElementById('reminder-list');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const billName = document.getElementById('bill-name').value;
        const dueDate = document.getElementById('due-date').value;

        const listItem = document.createElement('li');
        listItem.innerHTML = `<strong>${billName}</strong> - Due on ${dueDate}`;

        reminderList.appendChild(listItem);

        // You can add code here to send reminders or save to a database.
    });
});
