import { db, collection, addDoc } from './firebase-config.js';

const form = document.getElementById('contactForm');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    try {
        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            message: document.getElementById('message').value,
            timestamp: new Date()
        };

        // Save to Firebase
        const docRef = await addDoc(collection(db, "submissions"), formData);
        console.log("Document written with ID: ", docRef.id);
        
        // Clear form
        form.reset();
        
        // Show success message
        alert("Form submitted successfully!");
        
    } catch (error) {
        console.error("Error adding document: ", error);
        alert("Error submitting form. Please try again.");
    }
}); 