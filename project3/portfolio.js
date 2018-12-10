/* My JS */

// for dropdown menu
$(".menuitem").click(function () {
    $(this).next(".submenu").slideToggle("slow");
});

$("#close").click(function () {
    $("#close").toggle();
    $("#open").toggle();
});

$("#open").click(function () {
    $("#close").toggle();
    $("#open").toggle();
});

//opens page when any part of project is clicked
$("#keypsafe").click(function () {
    window.location.href = "keypSafeProject.html";
});

$("#payday").click(function () {
    window.location.href = "payDayProject.html";
});

$("#untitled").click(function () {
    window.location.href = "untitledProject.html";
});
