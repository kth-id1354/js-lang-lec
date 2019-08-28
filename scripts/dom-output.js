'use strict;'

function changeDOM() {
    alert(document.getElementById("changeMe").innerHTML);
    document.getElementById("changeMe").innerHTML = "Now this text changed.";
}
