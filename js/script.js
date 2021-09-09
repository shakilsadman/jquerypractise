$(document).ready(function(){

    //dragable
    $( "#draggable" ).draggable();
    //accordian
    $( "#accordion" ).accordion({
        collapsible: true
      });

    // Dropable
    $( "#draggable2" ).draggable();
    $( "#droppable" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
          .find( "p" )
            .html( "Goal!" );
      }
    });
    //Resizable  
    $( "#resizable" ).resizable();
    //Selectable
    $( "#selectable" ).selectable();
    //Sortable
    $( "#sortable" ).sortable();
    $( "#sortable" ).disableSelection();
    //Menu
    $( "#menu" ).menu();
    $( "#menu2" ).menu({
      items: "> :not(.ui-widget-header)"
    });
    $( "#menu3" ).menu();
    //Progress Bar
    $( "#progressbar" ).progressbar({
      value: 37
    });
    //Tabs
    $( "#tabs" ).tabs();
    //colorpicker
    function hexFromRGB(r, g, b) {
      var hex = [
        r.toString( 16 ),
        g.toString( 16 ),
        b.toString( 16 )
      ];
      $.each( hex, function( nr, val ) {
        if ( val.length === 1 ) {
          hex[ nr ] = "0" + val;
        }
      });
      return hex.join( "" ).toUpperCase();
    }
    function refreshSwatch() {
      var red = $( "#red" ).slider( "value" ),
        green = $( "#green" ).slider( "value" ),
        blue = $( "#blue" ).slider( "value" ),
        hex = hexFromRGB( red, green, blue );
      $( "#swatch" ).css( "background-color", "#" + hex );
    }
 
    $( "#red, #green, #blue" ).slider({
      orientation: "horizontal",
      range: "min",
      max: 255,
      value: 127,
      slide: refreshSwatch,
      change: refreshSwatch
    });
    $( "#red" ).slider( "value", 255 );
    $( "#green" ).slider( "value", 140 );
    $( "#blue" ).slider( "value", 60 );
    // Range Slider
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 500,
      values: [ 75, 300 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
      " - $" + $( "#slider-range" ).slider( "values", 1 ) );
      //Multi Slider
      $( "#master" ).slider({
        value: 60,
        orientation: "horizontal",
        range: "min",
        animate: true
      });
      // setup graphic EQ
      $( "#eq > span" ).each(function() {
        // read initial values from markup and remove that
        var value = parseInt( $( this ).text(), 10 );
        $( this ).empty().slider({
          value: value,
          range: "min",
          animate: true,
          orientation: "vertical"
        });
      });
     //Select Menu
     $( "#speed" ).selectmenu();
 
    $( "#files" ).selectmenu();
 
    $( "#number" )
      .selectmenu()
      .selectmenu( "menuWidget" )
        .addClass( "overflow" );
 
    $( "#salutation" ).selectmenu();
    //Color Animate
    var state = true;
    $( "#button" ).on( "click", function() {
      if ( state ) {
        $( "#effect" ).animate({
          backgroundColor: "#aa0000",
          color: "#fff",
          width: 500
        }, 1000 );
      } else {
        $( "#effect" ).animate({
          backgroundColor: "#fff",
          color: "#000",
          width: 240
        }, 1000 );
      }
      state = !state;
    });
})