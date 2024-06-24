const btn = document.querySelectorAll("button")

btn.forEach(function(button, index){

    button.addEventListener("click", function(event){
        var btnItem = event.target
        var product = btnItem.parentElement
        var productImg = product.querySelector("img").src
        var productName = product.querySelector ("h1").textContent
        var productPrice = product.querySelector ("span").textContent
        addcart(productImg, productName, productPrice)
    })
})
function addcart(productImg, productName, productPrice){
    var addtr = document.createElement("tr")
    var cartItem = document.querySelectorAll("tbody tr")
    for(var i = 0; i < cartItem.length; i++){
        var productT = document.querySelectorAll(".title")
        if(productT[i].innerHTML == productName){
            
            alert("Sản phẩm đã có trong giỏ hàng")
            return
        }
    }
    var trcontent = productPrice
    addtr.innerHTML = '<tr><td style = "display: flex; align-items: center;"><img style="width: 70px;" src="' + productImg + '" alt=""><span class = "title">' + productName + '</span></td><td><p><span class = "prices">' + productPrice + '</span><sup>đ</span></p></td><td><input style="width: 30px; outline: none; " type="number" value="1" min ="1"></td><td style="cursor: pointer;"><span class = "cart-delete">Xoa</span></td></tr>'
    var carttable = document.querySelector("tbody")
    // addtr.innerHTML = "<td><img src='" + productImg + "'</td><td>" + productName + "</td><td>" + trcontent + "</td><td><button>Xóa</button></td>"
    // carttable.appendChild(addtr)
   
    carttable.append(addtr)

    carttotal()
    deletecart()
}
//---------------------tinh tien hang----------------//

function carttotal(){
    var cartItem = document.querySelectorAll("tbody tr")
    var totalC = 0
    for(var i = 0; i < cartItem.length; i++){
        var inputValue = cartItem[i].querySelector("input").value
        var productPrice = cartItem[i].querySelector(".prices").textContent
        totalA = inputValue * productPrice*1000
        //totalB = totalA.toLocaleString('de-DE')
        totalC = totalC + totalA 
        



    }
    var TotalA = document.querySelector(".price-total span")
    var cartPrice = document.querySelector(".cart-icon span")
    TotalA.innerHTML = totalC.toLocaleString('de-DE')
    cartPrice.innerHTML = totalC.toLocaleString('de-DE')
    inputchange()
    

}
//---------------------Ham xoa hang----------------//
function deletecart(){
    var cartItem = document.querySelectorAll("tbody tr")
    for(var i = 0; i < cartItem.length; i++){
        var productT = document.querySelectorAll(".cart-delete")
        productT[i].addEventListener("click", function(event){
            var cartDelete = event.target
            var cartitemR = cartDelete.parentElement.parentElement
            cartitemR.remove()
            carttotal()
        })

        
        
    }
}


function inputchange(){
    var cartItem = document.querySelectorAll("tbody tr")
    for(var i = 0; i < cartItem.length; i++){
        var inputValue = cartItem[i].querySelector("input")
        inputValue.addEventListener("change", function(){
            carttotal()
        })
    }
}
const cartbtn = document.querySelector(".fa-times")
const cartshow = document.querySelector(".fa-shopping-bag")
cartshow.addEventListener('click', function(){
    document.querySelector(".Cart").style.right = "0"

})

cartbtn.addEventListener('click', function(){
    document.querySelector(".Cart").style.right = "-100%"
})