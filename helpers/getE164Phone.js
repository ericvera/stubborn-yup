const phone = require('phone')

/**
 * @param {string} phoneNumber
 */
module.exports = phoneNumber => {
  return phone(phoneNumber, 'PRI').length > 0
    ? phone(phoneNumber, 'PRI')[0]
    : phone(phoneNumber)[0]
}
