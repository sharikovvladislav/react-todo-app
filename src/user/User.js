export class User {
  static logIn (token) {
    localStorage.setItem('user', {
      authToken: token,
      isAuthorized: true
    });
  }

  static logOut (token) {
    localStorage.setItem('user', null);
  }

  static isAuthorized () {
    const user = localStorage.getItem('user');
    return user && user.isAuthorized || false;
  }
}