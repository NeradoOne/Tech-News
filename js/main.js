
const floating = document.querySelector('#floating')

const templates = {
    none:'',
    login: `
    <div class='blured'>
        <aside class="popUp">
            <h2>Please login to keep reading</h2>
            <form class="subscribe-form">
                <label for="mail">Email:</label>
                <input required type="email" name="mail" id="mail" placeholder="yourmail@example.com" />
                <label for="mail">Password:</label>
                <input required type="password" name="password" id="password" placeholder="Password" />
                <input class="btn submit" type="submit" value="Login" />
            </form>
        </aside>
    </div>`,
    register: `
    <div class='blured'>
        <aside class="popUp">
            <h2>Please complete the following form to keep reading</h2>
            <form class="subscribe-form" method="post">
                <label for="name">Name:</label>
                <input required="required" type="text" name="name" id="name" placeholder="Type your name" />
                <label for="birth">Birth Date:</label>
                <input type="date" name="birth" id="birth" />
                <label for="mail">Email:</label>
                <input required type="email" name="mail" id="mail" placeholder="yourmail@example.com" />
                <label for="mail">Password:</label>
                <input required type="password" name="password" id="password" placeholder="Password" />
                <div class="tyc">
                    <label for="terms">Do you agree with our <a href="#">terms and conditions</a>?</label>
                    <input required type="checkbox" name="terms" id="terms" />
                </div>
                <input class="btn submit" type="submit" value="Subscribe" />
                <input class="btn reset" type="reset" value="Reset" />
            </form>
        </aside>
    </div>`
}

const render = template => document.querySelector('#floating').innerHTML = templates[template];

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
        console.log('Hola'+ JSON.parse(localStorage.getItem('usuario')).name)
        document.querySelector('#floating').classList.toggle("none")
        render('none')
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
