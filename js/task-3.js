const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

nameInput.addEventListener("input", () => {
  const clearValue = nameInput.value.trim();

  nameOutput.textContent = clearValue || "Anonymous";
});
