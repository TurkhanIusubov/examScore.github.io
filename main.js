//let btn = document.querySelector('div.btn-zero')
/*
btn.innerHTML = 'gonder'
btn.style.color = 'greenyellow'
btn.style.background = '#ff3838'
btn.style.width = '100px'
btn.style.fontSize = '25px'
btn.style.textAlign = 'center'
btn.style.padding = '8px'
btn.style.borderRadius = '10px'
btn.classList.add('btn','ff')


console.log(btn)

*/
/* 
let listFirst = document.querySelector('ul>li:first-child')
console.log(listFirst.innerHTML)
listFirst.innerHTML = 'bu artiq list 1 olaraq deyistirildi.'
listFirst.style.color = '#fff'

console.log(listFirst.innerHTML)

let listLast = document.querySelector('ul>li:last-child')

console.log(listLast.innerHTML)

listLast.innerHTML = 'home 3 legv edildi'

let ulDom = document.querySelector('ul#ul1')
let liDom = document.createElement('li')

liDom.innerHTML = 'oz duzeltdiyimizdi AyQAaa'

//ulDom.append(liDom)
//console.log(ulDom)

ulDom.prepend(liDom)

let hiWd = document.querySelector('h1#hiWorld')
hiWd.classList.add('class1' , 'new-class', 'hello', 'world')

hiWd.classList.remove('new-class', 'world')

console.log(hiWd)
 */
/* 
//let userName = confirm('silmek istediginize eminmisiniz?')

if(userName == true){
    //alert('emeliyyat ugurla heyata kecirildi')
    document.body.style.background = 'green'
} else if(userName == false){
    //alert('legv edildi')
    //document.body.style.display = 'none'
    document.body.style.background = 'darkred'
}
*/

/* let userName2 = prompt('Enter your name: ')
let age = prompt('Enter your age: ')

if(userName2 && age >= 18){
    console.log(` Mr. ${userName2} ehliyet ala bilirsiniz)))`)
} else if(!userName2){
    console.log('adiniz bulunamadi')
} else if(!(age >=18))(
    console.log('yasiniz bulunamadi ve ya 18 yasindan kucuksunuz/')
)

*/

/* 
let username3 = prompt('Enter your Username')
let name = document.querySelector('#h2test')

name.innerHTML = `${username3 ? username3 : 'yanlis bilgi'}`

*/
let laughing = `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-emoji-laughing" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M12.331 9.5a1 1 0 0 1 0 1A4.998 4.998 0 0 1 8 13a4.998 4.998 0 0 1-4.33-2.5A1 1 0 0 1 4.535 9h6.93a1 1 0 0 1 .866.5zM7 6.5c0 .828-.448 0-1 0s-1 .828-1 0S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 0-1 0s-1 .828-1 0S9.448 5 10 5s1 .672 1 1.5z"/>
</svg>`
let sunGlasses = `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-emoji-sunglasses" viewBox="0 0 16 16">
  <path d="M4.968 9.75a.5.5 0 1 0-.866.5A4.498 4.498 0 0 0 8 12.5a4.5 4.5 0 0 0 3.898-2.25.5.5 0 1 0-.866-.5A3.498 3.498 0 0 1 8 11.5a3.498 3.498 0 0 1-3.032-1.75zM7 5.116V5a1 1 0 0 0-1-1H3.28a1 1 0 0 0-.97 1.243l.311 1.242A2 2 0 0 0 4.561 8H5a2 2 0 0 0 1.994-1.839A2.99 2.99 0 0 1 8 6c.393 0 .74.064 1.006.161A2 2 0 0 0 11 8h.438a2 2 0 0 0 1.94-1.515l.311-1.242A1 1 0 0 0 12.72 4H10a1 1 0 0 0-1 1v.116A4.22 4.22 0 0 0 8 5c-.35 0-.69.04-1 .116z"/>
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-1 0A7 7 0 1 0 1 8a7 7 0 0 0 14 0z"/>
</svg>`

let smile = `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-emoji-smile" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
</svg>`
let neutral = `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-emoji-neutral" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M4 10.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7a.5.5 0 0 0-.5.5zm3-4C7 5.672 6.552 5 6 5s-1 .672-1 1.5S5.448 8 6 8s1-.672 1-1.5zm4 0c0-.828-.448-1.5-1-1.5s-1 .672-1 1.5S9.448 8 10 8s1-.672 1-1.5z"/>
</svg>`
let expressionless = `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-emoji-expressionless" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M4 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm5 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"/>
</svg>`
let frown = `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-emoji-frown" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.498 3.498 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.498 4.498 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
</svg>`
let incorrect = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-file-excel" viewBox="0 0 16 16">
  <path d="M5.18 4.616a.5.5 0 0 1 .704.064L8 7.219l2.116-2.54a.5.5 0 1 1 .768.641L8.651 8l2.233 2.68a.5.5 0 0 1-.768.64L8 8.781l-2.116 2.54a.5.5 0 0 1-.768-.641L7.349 8 5.116 5.32a.5.5 0 0 1 .064-.704z"/>
  <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z"/>
</svg>`
let examScore = parseInt(prompt('Enter your exam score:'));

let writeInfo = document.querySelector('h1#texth1')

let textInfo;

if(examScore>=0 && examScore<=100){
    if(examScore>=90){
        textInfo = `${laughing} <br> A`
    } else if(examScore>=80){
        textInfo = `${sunGlasses} <br> B`
    } else if(examScore>=70){
        textInfo = `${smile} <br> C`
    } else if(examScore>=60){
        textInfo = `${neutral} <br> D`
    } else if(examScore>=51){
        textInfo = `${expressionless} <br> E`
    } else if(examScore<51){
        textInfo = `${frown} <br> F`
    }
    writeInfo.innerHTML = `${textInfo} = ${examScore}`
    document.body.style.background = 'green'
    writeInfo.style.textAlign = 'center'
    writeInfo.classList.add('text1')
} else {
    textInfo = `${incorrect} <br> Incorrect Information`
    writeInfo.innerHTML = `${textInfo}`
    document.body.style.background = 'red'
    writeInfo.style.textAlign = 'center'
    writeInfo.classList.add('text2')
    
}

















