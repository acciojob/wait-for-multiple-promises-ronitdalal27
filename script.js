//your JS code here. If required.

// Function to create a promise that resolves after a random time between 1 and 3 seconds
function createRandomPromise(index) {
  const time = Math.floor(Math.random() * 3) + 1; // Random time between 1 and 3 seconds
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ index, time });
    }, time * 1000);
  });
}

// Create an array of promises
const promises = [createRandomPromise(1), createRandomPromise(2), createRandomPromise(3)];

// Record the start time
const startTime = performance.now();

// Wait for all promises to resolve
Promise.all(promises).then((results) => {
  // Calculate total time taken
  const totalTime = (performance.now() - startTime) / 1000;

  // Get reference to the table and remove the loading row
  const table = document.getElementById('promiseTable');
  const loadingRow = document.getElementById('loadingRow');
  table.removeChild(loadingRow);

  // Populate the table with promise results
  results.forEach((result) => {
    const row = document.createElement('tr');
    const cell1 = document.createElement('td');
    const cell2 = document.createElement('td');
    cell1.textContent = `Promise ${result.index}`;
    cell2.textContent = result.time;
    row.appendChild(cell1);
    row.appendChild(cell2);
    table.appendChild(row);
  });

  // Add the total time row
  const totalRow = document.createElement('tr');
  const totalCell1 = document.createElement('td');
  const totalCell2 = document.createElement('td');
  totalCell1.textContent = 'Total';
  totalCell2.textContent = totalTime.toFixed(3); // Format to 3 decimal places
  totalRow.appendChild(totalCell1);
  totalRow.appendChild(totalCell2);
  table.appendChild(totalRow);
});