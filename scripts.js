// Sign Up Form Submission
document.getElementById("signup").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Hide the sign-up form and show the main page
    document.getElementById("signup-form").style.display = "none";
    document.getElementById("main-page").style.display = "block";
});

// File upload simulation
function uploadFile() {
    let fileInput = document.getElementById('fileUpload');
    let file = fileInput.files[0];
    if (file) {
        alert('File ' + file.name + ' is uploaded successfully!');
    } else {
        alert('Please choose a file to upload.');
    }
}
