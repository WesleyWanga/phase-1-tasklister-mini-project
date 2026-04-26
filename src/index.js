document.addEventListener("DOMContentLoaded", () => {
  // Select the form
  const form = document.getElementById("create-task-form");

  // Add submit event listener
  form.addEventListener("submit", (event) => {
    // Prevent page reload
    event.preventDefault();

    // Get input value using ID (matches test)
    const taskInput = document.getElementById("new-task-description").value;

    // Prevent empty submissions
    if (taskInput.trim() === "") return;

    // Call function
    buildToDo(taskInput);

    // Clear input field
    form.reset();
  });

  // Function to create and append task
  function buildToDo(task) {
    // Create li element
    const li = document.createElement("li");

    // Add text content
    li.textContent = task;

    // Select task list (must match test)
    const taskList = document.getElementById("tasks");

    // Append li to list
    taskList.appendChild(li);
  }
});