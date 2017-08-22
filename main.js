
function getDirection() {
	var array = new Uint32Array(1);
	window.crypto.getRandomValues(array);
	return (array[0] % 2 === 0) ? "left" : "right";
}

var arrow = document.getElementById("arrow-container").children[0];


window.addEventListener("click", () => {
	arrow.classList.remove("fa-long-arrow-left", "fa-long-arrow-right") 
	var direction = getDirection();
	(direction === "right") ? arrow.classList.add("fa-long-arrow-right") : arrow.classList.add("fa-long-arrow-left")

});
