/*
 * This class provides access to the device SMS functionality.
 * @constructor
 */
function Sms() {

};

/*
 * Sends an SMS message.
 * @param {Integer} number The phone number to send the message to.
 * @param {String} message The contents of the SMS message to send.
 * @param {Function} successCallback The function to call when the SMS message is sent.
 * @param {Function} errorCallback The function to call when there is an error sending the SMS message.
 * @param {PositionOptions} options The options for accessing the GPS location such as timeout and accuracy.
 */
Sms.prototype.send = function(number, message, successCallback, errorCallback, options) {
	try {
		//this.service = new Mojo.Service.Request('palm://com.palm.applicationManager', {
		this.service = navigator.service.Request('palm://com.palm.applicationManager', {
		     method:'launch',
		     parameters:{
		         id:"com.palm.app.messaging",
		         params: {
					composeAddress: number,
					messageText: message
		         }
		     }
		});
		successCallback();
	} catch (ex) {
		errorCallback({ name: "SMSerror", message: ex.name + ": " + ex.message });
	}
};

if (typeof navigator.sms == "undefined") navigator.sms = new Sms();

