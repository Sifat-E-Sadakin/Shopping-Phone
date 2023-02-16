document.getElementById('btn-plus-p').addEventListener('click', function(){

    let q= increase('q_of_phone');

    newPrice(q);
})
document.getElementById('btn-plus-m').addEventListener('click', function(){

    let q = decrease('q_of_phone');
    newPrice(q);
    
})

function newPrice(q){
    let p = 1219;
    let newPrice = p * q;
    setText('price', newPrice)
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