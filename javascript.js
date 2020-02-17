var webstore = new Vue({
        el: '#app', //css селектор для поиска точки входа в DOM
		data: {
			
		products: {},
        cart: []		
	},       //end data
		computed: {
        cartItemCount: function() { //функция отображения количества товаров в корзине
            return this.cart.length || '';
        },
		},

		created: function () { 
       	axios.get('./products.json')
        .then((response) => {
        this.products = response.data.products;
			});
        },    //JSON


		methods: {
			addToCart(aProduct) {
				this.cart.push(aProduct.id);
			},

			cartCount(id){
				let count = 0;
				for (var i = 0; i < this.cart.length; i++){
					if (this.cart[i]=== id){
						count++;
					}
				}
				return count;
			}
		},


}); // end vue





















// $.getJSON('products.json', function(data) {
//             for (var i = 0; i < data.length; i++) {
//             function isActive (nal){
//                 if (data[i].isActive==true) {nal="В наличии"}
//                 else {nal="Нет в наличии"}
//             return nal;
//             }
//               $('.products_section).cloneNode(true);
//               product_code.innerHTML =  'Код: ' + data[i].code*0.000001;
//               product_status.innerHTML = isActive();

//               // product__link.innerHTML = '<a href="#" class="product__link">' + data[i].title;
//               // goldPrice.innerHTML = '<span class="goldPrice"> </span>' + data[i].priceGold;
//               // retailPrice.innerHTML = '<span class="retailPrice"></span>' + data[i].priceRetail;           
//               // document.addEventListener('DOMContentLoaded',function(){
//               //   var products_section = document.getElementById('.products_section');
//               //   var pg = products_section.querySelector('.products_page');
//               //   var clone = pg.cloneNode(true);
//               //   products_section.appendChild(clone);
//               // });
//             }
// });
