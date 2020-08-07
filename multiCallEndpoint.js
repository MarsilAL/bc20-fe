const jquery = require("jquery");
//
$ = window.$ = window.jQuery = jquery;

function multiCallEndpoint(gameIDi, playerID, PAnswer) {
  event.preventDefault();

  // we will send this to the backend

  //// gameID & playerID & decision & requestCheck=0

  const apiUrl =
    "https://vast-wildwood-04775.herokuapp.com/rps/?gameID=" +
    gameIDi +
    "&playerID=" +
    playerID +
    "&decision=" +
    PAnswer;
  $.get({
    url: apiUrl,
    success: function (data, status) {
      console.log(" call ");
      console.log("Data: " + data + "\nStatus: " + status);
    },
    error: function (XMLHttpRequest, textStatus, errorThrown) {
      alert(textStatus, errorThrown);
    },
  });
}
export { multiCallEndpoint };
