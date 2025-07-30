document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent form refresh
  const input = document.querySelector('#nameInput').value; // Use ID for specificity
  alert(`Hello, ${input}!`);
});
