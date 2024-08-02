document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            alert(`You clicked on ${event.target.textContent}`);
        });
    });
});

 // JavaScript for Latest Updates Section
 const prevButton = document.getElementById('prev-updates');
 const nextButton = document.getElementById('next-updates');
 const updatesWrapper = document.getElementById('updates-wrapper');
 const updateCards = document.querySelectorAll('.update-card');

 let currentIndex = 0;

 function showUpdates() {
     updateCards.forEach((card, index) => {
         card.style.display = (index >= currentIndex && index < currentIndex + 3) ? 'block' : 'none';
     });
 }

 prevButton.addEventListener('click', () => {
     if (currentIndex > 0) {
         currentIndex -= 3;
         showUpdates();
     }
 });

 nextButton.addEventListener('click', () => {
     if (currentIndex < updateCards.length - 3) {
         currentIndex += 3;
         showUpdates();
     }
 });

 // Initial call to display updates
 showUpdates();

 // JavaScript for How It Works Section
 const prevButtonHowItWorks = document.getElementById('prev-how-it-works');
 const nextButtonHowItWorks = document.getElementById('next-how-it-works');
 const howItWorksWrapper = document.getElementById('how-it-works-wrapper');
 const howItWorksCards = document.querySelectorAll('.how-it-works-card');

 let currentIndexHowItWorks = 0;

 function showHowItWorks() {
     howItWorksCards.forEach((card, index) => {
         card.style.display = (index >= currentIndexHowItWorks && index < currentIndexHowItWorks + 3) ? 'block' : 'none';
     });
 }

 prevButtonHowItWorks.addEventListener('click', () => {
     if (currentIndexHowItWorks > 0) {
         currentIndexHowItWorks -= 3;
         showHowItWorks();
     }
 });

 nextButtonHowItWorks.addEventListener('click', () => {
     if (currentIndexHowItWorks < howItWorksCards.length - 3) {
         currentIndexHowItWorks += 3;
         showHowItWorks();
     }
 });

 // Initial call to display updates
 showHowItWorks();

//  report section

document.addEventListener('DOMContentLoaded', function () {
    const lostItemForm = document.querySelector('#lostItemForm');
    const foundItemForm = document.querySelector('#foundItemForm');

    lostItemForm.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Lost item reported successfully!');
    });

    foundItemForm.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Found item reported successfully!');
    });
});

// claim missing
document.addEventListener('DOMContentLoaded', function () {
    const claimItemForm = document.querySelector('#claimItemForm');

    claimItemForm.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Claim request submitted successfully!');
    });
});

//feedback 
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('feedback-form');
    const successMessage = document.getElementById('success-message');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Simple form validation
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const feedback = document.getElementById('feedback').value.trim();
        
        if (name && email && feedback) {
            // Simulate form submission
            // You can send the data to your server here using fetch or XMLHttpRequest

            // Show success message
            successMessage.classList.remove('d-none');
            
            // Reset form fields
            form.reset();
            
            // Optionally, add additional functionality like hiding the message after a few seconds
            setTimeout(() => {
                successMessage.classList.add('d-none');
            }, 5000);
        } else {
            // Handle form validation errors
            alert('Please fill out all fields.');
        }
    });
});

// contact us page
document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.querySelector('#contactForm');

    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Thank you for reaching out to us!');
        contactForm.reset();
    });
});
