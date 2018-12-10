/* Don't use <script> tags in a linked js file! */

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

