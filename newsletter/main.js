/* GETTING IDS OF INPUT AND BUTTON */
const emailInput = document.getElementById("email__address");
const buttonSub = document.querySelector("#btnSub");
const successMessage = document.querySelector(".successMessage");

successMessage.style.display = "none";
// A function to validate for email

const validateInput = function () {
  const successPara = document.querySelector(".p__success");
  // Get the input element

  // Check if the email is not empty
  if (emailInput.value.trim() === "") {
    // Add error style and return false
    emailInput.classList.remove("error__background");
    return false;
  }

  // Check if the email format is valid
  const regexEmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@.*([[-\w]+\.)+[\w]+$/gm;
  if (!regexEmail.test(emailInput.value)) {
    // Add error style and return false
    emailInput.classList.add("error__background");
    return false;
  }

  // Remove error style if it exists
  emailInput.classList.remove("error__background");

  // Remove all white spaces from the entered email
  emailInput.value = emailInput.value.replace(/\s/g, "");
  // Show a successful message and hide any previous messages
  successPara.innerHTML = `A confirmation email has been sent to ${emailInput.value} Please open it
  and click the button inside to confirm your subscription.`;
  return true;
};

/* ADDING AN EVENT LISTENER TO THE BUTTON */
// Assuming you have a button element with id="submitButton"

buttonSub.addEventListener("click", function (event) {
  const errorMessage = document.querySelector(".error__message");
  const mainContainer = document.querySelector(".container");

  // Prevent the default form submission behavior
  event.preventDefault();

  // if the return from validate is false, then do not navigate
  if (!validateInput()) {
    console.log("Validation failed. Form not submitted.");
    errorMessage.style.display = "flex";
  } else {
    // Show loading animation
    errorMessage.style.display = "none";

    setTimeout(() => {
      alert("Form Submitted Successfully!");

      emailInput.value = "";
      mainContainer.style.display = "none";
      successMessage.style.display = "block";
    }, 1000);
  }
});

const btnDismiss = document.querySelector("#dismisssBtn");

btnDismiss.addEventListener("click", function (event) {
  const mainContainer = document.querySelector(".container");

  event.preventDefault();
  successMessage.style.display = "none";
  mainContainer.style.display = "flex";
});
