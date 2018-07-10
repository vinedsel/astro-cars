// Carousel


$(document).ready(function() {

  $("#myCarousel").carousel();

  // Cycles the carousel to a particular frame

  $(".single-item").slick(function() {
    $("#myCarousel").carousel(0);
  });

  $(".single-item").slick(function() {
    $("#myCarousel").carousel(1);
  });

  $(".single-item").slick(function() {
    $("#myCarousel").carousel(2);
  });

  $(".single-item").slick(function() {
    $("#myCarousel").carousel(3);
  });

  $(".single-item").slick(function() {
    $("#myCarousel").carousel(4);
  });

  $(".slide-six").slick(function() {
    $("#myCarousel").carousel(5);
  });

  $(".single-item").slick(function() {
    $("#myCarousel").carousel(6);
  });

  $(".single-item").slick(function() {
    $("#myCarousel").carousel(7);
  });
});

// Cycles to the previous item

$(".prev-slide").slick(function() {
  $("#myCarousel").carousel('prev');
});

// Cycles to the next item

$(".next-slide").slick(function() {
  $("#myCarousel").carousel('next');
});


// Search Engine

function myFunction() {
  // Declare variables
  var input, filter, ul, li, a, i;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementsByClassName("carousel-inner");
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

// assign additional var that will take the final price and add the tax to it...

$('#tableMain').on('slick', '.calc', function() {
  var curRow = $(this).closest("tr");
  var col1 = parseInt(curRow.find(".value2").html());
  var finPrice = col1 * .08;
  var combPrice = col1 + finPrice;
  alert('$' + combPrice + '.00');
});
