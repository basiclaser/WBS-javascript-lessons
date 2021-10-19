console.log("HELLLOOOOOOOOOOO")

// some variables
const email = "dont@forgetmy.email"
let isOnline = true
let unreadMessagesCount = 7
console.log(email, isOnline, unreadMessagesCount)

// string length stuff 
if(email.length < 5) {
    console.log("this email is probably fake")
} else {
    console.log("this email is at least long enough to be a real email")
}
console.log(email.length)

// alerting the user
if(isOnline && unreadMessagesCount>0) {
    // alert("hi! you have " + unreadMessagesCount + " unread messages")
    const message = `hi ${email}! you have ${unreadMessagesCount} unread messages`
    // alert(message)
}

// ternary operator example
const userStatusMessage = isOnline ? "you're online" : "you're offline - check your internet connection"
console.log(userStatusMessage)

// arrays ( lists )
const alphabet = ["a","b","c","d"]
console.log(alphabet)
console.log(alphabet[0], alphabet[1])
alphabet.reverse()
console.log(alphabet[0], alphabet[1])

// for loop
for (let counter = 0; counter < 10; counter++) {
    console.log(counter + " mississippi")
}

// looping over an array
for (let counter = 0; counter < alphabet.length; counter++) {
    console.log(alphabet[counter])
}
console.clear()
// foreaching over an array
alphabet.forEach(function(letter){console.log("letter is "+ letter)})


// function sayHello() {
//     alert("hello you!")
// }

// sayHello()

function sayHelloWithName(name) {
    console.log("hello " + name)
}

sayHelloWithName("chris")
sayHelloWithName("qwdqwd")
sayHelloWithName("123123123")
sayHelloWithName("greger")
sayHelloWithName("dqwdqwd")


function login(email, password) {
    if(email && password ) {
        console.log("LOGGING IN")
    } else {
        alert("please check your login details")
    }
}

login("", "")

//// falsiness and thruthiness
// if(0) {
//     console.log("its true")
// } else {
//     console.log("its false")
// }

// if(undefined) {
//     console.log("its true")
// } else {
//     console.log("its false")
// }

// if("hello") {
//     console.log("its true")
// } else {
//     console.log("its false")
// }

// if(72) {
//     console.log("its true")
// } else {
//     console.log("its false")
// }

// if("") {
//     console.log("its true")
// } else {
//     console.log("its false")
// }



















// const messages = ["hey how are you?", "yeh pretty good :^)", "noice bis spaeter"]
// const body = document.querySelector("body")
// // looping over an array
// for (let counter = 0; counter < messages.length; counter++) {
//     body.insertAdjacentHTML("beforeend",`<li>${messages[counter]}</li>`)
// }
