// Carousel


$(document).ready(function() {

$("#myCarousel").carousel();

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

// Cycles to the previous item

$(".prev-slide").click(function() {
  $("#myCarousel").carousel('prev');
});

// Cycles to the next item

$(".next-slide").click(function() {
  $("#myCarousel").carousel('next');
});


// Search Engine

function myFunction() {
  // Declare variables
  var input, filter, ul, li, a, i;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByClassName();

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByClassName()[0];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}




// Tax function

$('#tableMain').on('click', '.calc', function() {
  var curRow = $(this).closest("tr");
  var col1 = curRow.find(".value2").html();
  var finPrice = col1 * .08;
  alert('$' + finPrice);
});
