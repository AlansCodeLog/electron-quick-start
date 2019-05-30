console.log("plugin")
console.log(HTMLElement.prototype.addEventListener)

console.log(document.addEventListener)
console.log(window.addEventListener)
document.addEventListener("DOMContentLoaded", () => {
	console.log(document.querySelector(".plugin").addEventListener)
});

document.addEventListener("keydown", event => {
	console.log(event)
})

console.log("here", window.addEventListener)
