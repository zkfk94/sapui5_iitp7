sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/Device",
    "zacqmu1010/model/models",
    "sap/ui/model/json/JSONModel"
],
function (UIComponent, Device, models, JSONModel) {
    "use strict";

    return UIComponent.extend("zacqmu1010.Component", {
        metadata: {
            manifest: "json"
        },

        /**
         * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
         * @public
         * @override
         */
        init: function () {
            // call the base component's init function
            UIComponent.prototype.init.apply(this, arguments);

            // enable routing
            this.getRouter().initialize();

            // set the device model
            this.setModel(models.createDeviceModel(), "device");

            let oModel = new JSONModel({
                filter : {
                    tyear : ''
                },
                filter2 : {
                    prueflos : '',
                    qm_result : ''
                },
                it_data  : [], //top
                it_data2 : [], //left
                it_data3 : [], //right
                
            });

            this.setModel(oModel, "main");
        }
    });
}
);