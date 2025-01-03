// For dropdowns in Double-ended queue
document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        const btn = dropdown.querySelector('.dropdown-btn');
        
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            dropdowns.forEach(d => {
                if (d !== dropdown) {
                    d.classList.remove('active');
                }
            });
            dropdown.classList.toggle('active');
        });
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.dropdown')) {
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const validationBox = document.getElementById("validation-box");

    if (validationBox) {
        // Check if the validation box contains content
        const validationText = validationBox.querySelector("p");
        if (validationText && validationText.textContent.trim() !== "") {
            // Set a timer to hide the validation box after 5 seconds
            setTimeout(() => {
                validationBox.style.display = "none";
            }, 5000); // 5000 milliseconds = 5 seconds
        }
    }
});