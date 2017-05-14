$(document).ready(function(){
  // Tabs
  $(".js-tabs").tabs({ active: 0 });

  // On Tab Click
  $(".js-tabs").on( "tabsactivate", function( event, ui ) {
    // Set Syntax Label
    var syntax = $(ui.newPanel).data("syntax");
    $("#syntax-label").text(syntax);
    // Set Filename
    var file = $(ui.newPanel).data("file");
    $("#filename").text(file);
  });

  $(".tabs").sortable({ axis: "x", revert: 150 });

  // Share Buttons
  setTimeout(function(){
    $('.share-btn-wrap').addClass('share-btn-wrap-in');
  }, 1000);
});
