import Action from '../Action';

class SendEmail extends Action {
  constructor(recipient, message) {
    super(payload => {
      return console.log(`Message to ${recipient}: ${message}`);
    });
  }
}

export default SendEmail;