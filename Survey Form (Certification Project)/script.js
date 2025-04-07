// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Form validation and enhancement
  const form = document.getElementById("survey-form");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const experienceInput = document.getElementById("number");
  const submitButton = document.getElementById("submit");

  // Function to show form field validation
  function addValidationFeedback() {
    const inputs = form.querySelectorAll("input[required], select[required]");

    inputs.forEach((input) => {
      // Add visual feedback when field is valid/invalid
      input.addEventListener("input", function () {
        if (this.validity.valid) {
          this.style.borderColor = "#34e89e";
        } else {
          this.style.borderColor = "#ff4b4b";
        }
      });
    });
  }

  // Add animation to the submit button
  function enhanceSubmitButton() {
    submitButton.addEventListener("mouseover", function () {
      this.style.transform = "translateY(-3px)";
    });

    submitButton.addEventListener("mouseout", function () {
      this.style.transform = "translateY(0)";
    });

    submitButton.addEventListener("mousedown", function () {
      this.style.transform = "translateY(2px)";
    });
  }

  // Add experience level indicator
  function setupExperienceIndicator() {
    if (experienceInput) {
      const indicator = document.createElement("div");
      indicator.id = "experience-level";
      indicator.style.marginTop = "-15px";
      indicator.style.marginBottom = "20px";
      indicator.style.fontWeight = "bold";

      experienceInput.parentNode.insertBefore(
        indicator,
        experienceInput.nextSibling
      );

      experienceInput.addEventListener("input", function () {
        const years = parseInt(this.value) || 0;
        let level = "";
        let color = "";

        if (years < 1) {
          level = "Beginner";
          color = "#4286f4";
        } else if (years < 3) {
          level = "Junior Developer";
          color = "#42b4f4";
        } else if (years < 5) {
          level = "Mid-level Developer";
          color = "#34e89e";
        } else if (years < 8) {
          level = "Senior Developer";
          color = "#f7b731";
        } else {
          level = "Expert Developer";
          color = "#eb3b5a";
        }

        indicator.textContent = "Experience Level: " + level;
        indicator.style.color = color;
      });

      // Trigger initial value if prefilled
      experienceInput.dispatchEvent(new Event("input"));
    }
  }

  // Add form submission handler with confirmation
  function setupFormSubmission() {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      // Simple validation check
      const requiredFields = form.querySelectorAll("[required]");
      let isValid = true;

      requiredFields.forEach((field) => {
        if (!field.validity.valid) {
          isValid = false;
          field.style.borderColor = "#ff4b4b";
        }
      });

      if (isValid) {
        // Create overlay for submission confirmation
        const overlay = document.createElement("div");
        overlay.style.position = "fixed";
        overlay.style.top = "0";
        overlay.style.left = "0";
        overlay.style.width = "100%";
        overlay.style.height = "100%";
        overlay.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
        overlay.style.display = "flex";
        overlay.style.justifyContent = "center";
        overlay.style.alignItems = "center";
        overlay.style.zIndex = "1000";

        const confirmationBox = document.createElement("div");
        confirmationBox.style.backgroundColor = "#fff";
        confirmationBox.style.padding = "30px";
        confirmationBox.style.borderRadius = "10px";
        confirmationBox.style.textAlign = "center";
        confirmationBox.style.maxWidth = "500px";

        const userName = nameInput.value || "Developer";

        confirmationBox.innerHTML = `
            <h2 style="margin-bottom: 15px;">Thank You, ${userName}!</h2>
            <p style="margin-bottom: 20px;">Your survey response has been successfully submitted.</p>
            <button id="confirm-btn" style="background: linear-gradient(to right, #34e89e, #0f3443); color: white; border: none; border-radius: 20px; padding: 10px 25px; cursor: pointer;">Close</button>
          `;

        overlay.appendChild(confirmationBox);
        document.body.appendChild(overlay);

        document
          .getElementById("confirm-btn")
          .addEventListener("click", function () {
            overlay.remove();
            form.reset();

            // Reset any custom styling
            const inputs = form.querySelectorAll("input, select, textarea");
            inputs.forEach((input) => {
              input.style.borderColor = "";
            });

            if (document.getElementById("experience-level")) {
              document.getElementById("experience-level").textContent = "";
            }
          });

        // Normally here you would submit the form data to a server
        console.log("Form would be submitted to server");
      }
    });
  }

  // Add visual feedback to radio and checkbox selections
  function enhanceSelectionFields() {
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');

    // Function to add a subtle animation when selected
    function addSelectionEffect(elements) {
      elements.forEach((element) => {
        element.addEventListener("change", function () {
          const label = this.nextElementSibling;

          if (this.checked) {
            label.style.transform = "scale(1.05)";
            setTimeout(() => {
              label.style.transform = "scale(1)";
            }, 200);
          }
        });
      });
    }

    addSelectionEffect(radioButtons);
    addSelectionEffect(checkboxes);
  }

  // Add a character counter for the textarea
  function addTextAreaCounter() {
    const textArea = document.getElementById("project");

    if (textArea) {
      const counter = document.createElement("div");
      counter.style.textAlign = "right";
      counter.style.fontSize = "0.8rem";
      counter.style.color = "#666";
      counter.style.marginTop = "-15px";
      counter.style.marginBottom = "20px";

      textArea.parentNode.insertBefore(counter, textArea.nextSibling);

      textArea.addEventListener("input", function () {
        const remaining = 500 - this.value.length;
        counter.textContent = `${this.value.length} characters | ${remaining} remaining`;

        if (remaining < 50) {
          counter.style.color = "#ff4b4b";
        } else {
          counter.style.color = "#666";
        }
      });

      // Trigger for initial value
      textArea.dispatchEvent(new Event("input"));
    }
  }

  // Initialize all enhancements
  addValidationFeedback();
  enhanceSubmitButton();
  setupExperienceIndicator();
  setupFormSubmission();
  enhanceSelectionFields();
  addTextAreaCounter();
});
