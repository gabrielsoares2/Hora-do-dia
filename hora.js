function horadia() { 

		var agora = new Date()
		var hoje = agora.getHours()
		var min = agora.getMinutes()
		var sec = agora.getSeconds()

		var horas = document.getElementById('hora')
		var foto = document.getElementById('fot')
		var tud = document.getElementById('t')

		var tempoReal = hoje + ':' + min + ':' + sec

		if (hoje >= 0 && hoje < 5) {
			horas.innerHTML = `${tempoReal}`
			tud.style.background = 'gray'
			foto.innerHTML = `<img src="https://th.bing.com/th/id/R.ae9b3047aeda0ad0d4d86a1775392021?rik=LyAPGzS7w5duoQ&pid=ImgRaw&r=0" width = "150px" height = "150px">`
		} else if (hoje >= 5 && hoje < 8) {
			horas.innerHTML = `${tempoReal}`
			tud.style.background = 'lightyellow'
			foto.innerHTML = `<img src="https://sonhos.info/images/amanhecer.jpg" width = "150px" height = "150px">`
		} else if (hoje >= 8 && hoje < 12) {
			horas.innerHTML = `${tempoReal}`
			tud.style.background = 'lightblue'
			foto.innerHTML = `<img src="https://th.bing.com/th/id/R.9fc30e8e7fa1a267bb1587d669a2b6a7?rik=gQzEB4h8PHcCeg&pid=ImgRaw&r=0" width = "150px" height = "150px">`
		} else if (hoje >= 12 && hoje < 18) {
			horas.innerHTML = `${tempoReal}`
			tud.style.background = 'orange'
			foto.innerHTML = `<img src="https://i.ytimg.com/vi/lbggor8oCaM/maxresdefault.jpg" width = "150px" height = "150px">`
		} else if (hoje >= 18) {
			horas.innerHTML = `${tempoReal}`
			tud.style.background = 'lightgrey'
			foto.innerHTML = `<img src="https://th.bing.com/th/id/OIP.Ks4YItfUoDB-RABwP69n1QHaFj?pid=ImgDet&rs=1" width = "150px" height = "150px">`
		}
		
	}
	
setInterval(horadia, 1000)