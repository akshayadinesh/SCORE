var main = function() {
    $('#state_submit').click(function (e) {
        e.preventDefault();
        var state = $("#state option:selected").val();
        if (state != "none") {
            document.getElementById("district1").removeAttribute("hidden");
            document.getElementById("district").removeAttribute("hidden");
            document.getElementById("district_submit").removeAttribute("hidden");
        };

    });
    
    $('#district_submit').click(function (e) {
        e.preventDefault();
        var district = $("#district option:selected").val();
        if (district==="nb") {
            window.location="nb.html";
        }
    });
    
}

$(document).ready(main);