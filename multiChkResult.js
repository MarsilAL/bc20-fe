const jquery = require("jquery");
//
$ = window.$ = window.jQuery = jquery;

function multiChkResult(gameIDi) {
  // we will send this to the backend

  var x = document.getElementById("resultP");
  const apiUrl =
    "https://vast-wildwood-04775.herokuapp.com/rps/?gameID=" +
    gameIDi +
    "&requestCheck=1";
  $.get({
    url: apiUrl,
    success: function (data) {
      var obj = JSON.parse(data);
      x.innerHTML =
        "<p class='winner'>  The Winner is:   " +
        "   " +
        obj.Winner +
        "</p>" +
        "<p>The First player chose:  " +
        obj.Spieler1 +
        "</p>" +
        "<p>The Second player chose:  " +
        obj.Spieler2 +
        "</p>";
    },
    error: function (XMLHttpRequest, textStatus, errorThrown) {
      x.innerHTML = "The other player has not answered yet";
    },
  });
}
export { multiChkResult };
