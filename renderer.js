let type = "webview"
function add_elements() {
	for (var i = 0; i < 10; i++) {
		append()
	}
}
function append() {
	let webview
	let place
	webview = document.createElement(type);
	webview.setAttribute('src', "./plugin/index.html");
	// webview.setAttribute('src', "about:blank");
	webview.setAttribute('preload', "./preload.js")
	place = document.querySelector(".plugins")
	place.appendChild(webview)
}

function remove_elements() {
	document.querySelectorAll(type).forEach(el=> {
		el.remove()
	})
}

document.querySelector(".add").addEventListener("mousedown", add_elements)
document.querySelector(".remove").addEventListener("mousedown", remove_elements)