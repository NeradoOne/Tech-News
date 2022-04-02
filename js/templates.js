export const TEMPLATES = {
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
