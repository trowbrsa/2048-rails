// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
  var currentGame = new GameManager(4, KeyboardInputManager, HTMLActuator, LocalStorageManager);
  var saveGameUrl = "http://localhost:3000/savegame";
  var gameId = window.location.search.slice(5);

  $('#saveGame').click(function() {
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

if (gameId.length > 0) {
  var getUrl = "http://localhost:3000/games/" + gameId;
  $.ajax(getUrl)
    .done(function(data) {
//      currentGame. Something -> (data);
  });
}
  //
  // url = "http://localhost:3000/games/1"
  // $.ajax(url, {
  //     method: "GET"
  //   })
  //   .done(function(data) {
  //
  //
  //
  //   }) // syntax: don't add semicolon until end of every dot statement
  //   .fail(function(){
  //     console.log("FAIL");
  //   });
  // });
