const body = document.body
const form = document.querySelector('form')
const fNameEl = document.getElementById('fname')
const lNameEl = document.getElementById('lname')
const emailEl = document.getElementById('email')

form.addEventListener('submit', function(e){
    e.preventDefault()

    var checkFirstName = checkName(fNameEl, fNameEl)
    var checkLastName = checkName( lNameEl, lNameEl)
    var checkEmailInput = checkEmail( emailEl, emailEl)

    if(checkFirstName===true && checkLastName===true && checkEmailInput===true){
        alert("Successful login")
        form.classList.add('dontDisplay')
        const h1 = document.querySelector('h1')
        h1.innerText = `Welcome back ${fNameEl.value}`
    }

})

function checkEmail(input, element){
    let passes = false
    let condition = false

    if(input.value.length>0){
        console.log("Meets length requirement")
        console.log(typeof input.value)
        condition = true
        successMessage(element)
    }else{
        errorMessage("does not meet the length requirement" ,element)
    }

    const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const checkEmail = regEx.test(input.value)

    if(condition===true && checkEmail=== true){
        passes = true
    }

    return passes
}

function checkName(input, element){
    let passes = false
    let condition = false

    if(input.value.length>0 && input.value.length<15){
        console.log("Meets length requirement")
        console.log(typeof input.value)
        condition = true
        successMessage(element)
    }else{
        errorMessage("does not meet the length requirement" ,element)
    }

    const regEx = /[a-zA-Z]/
    const checkString = regEx.test(input.value)

    if(condition===true && checkString=== true){
        passes = true
    }

    return passes
}

function errorMessage(text,element){
    element.style.bordercolor = 'red'
    console.log(`${element}: ${text}`)
}

function successMessage(element){
    element.style.bordercolor = 'green'
}