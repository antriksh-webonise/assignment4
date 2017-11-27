/*var colgatePrice;
var closeUpPrice;
var numColgate;
var numCloseUp;
    function getNormalColgate(){
        if(document.getElementById('r1').checked){
            numColgate = prompt("How many Colgate do you want to buy?");
             if (numColgate != null) {
                      document.getElementById("colgate").innerHTML = "You have " + numColgate + " normal colgate in your cart";
            }
            colgatePrice = numColgate * 10;
            alert(colgatePrice);
            return colgatePrice;
            
        }
    }
    function getOfferColgate(){
        if(document.getElementById('r2').checked){
            numColgate = prompt("How many Colgate do you want to buy?");
                if (numColgate != null) {
                      document.getElementById("colgate").innerHTML = "You have " + numColgate + " offer colgate in your cart";
                }

            
            colgatePrice = parseInt(numColgate/3)*20 + parseInt(numColgate%3)*10;
            alert(colgatePrice);
            return colgatePrice;
        }

    }
    
    function getNumCloseUp(){
        numCloseUp = prompt("How many CloseUp do you want to buy?");
        if(numCloseUp != null){
            document.getElementById("closeup").innerHTML = "You have " + numCloseUp + " close up in your cart";

        }
        closeUpPrice = numCloseUp * 15;
        alert(closeUpPrice);
        return closeUpPrice;
    }

function getTotalPrice(){
    var answer = prompt("Do you want to shop more?");
    if(answer == "yes"){
        location.reload();
    }
    else{

        var totalPrice = colgatePrice + closeUpPrice;
        alert("The total amount is " + totalPrice);
        console.log(totalPrice);
   }
}
*/


var quantity = document.getElementById('units').value;

var normalColgate = {
    getPrice:function(){
    var totalPrice = this.quantity*10;
    alert(totalPrice);
    }
};

var offerColgate = {
    getPrice:function(){
    var totalPrice = parseInt(this.quantity/3)*20 + parseInt(this.quantity%3)*10;
    alert(totalPrice);
}};

var closeUp = {
    getPrice:function(){
    var totalPrice = this.quantity*15;
    alert(totalPrice);
}};

var getQuantity = function(){
    this.getPrice(quantity);
};

var getNormalColgate = getQuantity.bind(normalColgate);
var getOfferColgate = getQuantity.bind(offerColgate);
var getNumCloseUp = getQuantity.bind(closeUp);




var getCost = function() {
    var totalCost = normalColgate.totalPrice + offerColgate.totalPrice + closeUp.totalPrice;
    alert(totalCost);
};

