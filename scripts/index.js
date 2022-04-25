// Store the wallet amount to your local storage with key "amount"
let counts = setInterval(updated);
  let upto =0 


function updated(){
  let amount = document.getElementById("amount").value;

  let count = document.getElementById("wallet")
  count.innerHTML = amount

 
  localStorage.setItem("wallet",JSON.stringify(amount))
 
}