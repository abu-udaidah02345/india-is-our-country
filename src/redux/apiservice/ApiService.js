import auth from './auth';
import NetInfo from '@react-native-community/netinfo';
import {BASE_URL} from './BashUrl';

export default class PostApi {
  static postRequest = async (url, params) => {
    return new Promise((resolve, reject) => {
      NetInfo.fetch().then(state => {
        if (state.isConnected) {
          fetch(`${BASE_URL}${url}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(params),
          })
            .then(response => response.json())
            .then(jsonResponse => {
              resolve(jsonResponse);
            })
            .catch(error => {
              console.log(error, 'ERROR IS THERE..........................');
              reject(auth.errorHandler(error));
            });
        } else {
          // let error = {messege: global.const.networkError};
          //  reject(error);
          console.log(
            error,
            'ERROR IS THERE BOTTOM LOOP..........................',
          );
        }
      });
    });
  };
}
