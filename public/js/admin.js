import { db } from './firebase-config.js';
import { collection, query, orderBy, onSnapshot } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js';

const submissionsContainer = document.getElementById('submissions-container');

// Create query
const q = query(
    collection(db, "submissions"),
    orderBy("timestamp", "desc")
);

// Real-time listener
onSnapshot(q, (querySnapshot) => {
    submissionsContainer.innerHTML = ''; // Clear existing content
    
    querySnapshot.forEach((doc) => {
        const data = doc.data();
        const submissionCard = `
            <div class="submission-card">
                <p><strong>Name:</strong> ${data.name}</p>
                <p><strong>Email:</strong> ${data.email}</p>
                <p><strong>Phone:</strong> ${data.phone}</p>
                <p><strong>Message:</strong> ${data.message}</p>
                <p><strong>Date:</strong> ${data.timestamp.toDate().toLocaleString()}</p>
            </div>
        `;
        submissionsContainer.innerHTML += submissionCard;
    });
}); 