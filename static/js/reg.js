function validateForm() {
    var field = document.forms["registrationForm"]["name","duration","mobile","email","date"].value;
    if (field == "") {
        alert("Please fill in all information");
        return false;
    };
};