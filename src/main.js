const { invoke } = window.__TAURI__.core;

async function greet() {
	// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
	greetMsgEl.textContent = await invoke("greet", { status: "success" });
}

window.addEventListener("DOMContentLoaded", function () {
	var calcRound = 1e5
	document.querySelector("#rem").addEventListener("change", function () {
		document.querySelector("#calc-rem").value = Math.round(Number(document.querySelector("#calc-px").value) / this.value * calcRound) / calcRound
	})
	document.querySelector("#vw").addEventListener("change", function () {
		document.querySelector("#calc-vw").value = Math.round(Number(document.querySelector("#calc-px").value) / this.value * calcRound) / calcRound
	})

	document.querySelector("#calc-rem").addEventListener("change", function () {
		document.querySelector("#calc-px").value = Math.round(Number(document.querySelector("#rem").value) * this.value * calcRound) / calcRound

		document.querySelector("#calc-vw").value = Math.round(Number(document.querySelector("#calc-px").value) / Number(document.querySelector("#vw").value) * calcRound) / calcRound
	})
	document.querySelector("#calc-px").addEventListener("change", function () {
		document.querySelector("#calc-rem").value = Math.round(Number(this.value) / Number(document.querySelector("#rem").value) * calcRound) / calcRound

		document.querySelector("#calc-vw").value = Math.round(Number(this.value) / Number(document.querySelector("#vw").value) * calcRound) / calcRound
	})
	document.querySelector("#calc-vw").addEventListener("change", function () {
		document.querySelector("#calc-px").value = Math.round(Number(document.querySelector("#vw").value) * this.value * calcRound) / calcRound
		document.querySelector("#calc-rem").value = Math.round(Number(document.querySelector("#calc-px").value) / Number(document.querySelector("#rem").value) * calcRound) / calcRound

	})

	Array.prototype.forEach.call(document.querySelectorAll("input[type=number]"), function (input) {
		input.addEventListener("input", function () {
			input.dispatchEvent(new Event("change"))
		})
	})
});
