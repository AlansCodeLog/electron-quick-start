console.log("preloaded")

original = global.EventTarget.prototype.addEventListener
global.EventTarget.prototype.addEventListener = function () {
	// console.log(arguments)
	if (arguments[0] == "keydown") {
		throw "No keyboard events allowed."
	} else {
		original.apply(this, arguments)
	}
}

