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

/*** the HTML for the select menu ***/
/*<h2>&lt;aside&gt; element</h2>
<label for="content-menu">Select a file to load:</label>
<select name="content-menu" id="choose-content">
    <option value="content1.txt">Your Name</option>
    <option value="content2.txt">Course Info</option>
</select>*/

let cont = ("content1.txt")  // sets default verse element
    $("#choose-content").val(cont); // changes menu option to default
    $("#content").load(cont);   // retrieves only default element

    $("#choose-content").change(function() {
        verse = $(this).val();
        $("#content").load(verse); 
    });