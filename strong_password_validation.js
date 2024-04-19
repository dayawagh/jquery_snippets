var regex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])[a-zA-Z0-9!@#$%^&*(),.?":{}|<>]{8,}$/;

var password = "4assworD123!";

if (regex.test(password)) {
    alert("Password is valid.");
} else {
    alert("Password is invalid.");
}
