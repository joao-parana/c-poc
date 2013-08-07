var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
		// alert('onDeviceReady called');
        app.receivedEvent('deviceready');		
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
		app.doIt();
    },
	doIt: function() {
		// alert('doIt called');
		// setTimeout(getPictureFromCamera, 10);
    }
};

function getPictureFromCamera()  {
	// alert('getPictureFromCamera called');
	navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
		destinationType: Camera.DestinationType.DATA_URL
	});
}
// <img id="myImage_1" style="width: 100px;"></img>
// <img id="myImage_2" style="width: 100px;"></img>
// ...
var myCounterForImages = 1;
function addImageElementToDOM(elem) {
  // alert('addImageElementToDOM called');
  // create a new img element
  // and give it some content
  var textNodeContent = ' ' + myCounterForImages + ' ';
  var imgElemId = "myImage_" + myCounterForImages;
  myCounterForImages++;
  var newDiv = document.createElement("div");
  var newContent = document.createTextNode(textNodeContent);
  newDiv.appendChild(newContent);
  if (elem) {
    newDiv.appendChild(elem);
  }
  var newImg = document.createElement("img");
  newImg.id = imgElemId;
  newDiv.appendChild(newImg);
  // add the newly created element and its content into the DOM
  var myDivConteinerFirstChild = document.getElementById("all-images-header");
  // alert('7');
  // var image = document.getElementById(imgElemId);
  var parentDiv = myDivConteinerFirstChild.parentNode;
  parentDiv.insertBefore(newDiv, myDivConteinerFirstChild);
  // alert('8');
  return imgElemId;
}

function onSuccess(imageData) {
	// alert('onSuccess called');
	var editControl; // one optional checkbox to select image
	var imgElemId = addImageElementToDOM();
	// alert('imgElemId = ' + imgElemId + ", imageData.length=" + imageData.length);
    var image = document.getElementById(imgElemId);
    image.src = "data:image/jpeg;base64," + imageData;
	image.width = 100;
}

function onFail(message) {
    alert('Failed because: ' + message);
}

