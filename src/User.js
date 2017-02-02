export function logIn (user, token) {
  localStorage.setItem('user', JSON.stringify({
    data: user,
    authToken: token,
    isAuthorized: true
  }));
}

export function logOut (token) {
  localStorage.setItem('user', null);
}

export function isAuthorized () {
  const user = getUserData();
  return user && user.isAuthorized || false;
}

export function getUserName () {
  const user = getUserData(),
    userData = user.data;

  return userData && userData.displayName ? userData.displayName : 'Имя не определено :(';
}

function getUserData () {
  const user = JSON.parse(localStorage.getItem('user'));
  return user || null;

}