document.getElementById('btnP').addEventListener('click', function(){

    let sub= getText('price');
    let total = getText('casePrice');
    let subTotal = sub + total;
    setText('subtotal', subTotal);
    let tax = subTotal * 0.1;
    let taxInt = parseInt(tax)
    setText('tax', taxInt);
    let gTotal = subTotal+ tax;
    setText('total', gTotal)    
})
document.getElementById('btnM').addEventListener('click', function(){

    let sub= getText('price');
    let total = getText('casePrice');
    let subTotal = sub + total;
    setText('subtotal', subTotal);
    let tax = subTotal * 0.1;
    let taxInt = parseInt(tax)
    setText('tax', taxInt);
    let gTotal = subTotal+ tax;
    setText('total', gTotal)  
    
})
document.getElementById('btn-plus-p').addEventListener('click', function(){
    let sub= getText('price');
    let total = getText('casePrice');
    let subTotal = sub + total;
    setText('subtotal', subTotal);
    let tax = subTotal * 0.1;
    let taxInt = parseInt(tax)
    setText('tax', taxInt);
    let gTotal = subTotal+ tax;
    setText('total', gTotal)  
    
})
document.getElementById('btn-plus-m').addEventListener('click', function(){
    let sub= getText('price');
    let total = getText('casePrice');
    let subTotal = sub + total;
    setText('subtotal', subTotal);
    let tax = subTotal * 0.1;
    let taxInt = parseInt(tax)
    setText('tax', taxInt);
    let gTotal = subTotal+ tax;
    setText('total', gTotal); 
    
})