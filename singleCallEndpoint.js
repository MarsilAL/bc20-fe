const jquery = require("jquery");
//
$ = window.$ = window.jQuery = jquery;

function singleCallEndpoint(PAnswer) {
  event.preventDefault();

  // we will send this to the backend

  //// gameID & playerID & decision & requestCheck=0
  var x = document.getElementById("resultP");
  const apiUrl =
    "https://vast-wildwood-04775.herokuapp.com/rps/?" +
    "&decisionPlayer1=" +
    PAnswer;
  $.get({
    url: apiUrl,
    success: function (data, status) {
      console.log("Data: " + data + "\nStatus: " + status);
      var obj = JSON.parse(data);
      x.innerHTML = "  The Winner is:   " + "   " + obj.Winner;
    },
    error: function (XMLHttpRequest, textStatus, errorThrown) {
      alert(textStatus, errorThrown);
    },
  });
}
export { singleCallEndpoint };
