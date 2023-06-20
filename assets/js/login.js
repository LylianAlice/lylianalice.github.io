const myPopupT = document.getElementById("myPopupDHT");
const myPopupN = document.getElementById("myPopupHNN");
const myPopup0 = document.getElementById("myPopup0");

function validate() {
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;

	if (username == "" || password == "") {
		alert("Username or Password cannot be empty!");

	}

	else if (username == "danghongtham" && CryptoJS.MD5(password) == "d78a57ccfbd3f47ec123ead8351429e3") {
		myPopupT.style.display = "block";
		myPopupT.addEventListener("click", () => {
			myPopupT.style.display = "none";
			window.location.href = "dht.html";
		});
	}

	else if (username == "huynhngocnga" && CryptoJS.MD5(password) == "8b0d268963dd0cfb808aac48a549829f") {
		myPopupN.style.display = "block";
		myPopupN.addEventListener("click", () => {
			myPopupN.style.display = "none";
			window.location.href = "hnn.html";
		});
	}

	else {
		myPopup0.style.display = "block";
		myPopup0.addEventListener("click", () => {
			myPopup0.style.display = "none";
		});
	}
}

document.addEventListener("DOMContentLoaded", function() {
  var content = document.querySelector(".content");
  content.classList.add("visible");

  setTimeout(function() {
    content.style.opacity = "0.9";
    content.style.transform = "translateY(0px)";
  }, 100);
});