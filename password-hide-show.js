 $(".pass-show").on('click', function() {
    var passwordId = $(this).siblings();
    console.log("passwordId........", passwordId)
    if (passwordId.attr("type") === "password") {
      passwordId.attr("type", "text");
      $(this).find("i").removeClass("fa-eye")
      $(this).find("i").addClass("fa-eye-slash")
    } else {
      passwordId.attr("type", "password");
      $(this).find("i").addClass("fa-eye")
      $(this).find("i").removeClass("fa-eye-slash")
    }
  })
