/**
 * A sample error class.
 */
class MyError extends Error {
  /**
   * Creates a new instance with the specified message.
   * @param {string} message An error message.
   */
  constructor(message) {
    super(message);
    this.name = 'MyError';
  }
}

/**
 * Illustrates exception handling
 */
function useExc() {
  try {
    thrower(true);
  } catch (err) {
    console.log(err.message);
    console.log(err.name);
    console.log(err.stack);
  }
}

/**
 * Illustrates throwing an exception
 *
 * @param {boolean} doThrow An exception is thrown if <code>doThrow</code>
 *                          is <code>true</code>.
 * @throws {string} Throws an exception if <code>doThrow</code>
 *                  is <code>true</code>.
 */
function thrower(doThrow) {
  if (doThrow) {
    throw new MyError('Something went wrong');
  }
}

useExc();
