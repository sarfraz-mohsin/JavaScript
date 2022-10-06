let buyDiv = document.getElementById('buy-div')

buyDiv.innerHTML = "<button onclick= 'buy()'>" + 'buy btn' + "</button>"

function buy(){
    buyDiv.innerHTML += "<p>Thank you for buying!</p>"
}