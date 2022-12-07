// get init total
let total = 0

export function getTotal() {
    const getPrice = document.getElementsByClassName("price")
    let price = 0
    let getQuantityBtnText = 1
    for(var i = 0; i < getPrice.length; i++) {
        price = getPrice[i].textContent

        //get rid for the '$' sign
        price = price.slice(1, 3)

        // convert to a number
        price = parseFloat(price)
        
        
        //see if quantity is change
        const getQuantityBtn = document.getElementsByClassName('quantity')
        for(var i = 0; i < getQuantityBtn.length; i++) {
            getQuantityBtn[i].addEventListener('change', e=> {
            getQuantityBtnText = getQuantityBtn[i - 1].value
        })
        }
        // appy new total
        total = total + (price * getQuantityBtnText)
        document.getElementById('total').textContent = '$' + total
    }
}

//update total when quantity is change
export function changeQuantity() {
    const getQuantityBtn = document.getElementsByClassName('quantity')
    for(var i = 0; i < getQuantityBtn.length; i++) {
        getQuantityBtn[i].addEventListener('change', e=> {
            getTotal()
        })
    }
}
