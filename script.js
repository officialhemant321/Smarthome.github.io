function toggleMenu() {
  document.getElementById("navMenu").classList.toggle("active");
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function suggestPlan() {
  const budget = Number(document.getElementById("budget").value);
  const result = document.getElementById("planResult");

  if (budget <= 25000) {
    result.innerHTML = "Recommended: Starter Smart Home Package — best for basic lights, fan and voice control.";
  } else if (budget <= 75000) {
    result.innerHTML = "Recommended: Smart Family Package — best for AC control, security camera and family automation.";
  } else {
    result.innerHTML = "Recommended: Premium AI Smart Home — best for full house automation, smart lock, sensors and AI modes.";
  }
}

function calculateROI() {
  const sell = Number(document.getElementById("sellPrice").value);
  const hardware = Number(document.getElementById("hardwareCost").value);
  const install = Number(document.getElementById("installCost").value);
  const output = document.getElementById("roiResult");

  if (!sell || !hardware || !install) {
    output.innerHTML = "Please enter all values.";
    return;
  }

  const totalCost = hardware + install;
  const profit = sell - totalCost;
  const margin = ((profit / sell) * 100).toFixed(2);

  output.innerHTML = `Estimated Profit: ₹${profit.toLocaleString()} | Profit Margin: ${margin}%`;
}

function packageQuiz() {
  const budget = document.getElementById("quizBudget").value;
  const security = document.getElementById("quizSecurity").value;
  const voice = document.getElementById("quizVoice").value;
  const result = document.getElementById("quizResult");

  if (budget === "low") {
    result.innerHTML = "Best Package: Starter Smart Home";
  } else if (budget === "medium" || security === "yes") {
    result.innerHTML = "Best Package: Smart Family Package";
  } else if (budget === "high" && voice === "yes") {
    result.innerHTML = "Best Package: Premium AI Smart Home";
  } else {
    result.innerHTML = "Best Package: Custom Smart Home Plan";
  }
}

function submitForm(event) {
  event.preventDefault();
  document.getElementById("formMessage").innerHTML = "Thank you! Your enquiry has been received. We will contact you soon.";
}
