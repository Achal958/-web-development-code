const reminderForm = document.getElementById('reminder-form');
const reminderText = document.getElementById('reminder-text');
const reminderDate = document.getElementById('reminder-date');
const remindersContainer = document.getElementById('reminders');

function addReminder() {
    const text = reminderText.value;
    const date = reminderDate.value;

    if (text && date) {
        // Send the data to the backend for storage
        // You would typically make an API call here (e.g., using fetch or Axios)
        // and add the reminder to the database on the server.

        // For now, we will just display the reminder on the frontend.
        displayReminder(text, date);

        // Clear the form fields
        reminderText.value = '';
        reminderDate.value = '';
    }
}

function displayReminder(text, date) {
    const reminderItem = document.createElement('div');
    reminderItem.innerHTML = `<strong>${text}</strong> - Due on ${date}`;
    remindersContainer.appendChild(reminderItem);
}
