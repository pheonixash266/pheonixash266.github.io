
function individualRoom() {
document.getElementById("information").style.display = "block";
document.getElementById("information1").style.display = "none";
document.getElementById("information2").style.display = "none";
document.getElementById("room1").style.display = "block";
document.getElementById("room2").style.display = "block";
document.getElementById("room4").style.display = "none";
document.getElementById("room3").style.display = "none";
document.getElementById("room6").style.display = "none";
document.getElementById("room5").style.display = "none";
}
function suiteRoom() {
	document.getElementById("information").style.display = "none";
	document.getElementById("information1").style.display = "block";
	document.getElementById("information2").style.display = "none";
	document.getElementById("room1").style.display = "none";
	document.getElementById("room2").style.display = "none";
	document.getElementById("room4").style.display = "block";
	document.getElementById("room3").style.display = "block";
	document.getElementById("room6").style.display = "none";
	document.getElementById("room5").style.display = "none";
}
function familyRoom() {
	document.getElementById("information").style.display = "none";
	document.getElementById("information1").style.display = "none";
	document.getElementById("information2").style.display = "block";
	document.getElementById("room1").style.display = "none";
	document.getElementById("room2").style.display = "none";
	document.getElementById("room4").style.display = "none";
	document.getElementById("room3").style.display = "none";
	document.getElementById("room6").style.display = "block";
	document.getElementById("room5").style.display = "block";
}