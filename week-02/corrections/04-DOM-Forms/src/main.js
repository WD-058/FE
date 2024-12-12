// Select the form element and the output element
const form = document.getElementById("contact-form");
const outputParaghraph = document.getElementById("output");
const name = document.getElementById("name");

// Function to handle form submission
form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Get the values of the form inputs
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // Check if the inputs are empty
  if (name === "" || email === "" || message === "") {
    outputParaghraph.textContent = "Please fill in all the fields.";
    outputParaghraph.classList.remove("bg-green-500");
    outputParaghraph.classList.add("bg-red-500");
    return;
  }

  // Display the values in the output element
  // Creating the list items
  const template = `<ul>
                        <li>Name: ${name}</li>
                        <li>Email: ${email}</li>
                        <li>Message: ${message}</li> 
                    </ul>`;
  // Adding the template to the output element
  outputParaghraph.innerHTML = template;
  outputParaghraph.classList.remove("bg-red-500");
  outputParaghraph.classList.add("bg-green-500");

  // clear the form fields
  form.reset();
});

// Example with create elements

const displayElements = (name, email, message) => {
    const ul = document.createElement("ul");
    const liArray = [name, email, message];
    liArray.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item;
        ul.appendChild(li);
    });
    
}