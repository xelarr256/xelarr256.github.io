

var ArrayCart = [];

$( document ).ready(function() {
	if(window.sessionStorage.length > 0){
		ArrayCart = JSON.parse(sessionStorage.getItem('CartArray'));
	}
    
	
	
});

function HomePage(){
	document.getElementById("links").style.display = 'block';
}

function AddToCart(name, price){
	
	var Quantity = 1;
	var Counter = 0
	for(var i = 0, Length = ArrayCart.length; i < Length; i++){
		
		if(Length > 0){
			if(ArrayCart[i].Name == name){
				Quantity = ArrayCart[i].Quantity;
				ArrayCart[i].Quantity = Quantity + 1;
			}
			else{
				Counter++
			}
			
			if(Counter == Length){
				ArrayCart.push({Name:name,Price:price,Quantity:Quantity }); 
			}
		}
		
	}
	if ((ArrayCart.length == 0))
		ArrayCart.push({Name:name,Price:price,Quantity:Quantity }); 
	
	
	
	var json = JSON.stringify(ArrayCart);
	sessionStorage.setItem('CartArray',json);
	console.log(ArrayCart)
	
}

function CartTable(){
	ArrayCart = JSON.parse(sessionStorage.getItem('CartArray'));
	var TotalPrice = 0;
	var Table = document.getElementById("CartTable");
	
	var index = Table.insertRow(0);
	var Heading1 = index.insertCell(0);
	var Heading2 = index.insertCell(1);
	var Heading3 = index.insertCell(2);
	
	Heading1.innerHTML = "Name"
	Heading2.innerHTML = "Price"
	Heading3.innerHTML = "Quantity"
	
	for(var i = 0, Length = ArrayCart.length; i < Length; i++){
		var row = Table.insertRow(i + 1);
		var Cell1 = row.insertCell(0);
		var Cell2 = row.insertCell(1);
		var Cell3 = row.insertCell(2);
		Cell1.innerHTML = ArrayCart[i].Name;
		
		Cell2.innerHTML = "&pound" + ArrayCart[i].Price;
		Cell3.innerHTML = ArrayCart[i].Quantity;
		TotalPrice = TotalPrice + parseInt(ArrayCart[i].Price);
	}
	document.getElementById("CartPrice").innerHTML = "Total Price = &pound" + TotalPrice;
}

function Clear(){
	ArrayCart = [];
	sessionStorage.clear();
	location.reload(); 
}


function Canvas(Picture){
	console.log(Picture);
	if(Picture != undefined){
		console.log(Picture)
		var Canvas = document.getElementById("CustomiserCanvas");
		var Context = Canvas.getContext("2d");
		
		Context.clearRect(160, 130, 550, 600)
		var img = new Image();
		img.src = 'Assets/Customiser' + Picture + '.png';
		
		img.onload = function(){
			if ((Picture == 'Pic1') || (Picture == 'Pic4') || (Picture == 'Pic6')){
				var width = this.width / 5;
				var height = this.height / 5;
				Context.drawImage(img, 170, 140, width, height);
			}
			else if((Picture == 'Pic2') || (Picture == 'Pic3')){
				var width = this.width / 5;
				var height = this.height / 5;
				Context.drawImage(img, 250, 100, width, height)
			}
			else{
				var width = this.width / 5;
				var height = this.height / 5;
				Context.drawImage(img, 200, 140, width, height)
			}
	}
}
	
	
	
}






