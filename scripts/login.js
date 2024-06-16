document.querySelector('.js-login-container-2')
    .classList.remove('login-container-2');

document.querySelector('.js-reset-link')
    .addEventListener('click', () => {
        document.querySelector('.js-login-container-1')
            .remove();

        document.querySelector('.js-login-container-2')
           .classList.add('login-container-2');
            
        document.querySelector('.login-container-2')
            .innerHTML = `
                <h id="loginHeader" class="login-header">RESET</h>
                <div class="input-boxes">
                    <div>
                        <p class="username-paragraph"><label class="username-label" for="">Enter new username : </label><input class="username-input-box js-new-username-input-box" type="text" placeholder="username"></p>
                        <p class="password-paragraph"><label class="password-label" for="">Enter new password : </label><input class="password-input-box js-new-password-input-box" type="password" placeholder="password"></p>
                    </div>

                    <button class="save-button js-save-button" onclick="
                        savePassword();
                    ">Save</button> <a class="back-to-login-link js-back-to-login-link" href="">Back to Login</a>
            `;
    })

function login () {
    inputedUsername = document.querySelector('.js-username-input-box').value;
    inputedPassword = document.querySelector('.js-password-input-box').value;

    console.log(password);

    for (let i = 0; i < password.length; i++) {
        if (inputedUsername === password[i].username) {
            if (inputedPassword === password[i].password) {
                openPage();
            } else {
                document.querySelector('.js-display-invalid-username')
                    .innerHTML = 'Invalid password';
                setTimeout(() => {
                    document.querySelector('.js-display-invalid-username')
                        .innerHTML = '';
                }, 1000);
            }
            break;
        } else {
            document.querySelector('.js-display-invalid-username')
                .innerHTML = 'Invalid username';

            setTimeout(() => {
                document.querySelector('.js-display-invalid-username')
                    .innerHTML = '';
            }, 1000); 
        }
    }
}

loginButtonElement = document.querySelector('.js-login-button');
loginButtonElement.addEventListener('click', () => {
    login();
});

function openPage() {
    window.location.href = 'app.html';
}


function savePassword () {
    newUsername = document.querySelector('.js-new-username-input-box').value;
    newPassword = document.querySelector('.js-new-password-input-box').value;

    password.push({
        id: password.length + 1,
        username: newUsername,
        password: newPassword
    });
    console.log(password);

    localStorage.setItem('password', JSON.stringify(password));
}

localStorage.setItem('password', JSON.stringify(password));

