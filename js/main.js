function main(){
  $(".w3-card-4").hide();
  $(".w3-card-4").fadeIn(1000);

  $(".w3-btn").on("click", function(){
    alert("Working");
    window.href="admin.html"
  });
}

$(document).ready(main);
