document.addEventListener('DOMContentLoaded', function() {
    // Handle form submissions
    document.getElementById('orderForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const address = document.getElementById('address').value;
        const dish = document.getElementById('dish').value;
        alert(`Order placed:\nName: ${name}\nAddress: ${address}\nDish: ${dish}`);
    });

    document.getElementById('loginForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        alert(`Login successful:\nUsername: ${username}`);
        closeModal('loginModal');
    });

    document.getElementById('signupForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const newUsername = document.getElementById('newUsername').value;
        const email = document.getElementById('email').value;
        const newPassword = document.getElementById('newPassword').value;
        alert(`Sign-up successful:\nUsername: ${newUsername}\nEmail: ${email}`);
        closeModal('signupModal');
    });

    document.getElementById('reviewForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const review = document.getElementById('review').value;
        const reviewsList = document.getElementById('reviewsList');
        const reviewItem = document.createElement('li');
        reviewItem.textContent = review;
        reviewsList.appendChild(reviewItem);
        document.getElementById('review').value = '';
    });

    // Modal functionality
    const loginModal = document.getElementById('loginModal');
    const signupModal = document.getElementById('signupModal');
    const loginLink = document.getElementById('loginLink');
    const signupLink = document.getElementById('signupLink');
    const closeLogin = document.getElementById('closeLogin');
    const closeSignup = document.getElementById('closeSignup');

    loginLink.onclick = function() {
        loginModal.style.display = 'block';
    }

    signupLink.onclick = function() {
        signupModal.style.display = 'block';
    }

    closeLogin.onclick = function() {
        loginModal.style.display = 'none';
    }

    closeSignup.onclick = function() {
        signupModal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == loginModal) {
            loginModal.style.display = 'none';
        } else if (event.target == signupModal) {
            signupModal.style.display = 'none';
        }
    }

    function closeModal(modalId) {
        document.getElementById(modalId).style.display = 'none';
    }
});

