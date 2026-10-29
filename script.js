
const buyButton = document.getElementById("buyBtn");

buyButton.addEventListener("click", function () {
    alert(
        "Product: SoundWave Wireless Headphones\n" +
        "Price: ₹2,999\n" +
        "Thank you for choosing SoundWave!"
    );
});

// Smooth scrolling for navigation links
document.querySelectorAll("nav a").forEach(function (link) {
    link.addEventListener("click", function (event) {
        const targetId = this.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            event.preventDefault();

            targetSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});
