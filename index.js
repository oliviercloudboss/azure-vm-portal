document.getElementById("vmForm").addEventListener("submit", function (e) {
      e.preventDefault();
      const loader = document.getElementById("loader");
      loader.classList.remove("hidden");

      setTimeout(() => {
        loader.classList.add("hidden");
        alert("Your VM request has been submitted!");
        e.target.reset();
      }, 2000);
    });
