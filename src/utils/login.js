const KEY = 'userLogged';

export function isLogged() {
    const user = JSON.parse(localStorage.getItem(KEY));
    return !!user;
}

export function login(email) {
    localStorage.setItem(KEY, JSON.stringify({ email_key: email }));
}