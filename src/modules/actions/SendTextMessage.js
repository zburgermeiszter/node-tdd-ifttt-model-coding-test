import Action from '../Action';

class SendTextMessage extends Action {
  constructor(recipient, message) {
    super(location => {
      return console.log(`Message to ${recipient}: ${message.replace('#location', location)}`);
    });
  }
}

export default SendTextMessage;