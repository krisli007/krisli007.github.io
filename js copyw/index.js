console.log(this);
function clickMe() {
    console.log(this, '---');

    console.log('clickMe');
    this.data.a = 232323
}
const data = {
    a: 1,
    b: 2
}
window.onload = function(){

    document.getElementById('app').innerHTML = data.a
}