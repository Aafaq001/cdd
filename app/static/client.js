var el = x => document.getElementById(x);

function showPicker() {
  el("file-input").click();
}

function showPicked(input) {
  el("upload-label").innerHTML = input.files[0].name;
  var reader = new FileReader();
  reader.onload = function(e) {
    el("image-picked").src = e.target.result;
    el("image-picked").className = "";
  };
  reader.readAsDataURL(input.files[0]);
}

function analyze() {
  var uploadFiles = el("file-input").files;
  if (uploadFiles.length !== 1) alert("Please select a file to Diagnose!");

  el("analyze-button").innerHTML = "Diagnosing...";
  var xhr = new XMLHttpRequest();
  var loc = window.location;
  xhr.open("POST", `${loc.protocol}//${loc.hostname}:${loc.port}/analyze`,
    true);
  xhr.onerror = function() {
    alert(xhr.responseText);
  };
  xhr.onload = function(e) {
    if (this.readyState === 4) {

      var response = JSON.parse(e.target.responseText);
      el("result-label").innerHTML = `Result = ${response["result"]}`;
if (("result-label").innerHTML == "Apple___Apple_scab" ) {
  var res = 2;
  $(location).attr('href',"https://drive.google.com/uc?export=download&id=129wKTMHWouy2YJNkr0C42guNezOpgxMR");
}else if (("result-label").innerHTML == "Apple___Cedar_apple_rust") {
  res = 1;
  
}
    }
    el("analyze-button").innerHTML = "Diagnose";
  };

  var fileData = new FormData();
  fileData.append("file", uploadFiles[0]);
  xhr.send(fileData);

function redirect() {
var thing1 = $('p:contains("Apple___Apple_scab")').text();
var thing2 = $('p:contains("Apple___Cedar_apple_rust")').text();  
   if(thing1) {
       $(location).attr('href',"https://drive.google.com/uc?export=download&id=129wKTMHWouy2YJNkr0C42guNezOpgxMR");//JQuery redirect
   }
}
}

function redirect() {
var thing1 = $('p:contains("Apple___Apple_scab")').text();
var thing2 = $('p:contains("Apple___Cedar_apple_rust")').text();  
   if(thing1) {
       $(location).attr('href',"https://drive.google.com/uc?export=download&id=129wKTMHWouy2YJNkr0C42guNezOpgxMR");//JQuery redirect
   }
}
