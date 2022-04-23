/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require(["zacqmu1010/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});
