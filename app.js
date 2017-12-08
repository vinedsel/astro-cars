// Carousel

$(document).ready(function() {

  // Cycles to the previous item

  $(".prev-slide").click(function() {
    $("#myCarousel").carousel('prev');
  });

  // Cycles to the next item

  $(".next-slide").click(function() {
    $("#myCarousel").carousel('next');
  });

  // Cycles the carousel to a particular frame

  $(".slide-one").click(function() {
    $("#myCarousel").carousel(0);
  });

  $(".slide-two").click(function() {
    $("#myCarousel").carousel(1);
  });

  $(".slide-three").click(function() {
    $("#myCarousel").carousel(2);
  });

  $(".slide-four").click(function() {
    $("#myCarousel").carousel(3);
  });

  $(".slide-five").click(function() {
    $("#myCarousel").carousel(4);
  });

  $(".slide-six").click(function() {
    $("#myCarousel").carousel(5);
  });

  $(".slide-seven").click(function() {
    $("#myCarousel").carousel(6);
  });

  $(".slide-eight").click(function() {
    $("#myCarousel").carousel(7);
  });
});


// Filling Tables

function makeTable(container, data) {
  var table = $("<table/>").addClass('CSSTableGenerator');
  $.each(data, function(rowIndex, r) {
    var row = $("<tr/>");
    $.each(r, function(colIndex, c) {
      row.append($("<t" + (rowIndex == 0 ? "h" : "d") + "/>").text(c));
    });
    table.append(row);
  });
  return container.append(table);

  $(document).ready(function() {
    var data = [
      ["City 1", "City 2", "City 3"], //headers
      ["New York", "LA", "Seattle"],
      ["Paris", "Milan", "Rome"],
      ["Pittsburg", "Wichita", "Boise"]
    ]
    var cityTable = makeTable($(document.body), data);
  });
