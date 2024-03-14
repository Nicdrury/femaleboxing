document.addEventListener("DOMContentLoaded", function() {
    var h3Elements = document.querySelectorAll("h3");

    h3Elements.forEach(function(h3Element) {
        h3Element.addEventListener("click", function() {
            var year = this.id.split("-")[1]; // Extract the year from the id
            var paragraph = document.getElementById("p-" + year);

            // Toggle the visibility of the paragraph
            if (paragraph.style.display === "none") {
                paragraph.style.display = "block";
            } else {
                paragraph.style.display = "none";
            }
        });
    });
});