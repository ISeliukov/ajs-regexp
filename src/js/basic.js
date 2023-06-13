export default class Validator {
  static validateUsername(userName) {
    if (typeof userName !== 'string') {
      return false;
    }
    const regexps = [
      /[a-zA-Z0-9-_]*$/,
      /^[^\d-_].*[^\d-_]$/,
      /\d{4,}/,
    ];
    return regexps[0].test(userName) && regexps[1].test(userName) && !regexps[2].test(userName);
  }
}
