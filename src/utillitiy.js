export function getUserData() {
    const user = sessionStorage.getItem('user');
    return user ? JSON.parse(user) : undefined;
}

export function setUserData(user) {
    sessionStorage.setItem('user', JSON.stringify(user));
}

export function clearUserData() {
    sessionStorage.removeItem('user');
}