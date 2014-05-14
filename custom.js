window.onload = function () {
  document.getElementById("button").onclick = function () {
    try {
      var result = jsonlint.parse(document.getElementById("source").value);
      if (result) {
        document.getElementById("result").innerHTML = "JSON is valid!";
        document.getElementById("result").className = "pass";
        if (document.getElementById("reformat").checked) {
          document.getElementById("source").value = JSON.stringify(result, null, "  ");
        }
      }
    } catch(e) {
      document.getElementById("result").innerHTML = e;
      document.getElementById("result").className = "fail";
    }
  };
}
