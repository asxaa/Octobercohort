// Exercise 1 
// Create a page that contains 1 html element, The javascript page must then create another source html element must make changes to theme and also must have one form of usere interaction via a prompt

const body = document.body
const head = document.head 

var heading1 = document.querySelector("h1")

function changeTheme(){
    body.style.backgroundColor = "lightBlue"
    heading1.style.fontStyle = "italic"
}

 //heading1.addEventListener("mouseenter" ,changeTheme())

var smallPara = document.createElement("p")
smallPara = " The color blue is the color of the ocean and the sky; it often symbolizes serenity, stability, inspiration, or wisdom. It can be a calming color, and symbolize reliability. In the Catholic Church, the Virgin Mary is most often depicted wearing blue, to symbolize being ''full of grace'' by divine favor."

body.append(smallPara)

heading1.addEventListener("click" , function(){
    
    var age = prompt(" How old are you? ")


    if(age>18){
        changeTheme()
        console.log(age)

        var ageEl = document.createElement('h3')
        ageEl.innerText = ` You are ${age} years old`

        body.append(ageEl)

    }else{
        alert( "You are not old enough for this site")
    }
})