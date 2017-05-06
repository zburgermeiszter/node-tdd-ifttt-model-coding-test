import Action from '../Action';

class SendEmail extends Action {
  constructor(recipient, message) {
    super(() => console.log(`Message to ${recipient}: ${message}`));
  }
}

export default SendEmail;