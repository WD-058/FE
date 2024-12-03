// You can work here or download the template
// Array of 10 random tasks as strings
const tasks = [
  'Complete the project',
  'Attend the meeting',
  'Write a report',
  'Review the code',
  'Fix the bugs',
  'Update the documentation',
  'Plan the next sprint',
  'Conduct user testing',
  'Optimize the performance',
  'Design',
];

// Selecting the buttons and ul element
const addItemBtn = document.getElementById('add-item-btn');
const alertBtn = document.getElementById('alert-btn');
const consoleBtn = document.getElementById('console-btn');
const itemList = document.getElementById('item-list');

// Attach event to add a new element to the ul
addItemBtn.addEventListener('click', () => {
  const newItem = document.createElement('li');
  newItem.textContent = tasks[Math.floor(Math.random() * 10)];
  itemList.appendChild(newItem);
  itemList.scrollTop = itemList.scrollHeight;
});

// Attach event to display an alert
alertBtn.addEventListener('click', () => alert('This is an alert message!'));

// Attach and event to output a message in the console
consoleBtn.addEventListener('click', () => {
  console.log('Button was clicked!');
});
