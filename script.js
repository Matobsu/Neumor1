/* NEU'MOR — site interactions */

window.onload = function () {
	// Welcoming message: fades in shortly after the home page loads and
	// stays visible until the visitor closes it.
	var welcomeBanner = document.getElementById("welcome-banner");
	if (welcomeBanner) {
		setTimeout(function () {
			welcomeBanner.classList.add("show");
		}, 400);

		var closeBtn = document.getElementById("banner-close");
		if (closeBtn) {
			closeBtn.onclick = function () {
				welcomeBanner.classList.remove("show");
			};
		}
	}
};

// Personalized greeting: takes the visitor's name and shows a welcome message
function showGreeting(event) {
	event.preventDefault();

	var nameInput = document.getElementById("name-input");
	var name = nameInput.value.trim();
	if (name === "") {
		return false;
	}

	var result = document.getElementById("greeting-result");
	result.innerHTML =
		'<div class="greeting-box">' +
		"<p>Hello, " + name + "! Welcome to the Neu'Mor family.</p>" +
		"<p>We're glad you're here — enjoy browsing our tops and bottoms.</p>" +
		"</div>";

	nameInput.value = "";
	return false;
}

// Collections filter: shows only the products matching the selected category
function filterProducts(event, category) {
	var products = document.querySelectorAll(".product-list li");
	var buttons = document.querySelectorAll(".filter-btn");

	buttons.forEach(function (btn) {
		btn.classList.remove("active");
	});
	event.target.classList.add("active");

	products.forEach(function (product) {
		if (category === "All" || product.getAttribute("data-category") === category) {
			product.style.display = "";
		} else {
			product.style.display = "none";
		}
	});
}

// Contact form: shows a confirmation message on submit
function submitForm(event) {
	event.preventDefault();

	var form = document.getElementById("contact-form");
	var success = document.getElementById("form-success");
	var successText = document.getElementById("success-text");

	var name = form.name.value.trim();
	successText.innerHTML = "Thank you, " + name + ". We'll get back to you shortly.";

	form.style.display = "none";
	success.style.display = "block";

	return false;
}
