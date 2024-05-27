//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("fname").addEventListener("blur", function() {
        this.value = this.value.toUpperCase();
    });
});