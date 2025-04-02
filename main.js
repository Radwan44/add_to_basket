let addProducts = document.getElementsByClassName('addProduct')
addProducts = Array.from(addProducts)

let counter = 0
addProducts.map(addProduct => {
    addProduct.addEventListener('click', (addProduct) => {
        rows = Array.from(document.getElementsByClassName("row"))
        nameOfproduct = addProduct.currentTarget.parentNode.querySelector("span").innerText
        rows.map((row) => {
            row.style.display = "flex"

            nameOfRow = row.querySelector('.text-product')
            amountRow = row.querySelector('.amount')

            if(nameOfRow.innerText == nameOfproduct) {
                counter = amountRow.innerText                        
                ++counter
                amountRow.innerText = counter
                
            }                    
        })
    })
})


function plus() {
    let plusButtons = document.getElementsByClassName("plus")
    plusButtons = Array.from(plusButtons) // change HTMLCOllection to array


    plusButtons.map(plusButton => {
        plusButton.addEventListener('click', (plusButton) => {
            counter = parseInt(plusButton.currentTarget.parentNode.querySelector(`.amount`).innerText)

            amount = plusButton.currentTarget.parentNode.querySelector(`.amount`)            
            amount.innerText = ++counter
            
            return counter
        })
    })
}
plus()

function minus() {
    let minusButtons = document.getElementsByClassName("minus")
    minusButtons = Array.from(minusButtons)
    
    minusButtons.map(minusButton => {
        let amount = minusButton.parentNode.querySelector(`.amount`)
        minusButton.addEventListener('click', () => {
            
            if(counter <= 0) {amount.innerText = 0}
            else amount.innerText = --counter
                                
            return counter
        })
    })

}
minus()