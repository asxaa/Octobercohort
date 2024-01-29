
// Use .include to check whether an item is in an array. console.log(array.include['apple'])

const body = document.body
const list = document.querySelector('ul')
const btn = document.querySelector('button')

btn.addEventListener('click' , function(){
    const input = document.getElementById('newCar')

    

    const array = []

    for(let i=0 ;i<list.children.length;i++){
        console.log(list.children[i].innerHTML)
        array.push(list.children[i].innerHTML.toLowerCase())
    }

    if(input.value.length>0){
        if(array.includes(input.value.toLowerCase())){
            alert(`${input.value} is already in the list`)
        }else{
            const newItem = document.createElement('li')
            newItem.innerText = input.value
            list.append(newItem)
    }
    }

   
})