import { TEMPLATES } from './templates.js'

const floating = document.querySelector('#floating')


const render = template => floating.innerHTML = TEMPLATES[template];

const register = e => {
    localStorage.setItem('usuario',
        JSON.stringify({
            name: e.path[1][0].value ,
            fecha: e.path[1][1].value,
            mail: e.path[1][2].value.toLowerCase() ,
            pass: e.path[1][3].value,
            terms: e.path[1][4].checked
            })
        )
        init()
}

const login = e => {
    e.preventDefault()
    let mailIngresed = e.path[1][0].value.toLowerCase();
    let mailStored = JSON.parse(localStorage.getItem('usuario')).mail
    let passIngresed = e.path[1][1].value;
    let passStored = JSON.parse(localStorage.getItem('usuario')).pass
    if (mailIngresed == mailStored) {
        if (passIngresed == passStored){
        sessionStorage.setItem('locked', false)
        init()
        } else {
            alert('Wrong password entry')
        }
    } else {
        alert('Wrong mail entry')
    }
}

const handleUser = e => {
    e.preventDefault()
    if (localStorage.getItem('usuario')) {
        login(e)
    } else {
        register(e)
    }
}

function init() {
    if (sessionStorage.getItem('locked') == 'false') {
        floating.classList.toggle("none")
        render('none')
        Toastify({
            text: `Welcome ${JSON.parse(localStorage.getItem('usuario')).name}`,
            className: "toasty",
            close: true,
            duration: -1,
            offset: { x: 0, y: '18vh' }
          }).showToast();
    } else {
        if (localStorage.getItem('usuario')) {
            render('login')
            document.querySelector('.submit').addEventListener('click', handleUser)
            
        } else {
            render('register')
            document.querySelector('.submit').addEventListener('click', handleUser)
        }
    }
}
init()
