module.exports = {
	type: "daemon",
	prerequisites: {},

	serviceName: "sampledaemon",
	serviceGroup: "Sample Daemons Group",

	serviceVersion: 1,
	servicePort: 4151,
	waitTimeInMin: 1 * 60,

	"errors": {
		//error codes
	},
	"schema": {
		//jobs config
	}
};
