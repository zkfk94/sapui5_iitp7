sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/viz/ui5/data/FlattenedDataset",
    "sap/viz/ui5/controls/common/feeds/FeedItem",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageBox",
    "sap/ui/model/FilterOperator",
    "sap/m/MessageToast",
],
/**
 * @param {typeof sap.ui.core.mvc.Controller} Controller
 */
function (Controller, Filter, FlattenedDataset, FeedItem, JSONModel, MessageBox, FilterOperator, MessageToast) {
    "use strict";

    return Controller.extend("zacqmu1010.controller.View1", {
        onInit: function () {
                    // 검색 연도에서 특정 월 클릭 시 나타나는 Pop Over
                    let oVizFrameSelect = this.oVizFrameSelect = this.getView().byId("vizFrame1");
                    let oPopOver = this.getView().byId("idPopOver");
                    oPopOver.connect(oVizFrameSelect.getVizUid());
                },        
// ------------------------------------------------------------------------------------------------
                // search 버튼 눌러서 조회
                onSearch: function(oEvent){
                    let oModel = this.getView().getModel("main");
                    let oEdit = oModel.setProperty('/editMode', false);
                            
                    let oFilter = oModel.getProperty('/filter');

                    let mFilter = [];
                    for(let sKey in oFilter){
                        let oVal = oFilter[sKey];
                        if(oVal) {
                            mFilter.push(new Filter({
                                path: sKey,
                                operator: FilterOperator.Contains,
                                value1: oVal,
                            }));
                        }
                    }

                    let oModelS = this.getOwnerComponent().getModel();
                    oModelS.read('/ES_TABLE_TOPSet', {
                        filters : mFilter,
                        success : function(oEvent){
                            if(oEvent.results.length > 0){
                                oModel.setProperty('/it_data', oEvent.results);
                            }
                            
                        },
                        error : function(oEvent){
                            MessageBox.show('조회 실패');
                        }
                    })
                
                },

                onPress1 : function(oEvent){
                    let oModel = this.getView().getModel("main");
                    let oData2 = oModel.getProperty("/it_data3");

                    if(oData2.length != 0 ){
                        oModel.setProperty("/it_data3", null)
                    }


                    // let oData = oModel.getProperty('/it_data');
                    let oData = oEvent.mParameters.data[0];

                    let oFilter = oModel.getProperty('/filter2');

                    oFilter.prueflos = oData.data.prueflos;
                    oFilter.qm_result="";

                    let mFilter = [];
                    for(let sKey in oFilter){
                        let oVal = oFilter[sKey];
                        if(oVal) {
                            mFilter.push(new Filter({
                                path: sKey,
                                operator: FilterOperator.Contains,
                                value1: oVal,
                            }));
                        }
                    }

                    let oModelS = this.getOwnerComponent().getModel();
                    oModelS.read('/ES_TABLE_LEFTSet', {
                        filters : mFilter,
                        success : function(oEvent){
                            if(oEvent.results.length > 0){
                                oModel.setProperty('/it_data2', oEvent.results);
                            }
                            
                        },
                        error : function(oEvent){
                            MessageBox.show('조회 실패');
                        }
                    })
                    
                },

                onPress2 : function(oEvent){
                    let oModel = this.getView().getModel("main");
                    let oData = oModel.getProperty('/it_data2');

                    let oFilter = oModel.getProperty('/filter2');

                    if(oEvent.getParameter("data")[0].data.qm_result_t == "합격"){
                        oFilter.qm_result = 1;
                    }else{
                        oFilter.qm_result = 2;
                    }

                    let mFilter = [];
                    for(let sKey in oFilter){
                        let oVal = oFilter[sKey];
                        if(oVal) {
                            mFilter.push(new Filter({
                                path: sKey,
                                operator: FilterOperator.Contains,
                                value1: oVal,
                            }));
                        }
                    }

                    let oModelS = this.getOwnerComponent().getModel();
                    oModelS.read('/ES_TABLE_RIGHTSet', {
                        filters : mFilter,
                        success : function(oEvent){
                            if(oEvent.results.length > 0){
                                oModel.setProperty('/it_data3', oEvent.results);
                            }
                            
                        },
                        error : function(oEvent){
                            MessageBox.show('조회 실패');
                        }
                    })
                    
                }
    });
});

