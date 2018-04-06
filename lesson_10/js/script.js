class options {

			constructor(height, width, bg, fontSize, textAlign) {
				
				this.height = height;
				this.width = width;
				this.bg = bg;
				this.fontSize = fontSize;
				this.textAlign = textAlign;
			}

			createNewDiv(text) {
				let div = document.createElement('div');
				div.textContent = text;
		
				div.style.cssText =
					`background-color: ${this.bg};
					text-align: ${this.textAlign}; 
					width: ${this.width}; 
					height: ${this.height}; 
					font-size: ${this.fontSize};`
					document.body.appendChild(div);
			}
		}

		let myObj = new options('200px', '200px', 'red', '20px', 'center');
		let newDiv = myObj.createNewDiv('Пример текста');