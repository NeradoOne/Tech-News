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
    e.preventDefault();
    localStorage.getItem('usuario') ? login(e) : register(e);
}

function init() {
    // se verifica que este la sesion iniciada, comprobando el valor de 'locked'
    if (sessionStorage.getItem('locked') == 'false') {
        floating.classList.toggle("none")
        render('none')
        document.querySelector('#floating').classList.toggle('lds-dual-ring');
        setTimeout(() => {
            Toastify({
                text: `Welcome ${JSON.parse(localStorage.getItem('usuario')).name}`,
                className: "toasty",
                close: true,
                duration: -1,
                offset: { x: 0, y: '18vh' }
            }).showToast();
            document.querySelector('#floating').classList.toggle('lds-dual-ring');
        }, 3500);
        
    } else {
        // Al estar bloqueado renderiza el login o register, segun sea el caso 
        if (localStorage.getItem('usuario')) { //siendo que ya existe un usuario registrado en localStorage, renderiza login
            render('login')
            document.querySelector('.submit').addEventListener('click', handleUser)
            
        } else {//en caso que no exista un usuario registrado en localStorage, renderiza register
            render('register')
            document.querySelector('.submit').addEventListener('click', handleUser)
        }
    }
}
setTimeout(() => { init() }, 5000); //Da al usuario una prueba de 5 segundos antes de solicitar identificación
