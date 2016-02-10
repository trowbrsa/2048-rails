$(document).ready(function() {
    $(".save").click(function(event) {
  //     event.preventDefault();
       var game = $(this);
       console.log(game);
     });
});

  //      var url = input.parents('form').attr('action');
  // //     console.log(url);
  //
  //     //  $.ajax(url, {
  //     //    type: "POST",
  //     //    sucess: function(data) {
  //     //     console.log("SUCCESS!");
  //     //    console.log(data);
  //     //    $(clubDiv).addClass('chosen');
  //     //    }
  //     //  }
  //     // );
  //
  //      $.ajax(url, {
  //        type: "POST"
  //      })
  //       .done(function(data) {
  //       console.log("Done!");
  //        console.log(data);
  //        $(clubDiv).addClass('chosen');
  //       })
  //       .fail(function() {
  //         console.log("FAIL");
  //         $(clubDiv).addClass('fails');
  //       })
  //       .always(function() {
  //         console.log("ALWAYS");
  //         //will always happen - fail or sucess
  //       });
