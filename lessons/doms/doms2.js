const body = document.body
const head = document.head 

var heading1 = document.querySelector("h1")
var heading2 = document.querySelector("h2")

// How to write out an event listener. There are two way of writing out an even listener. One with the function name and one with the function itself. 

/* 

First event listener with the functionname.
element.addEventListener(`event`, changeTheme)

Second event listener with the private function
element.addEventListener(`event`, function(){

})

*/

function changeTheme(){
    body.style.backgroundColor = "green"
    heading2.style.color = "orange"
}

heading2.addEventListener(`click` , function(){

    var name = prompt("what is your name? ")

    if(name.length>0){
        changeTheme()
        console.log(name)

        var nameEl = document.createElement('h1')
        nameEl.innerText = name
        nameEl.style.color = 'pink'

        body.append(nameEl)
    }

})

heading1.addEventListener(`click` , changeTheme)

const form = document.querySelector(' form ')

form.addEventListener('submit', function(e){

    e.preventDefault()


    var name = document.getElementById('name')
    var imgUrl = document.getElementById('img')


    var h1El = document.createElement('h1')
    var imgEl = document.createElement('img')


    h1El.innerText = name.value 
    imgEl.src = imgUrl.value


    var div = document.getElementById("div")


    div.append(imgEl)
    div.append(h1El)


    div.classList.remove('dontDisplay')
    body.classList.add('bright')
})

var themeBtn = document.getElementById('darkMode')

themeBtn.addEventListener('click', function(){
    body.classList.toggle('darkMode')
})