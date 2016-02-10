// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
  var current_game = new GameManager(4, KeyboardInputManager, HTMLActuator, LocalStorageManager);

  $('.save').click(function() {
  var saveGameUrl = "http://localhost:3000/savegame";
  var gameData = current_game.storageManager.storage.gameState;
  $.ajax({
    method: "POST",
    url: saveGameUrl,
    data: JSON.parse(gameData)
  })
    .done(function() {
      console.log("success");
    })
    .fail(function() {
      console.log("failure");
      console.log(gameData)
    });
  });

});
