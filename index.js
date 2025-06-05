document.getElementById("vmForm").addEventListener("submit", async function (e) {
  e.preventDefault();
  const loader = document.getElementById("loader");
  const responseBox = document.getElementById("response");

  // Show loader
  loader.classList.remove("hidden");
  responseBox.innerText = "";

  // Collect form values
  const firstName = e.target.firstName.value.trim();
  const lastName = e.target.lastName.value.trim();
  const email = e.target.email.value.trim();

  try {
    const res = await fetch("https://selfservice-webapp.azurewebsites.net/api/request-vm-access", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ firstName, lastName, email })
    });

    const message = await res.text();
    loader.classList.add("hidden");
    responseBox.innerText = message;

    if (res.ok) {
      e.target.reset();
    } else {
      console.error("Submission failed:", message);
    }
  } catch (error) {
    loader.classList.add("hidden");
    responseBox.innerText = "Something went wrong. Please try again.";
    console.error("Request error:", error);
  }
});
