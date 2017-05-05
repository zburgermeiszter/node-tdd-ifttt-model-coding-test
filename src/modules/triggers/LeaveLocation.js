import Trigger from '../Trigger';

class LeaveLocation extends Trigger {
  constructor(base) {
    super(location => location !== base);
  }

  update(location) {
    super.pull(location);
  }
}

export default LeaveLocation;