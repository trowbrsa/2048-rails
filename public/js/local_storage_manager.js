window.fakeStorage = {
  _data: {},

  setItem: function (id, val) {
    return this._data[id] = String(val);
  },

  getItem: function (id) {
    return this._data.hasOwnProperty(id) ? this._data[id] : undefined;
  },

  removeItem: function (id) {
    return delete this._data[id];
  },

  clear: function () {
    return this._data = {};
  }
};

function LocalStorageManager() {
  this.bestScoreKey     = "bestScore";
  this.gameStateKey     = "gameState";

  var supported = this.localStorageSupported();
  this.storage = supported ? window.localStorage : window.fakeStorage;
}

LocalStorageManager.prototype.localStorageSupported = function () {
  var testKey = "test";
  var storage = window.localStorage;

  try {
    storage.setItem(testKey, "1");
    storage.removeItem(testKey);
    return true;
  } catch (error) {
    return false;
  }
};


// Best score getters/setters
LocalStorageManager.prototype.getBestScore = function () {
  return this.storage.getItem(this.bestScoreKey) || 0;
};

LocalStorageManager.prototype.setBestScore = function (score) {
  this.storage.setItem(this.bestScoreKey, score);
};

// Game state getters/setters and clearing
// LocalStorageManager.prototype.getGameState = function () {
//   var stateJSON = this.storage.getItem(this.gameStateKey);
//   console.log(stateJSON);
//   return stateJSON ? JSON.parse(stateJSON) : null;
// };

LocalStorageManager.prototype.getGameState = function () {

  console.log(stateJSON);
  var stateJSON = {"grid":{"size":4,"cells":[[null,null,null,null],
  [{"position":{"x":1,"y":0},"value":2},null,
  {"position":{"x":1,"y":2},"value":32},
  {"position":{"x":1,"y":3},"value":4}],[{"position":{"x":2,"y":0},"value":2},
  {"position":{"x":2,"y":1},"value":16},{"position":{"x":2,"y":2},
  "value":4},{"position":{"x":2,"y":3},"value":4}],
  [{"position":{"x":3,"y":0},"value":64},
  {"position":{"x":3,"y":1},"value":32},
  {"position":{"x":3,"y":2},"value":8},{"position":{"x":3,"y":3},"value":4}]]},
  "score":2,"over":false,"won":false,"keepPlaying":false};
  console.log(stateJSON);
  return stateJSON;// ? JSON.parse(stateJSON) : null;
};

LocalStorageManager.prototype.setGameState = function (gameState) {
  this.storage.setItem(this.gameStateKey, JSON.stringify(gameState));
};

LocalStorageManager.prototype.clearGameState = function () {
  this.storage.removeItem(this.gameStateKey);
};
