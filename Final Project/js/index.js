$(document).ready(function(){

var coll = document.getElementsByClassName("btn");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var section = this.nextElementSibling;
        if (section.style.display === "block") {
            section.style.display = "none";
        } else {
            section.style.display = "block";
        }
    });
}

});