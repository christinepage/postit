console.log("loading js file...");
$( document). ready( function() {
    $trash = $( "#trash" );
    $("#save-new").click(function (evt) {
        console.log("Saving a new note...");
        var notetext = $("#new-note-text").val();
        var newdivid = "postit" + $(".postitnote").length;
        var newdiv = '<div id="' + newdivid + '" class="postitnote" class="ui-widget-content">' + notetext + "</div>";
        $("#note-sea").append(newdiv);
        $("#" + newdivid).draggable({
            containment: "#note-sea"
        });
        $("#" + newdivid).show( "scale", { percent: 100 }, 200, function() {} );
        $("#new-note-text").val("");
    });

    $("#save-session").click(function (evt) {
        console.log("Saving session...");

        _.each($(".postitnote"), function(p){
           var pos = $(p).position();
           console.log("Postit: " + $(p).val());
           console.log("Position: " + pos.top + ", " + pos.left);
        });
    });

    $trash.droppable({
      accept: "#note-sea > div",
      activeClass: "ui-state-highlight",
      drop: function( event, ui ) {
        deleteImage( ui.draggable );
      }
    });

    function deleteImage( $item ) {
      $item.fadeOut(function() {
        $item.remove();
      });
    }
});