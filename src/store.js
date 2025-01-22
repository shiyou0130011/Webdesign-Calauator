import { load } from '@tauri-apps/plugin-store'

const store = await load('wdc-store.json', { autoSave: false })
store.get<{ value: number }>('rem-val')
	.then(function(val){
		if(val && val > 0){
			document.querySelector("#rem").value = val 
			document.querySelector("#rem").dispatchEvent(new CustomEvent("change"))
		}
	})
store.get<{ value: number }>('vw-val')
	.then(function(val){
		if(val && val > 0){
			document.querySelector("#vw").value = val 
			document.querySelector("#vw").dispatchEvent(new CustomEvent("change"))
		}
	})


document.querySelector("#rem").addEventListener("change", function(){
	store.set('rem-val', this.value)
		.then(function(){
			return store.save()
		})
})

document.querySelector("#vw").addEventListener("change", function(){
	store.set('vw-val', this.value)
		.then(function(){
			return store.save()
		})
})