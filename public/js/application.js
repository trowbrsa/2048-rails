// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
  var current_game = new GameManager(4, KeyboardInputManager, HTMLActuator, LocalStorageManager);

  $('.save').click(function() {
  var saveGameUrl = "http://localhost:3000/savegame";
  var gameInfo = current_game.storageManager.storage.gameState;
  $.ajax({
    method: "POST",
    url: saveGameUrl,
    data: JSON.parse(gameInfo)
  })
    .done(function() {
      console.log("success");
      console.log(gameInfo)
    })
    .fail(function() {
      console.log("failure");
      console.log(gameInfo);
    });
  });

});
