const body = document.body
const cards = document.querySelectorAll('.cards')
const container = document.getElementById('container')
const searchValue = container.getElementsByTagName('h1')
const button = document.getElementById('btn')

 button.addEventListener('click', function(){
    const search = document.getElementById('search')

    const array = []
   
    for(var i=0 ;i<searchValue.length;i++){
        console.log(search.value)
        array.push(searchValue[i].innerHTML.toLowerCase());

        let value = cards[i].getElementsByTagName('h1')[0];
        let filterValue = value.innerHTML || value.textContent;

    if(array.includes(search.value.toLowerCase())){
            cards[i].style.display= "";
        }else{
            cards[i].style.display= 'none'
    }

    if(filterValue.toLowerCase().indexOf(search.value.toLowerCase())>-1){
        cards[i].style.display= "";
    }else{
        cards[i].style.display= 'none'
    }
}
})






