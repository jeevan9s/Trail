document.getElementById("name_form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    var name_input = document.getElementById("name1");
    if (name_input) {
        document.getElementById("submit_name").innerHTML = "<u>" + name_input.value +  "'s</u>";
        $('#myModal').modal('hide'); // Hide the modal
    }
    }
);

// In submissions.html
document.getElementById("submissionForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    var username = document.getElementById("username").value;
    var yourTrail = document.getElementById("your_trail").value;

    // Store form values in localStorage
    localStorage.setItem("submittedName", username);
    localStorage.setItem("submittedTrail", yourTrail);

    // Optionally, redirect to index.html or handle navigation
    window.location.href = "index.html"; // Redirect to index.html after submission
});
