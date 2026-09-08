// Run everything after the page has fully loaded
document.addEventListener("DOMContentLoaded", function () {
  highlightCurrentPage();
  setupSkillsList();
  setupContactForm();
});


function highlightCurrentPage() {
  const navLinks = document.querySelectorAll("nav a");
  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  navLinks.forEach(function (link) {
    const linkPage = link.getAttribute("href");
    if (linkPage === currentPage) {
      link.classList.add("active-link");
    }
  });
}

function setupSkillsList() {
  const skillItems = document.querySelectorAll(".skills-list li");
  const detailBox = document.getElementById("skillDetail");

  if (skillItems.length === 0 || !detailBox) {
    return;
  }

  const skillInfo = {
    HTML: "I use HTML to structure every page on this site - it's the very first language I learned!",
    CSS: "CSS is how I made this site look the way it does, from the color scheme to the layout.",
    JavaScript: "JavaScript adds the interactive bits you're clicking on right now, like this box.",
    Python: "I use Python for class assignments, small scripts, and command-line games.",
    Java: "I learned Java in my Intro to Object-Oriented Programming course.",
    "Git & GitHub": "I use Git to track changes to my code and GitHub to host and share my projects.",
    React: "I'm currently learning React so I can build more dynamic, component-based websites."
  };

  skillItems.forEach(function (item) {
    item.addEventListener("click", function () {
      const skillName = item.textContent.trim();
      const info = skillInfo[skillName] || "I'm working on learning more about this!";

      detailBox.textContent = skillName + ": " + info;
      detailBox.style.display = "block";
    });
  });
}

function setupContactForm() {
  const form = document.getElementById("contactForm");
  const message = document.getElementById("formMessage");

  if (!form || !message) {
    return;
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // stop the page from reloading

    const name = document.getElementById("nameInput").value.trim();
    const email = document.getElementById("emailInput").value.trim();
    const text = document.getElementById("messageInput").value.trim();

    if (name === "" || email === "" || text === "") {
      message.textContent = "Please fill out every field before sending.";
      message.className = "error-msg";
      message.style.display = "block";
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      message.textContent = "That email address doesn't look quite right.";
      message.className = "error-msg";
      message.style.display = "block";
      return;
    }

    // In a real site, this is where I'd send the data to a server.
    message.textContent = "Thanks " + name + "! Your message has been saved (not really sent yet - " +
      "check back once I add a backend to this site).";
    message.className = "success-msg";
    message.style.display = "block";

    form.reset();
  });
}
