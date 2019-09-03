/**
 * Keeps track of all guests that have visited.
 */
class GuestRecord {
  /**
   * Constructs a new instance with an empty guest record.
   */
  constructor() {
    this.guests = [];
  }

  /**
   * Adds the specified guest to the guest record.
   *
   * @param {string} name The name of the last guest.
   */
  set currentGuest(name) {
    this.guests.unshift(name);
  }

  /**
   * @return {string} The last guest.
   */
  get lastGuest() {
    if (this.guests.length === 0) {
      return undefined;
    }
    return this.guests[0];
  }
}

const guests = new GuestRecord();
guests.currentGuest = 'stina';
console.log(guests.lastGuest);
guests.currentGuest = 'nisse';
console.log(guests.lastGuest);
