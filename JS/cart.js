// get init total
let total = 0

export function getTotal() {
    const getPrice = document.getElementsByClassName("price")
    for(var i = 0; i < getPrice.length; i++) {
        let price = getPrice[i].textContent

        //get rid for the '$' sign
        price = price.slice(1, 3)

        // convert to a number
        price = parseFloat(price)
        total = total + price
        
        // appy new total
        document.getElementById('total').textContent = '$' + total
    }
}