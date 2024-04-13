if (window.addEventListener) {
  window.addEventListener("load", InitiateSpeedDetection, false);
} else if (window.attachEvent) {
  window.attachEvent("onload", InitiateSpeedDetection);
}
var imageAddr =
  "https://www.tranquilmusic.ca/images/cats/Cat2.JPG" + "?n=" + Math.random();
var downloadSize = 5616998;
function ShowProgressMessage(msg) {
  var oProgress = document.getElementById("progress");
  if (oProgress) {
    oProgress.innerHTML = msg;
  }
}
function showResultMessage(msg) {
  document.getElementById("result").innerHTML = msg;
  document.getElementById("progress").innerHTML = "Tốc độ Internet của bạn là";
}
function InitiateSpeedDetection() {
  ShowProgressMessage("Đang tính toán tốc độ Internet");
  window.setTimeout(MeasureConnectionSpeed, 1);
}
function MeasureConnectionSpeed() {
  var startTime, endTime;
  var download = new Image();
  download.onload = function () {
    endTime = new Date().getTime();
    showResults();
  };

  download.onerror = function (err, msg) {
    ShowProgressMessage("Check the internet connection");
  };

  startTime = new Date().getTime();
  var cacheBuster = "?nnn=" + startTime;
  download.src = imageAddr + cacheBuster;

  function showResults() {
    var duration = (endTime - startTime) / 1000;
    var bitsLoaded = downloadSize * 8;
    var speedBps = (bitsLoaded / duration).toFixed(2);
    var speedKbps = (speedBps / 1024).toFixed(2);
    var speedMbps = (speedKbps / 1024).toFixed(2);
    showResultMessage(speedMbps + " Mb/giây\n");
  }
}
