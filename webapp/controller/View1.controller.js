sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel"
], (Controller,MessageToast,JSONModel) => {
    "use strict";

    return Controller.extend("nwproductsdata.controller.View1", {
        onInit() {
          //  MessageToast.show('Welcome to SAPUI5 course');
          // Below code will call the Northwind Odata service
          var omodel = this.getOwnerComponent().getModel();
          debugger;
          omodel.read('/Products',{
            success : (odata)=>{ debugger; 
                var json1 = new JSONModel();
                json1.setData(odata.results);
                this.getView().setModel(json1,'prod');
            },
            error : (err)=> { debugger; }
          });
        },
        _greetMe : function() {
           MessageToast.show('You clicked me!!!!'); 
        }
    });
});