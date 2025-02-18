document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.querySelector(".login-form");

  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const {
      email: { value: email },
      password: { value: password },
    } = loginForm.elements;

    if (!email.trim() || !password.trim()) {
      alert("All form fields must be filled in");
      return;
    }

    const formData = {
      email: email.trim(),
      password: password.trim(),
    };

    console.log(formData);

    loginForm.reset();
  });
});
