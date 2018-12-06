
let count =0;

$(".menu").click(function () {
    $(this).next(".items").slideToggle("slow");
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
/*<aside>
            <h2>Click a Button to Change the Article</h2>
            <form>
                <input type="radio" name="article" value="article1.txt">Article 1<br>
                <input type="radio" name="article" value="article2.txt">Article 2
            </form>

        </aside>*/

let cont = ("article0.txt")  // sets default verse element
    $("form").val(cont); // changes menu option to default
    $("article").load(cont);   // retrieves only default element

    $("form").change(function() {
        cont = $(this).val();
        $("article").load(cont); 
    });

if(clickme.clicked == true){
    count++;
    /* #count = count; */
}