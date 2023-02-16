document.getElementById('btnP').addEventListener('click', function(){

    let q= increase('q_of_case');

    newPriceOfCase(q);
})
document.getElementById('btnM').addEventListener('click', function(){

    let q = decrease('q_of_case');
    newPriceOfCase(q);
    
})

function newPriceOfCase(q){
    let p = 59;
    let newPrice = p * q;
    setText('casePrice', newPrice)
}

function increase(id){
    let q = getInput(id);
    q++;
    setTextInput(id, q);
    return q;

}
function decrease(id){
    let q = getInput(id);
    q--;
    setTextInput(id, q);
    return q;

}