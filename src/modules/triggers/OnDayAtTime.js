import Trigger from '../Trigger';
import moment from 'moment';

class OnDayAtTime extends Trigger {
  constructor(day, time) {
    const evaluator = now => {
      const dayName = moment(now).format('dddd').toLowerCase();
      const clock12 = moment(now).format('ha');
      return `${dayName}-${clock12}` === `${day}-${time}`;
    };

    super(evaluator);
  }

  now() {
    super.pull(new Date());
  }
}

export default OnDayAtTime;