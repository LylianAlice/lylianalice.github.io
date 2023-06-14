const myPopupT = document.getElementById("myPopupDHT");
const myPopupN = document.getElementById("myPopupHNN");
const myPopup0 = document.getElementById("myPopup0");

function validate() {
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;

	if (username == "" || password == "") {
		alert("Username or Password cannot be empty!");

	}

	else if (username == "danghongtham" && password == "208113") {
		myPopupT.style.display = "block";
		myPopupT.addEventListener("click", () => {
			myPopupT.style.display = "none";
			window.location.href = "dh208113.html";
		});
	}

	else if (username == "huynhngocnga" && password == "1471") {
		myPopupN.style.display = "block";
		myPopupN.addEventListener("click", () => {
			myPopupN.style.display = "none";
			window.location.href = "hn1471.html";
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