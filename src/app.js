import Applet from './modules/Applet';

import LeaveLocation from './modules/triggers/LeaveLocation';
import OnDayAtTime from './modules/triggers/OnDayAtTime';

import SendTextMessage from './modules/actions/SendTextMessage';
import SendEmail from './modules/actions/SendEmail';


console.log(`SCENARIO: When leaving work I want to send a text message to my SO to let them know I'll be home shortly.`);

const leaveLocation = new LeaveLocation('work');
const sendTextMessage = new SendTextMessage('+441234567890', `I'm at #location, will be home shortly`);
let applet = new Applet(leaveLocation, sendTextMessage);
applet.onExecute(payload => {
  console.log(`Executed with the following payload: ${payload}\n\n`);
});
leaveLocation.update('office car park');




console.log(`SCENARIO: Every Monday at 9pm I want to send an email to myself to remind me to put the bins out.`);

const onDayAtTime = new OnDayAtTime('monday', '9pm');
const sendEmail = new SendEmail('root@localhost', `Put the bins out`);
applet = new Applet(onDayAtTime, sendEmail);
applet.onExecute(payload => {
  console.log(`Executed with the following payload: ${payload}\n\n`);
});
applet.onSkip(payload => {
  console.log('Skipped.');
});
onDayAtTime.now();