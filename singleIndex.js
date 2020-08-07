import { singleCallEndpoint } from "./singleCallEndpoint";

console.log("index single");
/// CallEndponit
function handelSubmitMulti(event) {
  const PAnswer = $("#PAnswer").val();
  singleCallEndpoint(PAnswer);
}

$(document).ready(function () {
  /// CallEndpoint
  $("#SubmitBtn").click(handelSubmitMulti);
});
