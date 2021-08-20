$(document).ready(function () {
    var currentFloor = 2;
    var floorPath = $(".home-image path");
    var counterUp = $(".counter-up");
    var counterDown = $(".counter-down");
    var modal = $('.modal');
    var modalCloseButton = $('.modal-close-button');
    var currentFlats = 1; 
    var flatsPath = $(".flats path"); 
    var flatsPathItem = $(".flat-item a"); 
    var viewFlats = $(".view-flats");

    floorPath.on("mouseover", function() {
        floorPath.removeClass("current-floor");
        currentFloor = $(this).attr("data-floor");
        $(".counter").text(currentFloor);
    });

    counterUp.on("click", function(){
        if ( currentFloor < 18){
            currentFloor++;
            usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});
            $(".counter").text(usCurrentFloor);
            floorPath.removeClass("current-floor");
            $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
        }
    });

    floorPath.on('click', toggleModal);

    viewFlats.on('click', toggleModal);

    modalCloseButton.on('click', toggleModal);

    counterDown.on('click', function(){
        if (currentFloor > 2) {
            currentFloor--;
            usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});
            $(".counter").text(usCurrentFloor);
            floorPath.removeClass("current-floor");
            $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
        }
    });

    function toggleModal () {
        modal.toggleClass("is-open");
    };

    flatsPath.on('mouseover', function () {
        currentFlats = $(this).attr("data-flats");
        flatsPath.removeClass("current-flats");
        flatsPathItem.removeClass("current-flats-item");
        $(`[data-flats=${currentFlats}]`).toggleClass("current-flats");
        $(`[data-item=${currentFlats}]`).toggleClass("current-flats-item");
    });

    flatsPathItem.on('mouseover', function () {
        currentFlats = $(this).attr("data-item");
        flatsPath.removeClass("current-flats");
        flatsPathItem.removeClass("current-flats-item"); 
        $(`[data-flats=${currentFlats}]`).toggleClass("current-flats"); 
        $(`[data-item=${currentFlats}]`).toggleClass("current-flats-item"); 
    });


});