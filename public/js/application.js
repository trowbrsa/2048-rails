// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
  var currentGame = new GameManager(4, KeyboardInputManager, HTMLActuator, LocalStorageManager);
  var saveGameUrl = "http://localhost:3000/savegame";

  $('.save').click(function() {
    var gameInfo = currentGame.storageManager.storage.gameState;
    $.ajax({
      method: "POST",
      url: saveGameUrl,
      data: JSON.parse(gameInfo)
    })
    .done(function() {
      console.log("success");
      console.log(gameInfo);
    })
    .fail(function() {
      console.log("failure");
      console.log(gameInfo);
    });
  });
});

  // $.ajax(saveGameUrl, {
  //     type: "GET"
  //   })
  //   .done(function(data) {
  //     for (var i = 0; i < data.length; i++) {
  //       $("body").append("p" + data[0]);
  //     }
  //     console.log("DONE");
  //     console.log(data);
  //   }) // syntax: don't add semicolon until end of every dot statement
  //   .fail(function(){
  //     console.log("FAIL");
  //   });
  // });
