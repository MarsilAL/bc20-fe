import { multiCallEndpoint } from "./multiCallEndpoint";
import { multiChkResult } from "./multiChkResult";

/// CallEndponit
function handelSubmitMulti(event) {
  const gameIDi = $("#gameIDi").val();
  const playerID = $("#playerID").val();
  const PAnswer = $("#PAnswer").val();
  multiCallEndpoint(gameIDi, playerID, PAnswer);
}

/// Check the results
function handelCheckMulti(event) {
  const gameIDi = $("#gameIDi").val();
  multiChkResult(gameIDi);
}

$(document).ready(function () {
  console.log("multi");

  /// CallEndpoint
  $("#SubmitBtn").click(handelSubmitMulti);

  /// chk
  $("#chkBtn").click(handelCheckMulti);
});
