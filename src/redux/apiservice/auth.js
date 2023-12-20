class auth {
  static errorHandler(response) {
    let error = {message: '', status: 'failure'};
    switch (response.status) {
      case 400:
        error.message = 'Bad Request, Try again';
        break;
      case 403 || 401:
        error.message = 'BAD REQUEST';
        break;
      case 503:
        error.message = 'BAD REQUEST';
        break;
      default:
        error.message = 'BAD REQUEST';
    }
    console.log('error', error);
    return error;
  }
}
export default auth;
