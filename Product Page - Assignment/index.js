
// header responsive

var moreBtn=document.getElementById('more')

function myFunction() {
    var x = document.getElementById("headerMobile");
    if (x.className === "headerMobile") {
      x.className += " active";
    } else {
      x.className = "headerMobile";
    }
  }


//   quantity functions

var valueOfQuantity=1


function incrementValue() {
    var value = parseInt(document.getElementById("number").value);
    value = isNaN(value) ? 0 : value;
    if (value < 100) {
      value++;
      document.getElementById("number").value = value;
      valueOfQuantity=value
    }
  }
  function decrementValue() {
    var value = parseInt(document.getElementById("number").value);
    value = isNaN(value) ? 0 : value;
    if (value > 1) {
      value--;
      document.getElementById("number").value = value;
      valueOfQuantity=value
    }
  }



//   accordian

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}


// storage
localStorage.setItem("cartValue", 0);

var addToCartBtn=document.getElementById('addtocart')

addToCartBtn.addEventListener("click", function() {
    var previousValue=localStorage.getItem('cartValue')
    var currentValue=parseInt(previousValue) + parseInt(valueOfQuantity)

    localStorage.setItem("cartValue", currentValue);

    document.getElementById("cartValue").innerHTML = currentValue;
  })

