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
});


// Filling Tables

$(document).ready(function() {
  $('a').click(function(event) {
    var id = $(this).parent().parent().attr('id'); //get id of referent tr
    $('input[name="editvalue"]').attr('id', id); // insert id on input submit
  });

  $('#form_edit').submit(function(event) {
    event.preventDefault();
    id = $('input[name="editvalue"]').attr('id'); // get id of input submit
    value1 = $('input[name="value1"]').val(); // get value of input text value1
    value2 = $('input[name="value2"]').val(); // get value of input text value2

    $.ajax({ // Send request
      type: "POST",
      url: 'updaterow.php',
      data: {
        id: id,
        value1: value1,
        value2: value2
      }, //Values 1 and 2 and Id referent
      cache: false,
      success: function(response) {
        if (response == "success") { // updaterow return "success" or echo "success"
          $('#1 td:nth-child(1)').text(value1);
          $('#1 td:nth-child(2)').text(value2);
        }
      },
    });
  });
});
