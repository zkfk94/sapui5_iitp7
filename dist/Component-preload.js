//@ui5-bundle zacqmu1010/Component-preload.js
jQuery.sap.registerPreloadedModules({
"version":"2.0",
"modules":{
	"zacqmu1010/Component.js":function(){sap.ui.define(["sap/ui/core/UIComponent","sap/ui/Device","zacqmu1010/model/models","sap/ui/model/json/JSONModel"],function(e,t,i,a){"use strict";return e.extend("zacqmu1010.Component",{metadata:{manifest:"json"},init:function(){e.prototype.init.apply(this,arguments);this.getRouter().initialize();this.setModel(i.createDeviceModel(),"device");let t=new a({filter:{tyear:""},filter2:{prueflos:"",qm_result:""},it_data:[],it_data2:[],it_data3:[]});this.setModel(t,"main")}})});
},
	"zacqmu1010/controller/View1.controller.js":function(){sap.ui.define(["sap/ui/core/mvc/Controller","sap/ui/model/Filter","sap/viz/ui5/data/FlattenedDataset","sap/viz/ui5/controls/common/feeds/FeedItem","sap/ui/model/json/JSONModel","sap/m/MessageBox","sap/ui/model/FilterOperator","sap/m/MessageToast"],function(e,t,r,s,o,i,l,n){"use strict";return e.extend("zacqmu1010.controller.View1",{onInit:function(){let e=this.oVizFrameSelect=this.getView().byId("vizFrame1");let t=this.getView().byId("idPopOver");t.connect(e.getVizUid())},onSearch:function(e){let r=this.getView().getModel("main");let s=r.setProperty("/editMode",false);let o=r.getProperty("/filter");let n=[];for(let e in o){let r=o[e];if(r){n.push(new t({path:e,operator:l.Contains,value1:r}))}}let a=this.getOwnerComponent().getModel();a.read("/ES_TABLE_TOPSet",{filters:n,success:function(e){if(e.results.length>0){r.setProperty("/it_data",e.results)}},error:function(e){i.show("조회 실패")}})},onPress1:function(e){let r=this.getView().getModel("main");let s=r.getProperty("/it_data3");if(s.length!=0){r.setProperty("/it_data3",null)}let o=e.mParameters.data[0];let n=r.getProperty("/filter2");n.prueflos=o.data.prueflos;n.qm_result="";let a=[];for(let e in n){let r=n[e];if(r){a.push(new t({path:e,operator:l.Contains,value1:r}))}}let u=this.getOwnerComponent().getModel();u.read("/ES_TABLE_LEFTSet",{filters:a,success:function(e){if(e.results.length>0){r.setProperty("/it_data2",e.results)}},error:function(e){i.show("조회 실패")}})},onPress2:function(e){let r=this.getView().getModel("main");let s=r.getProperty("/it_data2");let o=r.getProperty("/filter2");if(e.getParameter("data")[0].data.qm_result_t=="합격"){o.qm_result=1}else{o.qm_result=2}let n=[];for(let e in o){let r=o[e];if(r){n.push(new t({path:e,operator:l.Contains,value1:r}))}}let a=this.getOwnerComponent().getModel();a.read("/ES_TABLE_RIGHTSet",{filters:n,success:function(e){if(e.results.length>0){r.setProperty("/it_data3",e.results)}},error:function(e){i.show("조회 실패")}})}})});
},
	"zacqmu1010/i18n/i18n.properties":'# This is the resource bundle for zacqmu1010\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=\\ud3d0\\uae30\\uc728 \\uc870\\ud68c\n\n#YDES: Application description\nappDescription=A Fiori application.\n#XTIT: Main view title\ntitle=\\ud3d0\\uae30\\uc728 \\uc870\\ud68c',
	"zacqmu1010/localService/mockserver.js":function(){sap.ui.define(["sap/ui/core/util/MockServer","sap/ui/model/json/JSONModel","sap/base/util/UriParameters","sap/base/Log"],function(e,t,r,a){"use strict";var o,i="zacqmu1010/",n=i+"localService/mockdata";var s={init:function(s){var u=s||{};return new Promise(function(s,c){var p=sap.ui.require.toUrl(i+"manifest.json"),f=new t(p);f.attachRequestCompleted(function(){var t=new r(window.location.href),c=sap.ui.require.toUrl(n),p=f.getProperty("/sap.app/dataSources/mainService"),l=sap.ui.require.toUrl(i+p.settings.localUri),d=p.uri&&new URI(p.uri).absoluteTo(sap.ui.require.toUrl(i)).toString();if(!o){o=new e({rootUri:d})}else{o.stop()}e.config({autoRespond:true,autoRespondAfter:u.delay||t.get("serverDelay")||500});o.simulate(l,{sMockdataBaseUrl:c,bGenerateMissingMockData:true});var m=o.getRequests();var v=function(e,t,r){r.response=function(r){r.respond(e,{"Content-Type":"text/plain;charset=utf-8"},t)}};if(u.metadataError||t.get("metadataError")){m.forEach(function(e){if(e.path.toString().indexOf("$metadata")>-1){v(500,"metadata Error",e)}})}var g=u.errorType||t.get("errorType"),q=g==="badRequest"?400:500;if(g){m.forEach(function(e){v(q,g,e)})}o.setRequests(m);o.start();a.info("Running the app with mock data");s()});f.attachRequestFailed(function(){var e="Failed to load application manifest";a.error(e);c(new Error(e))})})},getMockServer:function(){return o}};return s});
},
	"zacqmu1010/manifest.json":'{"_version":"1.32.0","sap.app":{"id":"zacqmu1010","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"0.0.1"},"title":"{{appTitle}}","description":"{{appDescription}}","dataSources":{"mainService":{"uri":"/sap/opu/odata/sap/ZACGW_QUALITY_H_SRV/","type":"OData","settings":{"annotations":[],"localUri":"localService/metadata.xml","odataVersion":"2.0"}}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":true,"dependencies":{"minUI5Version":"1.99.0","libs":{"sap.ui.core":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"zacqmu1010.i18n.i18n"}},"":{"dataSource":"mainService","preload":true,"settings":{}}},"resources":{"css":[{"uri":"css/style.css"}]},"routing":{"config":{"routerClass":"sap.m.routing.Router","viewType":"XML","async":true,"viewPath":"zacqmu1010.view","controlAggregation":"pages","controlId":"app","clearControlAggregation":false},"routes":[{"name":"RouteView1","pattern":"RouteView1","target":["TargetView1"]}],"targets":{"TargetView1":{"viewType":"XML","transition":"slide","clearControlAggregation":false,"viewName":"View1"}}},"rootView":{"viewName":"zacqmu1010.view.View1","type":"XML","async":true}}}',
	"zacqmu1010/model/models.js":function(){sap.ui.define(["sap/ui/model/json/JSONModel","sap/ui/Device"],function(e,n){"use strict";return{createDeviceModel:function(){var i=new e(n);i.setDefaultBindingMode("OneWay");return i}}});
},
	"zacqmu1010/utils/locate-reuse-libs.js":'(function(e){var t=function(e){var t=e;var n="";var a=["sap.apf","sap.base","sap.chart","sap.collaboration","sap.f","sap.fe","sap.fileviewer","sap.gantt","sap.landvisz","sap.m","sap.ndc","sap.ovp","sap.rules","sap.suite","sap.tnt","sap.ui","sap.uiext","sap.ushell","sap.uxap","sap.viz","sap.webanalytics","sap.zen"];function r(e,t){Object.keys(e).forEach(function(e){if(!a.some(function(t){return e===t||e.startsWith(t+".")})){if(t.length>0){t=t+","+e}else{t=e}}});return t}return new Promise(function(a,i){$.ajax(t).done(function(e){if(e){if(e["sap.ui5"]&&e["sap.ui5"].dependencies){if(e["sap.ui5"].dependencies.libs){n=r(e["sap.ui5"].dependencies.libs,n)}if(e["sap.ui5"].dependencies.components){n=r(e["sap.ui5"].dependencies.components,n)}}if(e["sap.ui5"]&&e["sap.ui5"].componentUsages){n=r(e["sap.ui5"].componentUsages,n)}}a(n)}).fail(function(t){i(new Error("Could not fetch manifest at \'"+e))})})};e.registerComponentDependencyPaths=function(e){return t(e).then(function(e){if(e&&e.length>0){var t="/sap/bc/ui2/app_index/ui5_app_info?id="+e;var n=jQuery.sap.getUriParameters().get("sap-client");if(n&&n.length===3){t=t+"&sap-client="+n}return $.ajax(t).done(function(e){if(e){Object.keys(e).forEach(function(t){var n=e[t];if(n&&n.dependencies){n.dependencies.forEach(function(e){if(e.url&&e.url.length>0&&e.type==="UI5LIB"){jQuery.sap.log.info("Registering Library "+e.componentId+" from server "+e.url);jQuery.sap.registerModulePath(e.componentId,e.url)}})}})}})}})}})(sap);var scripts=document.getElementsByTagName("script");var currentScript=scripts[scripts.length-1];var manifestUri=currentScript.getAttribute("data-sap-ui-manifest-uri");var componentName=currentScript.getAttribute("data-sap-ui-componentName");var useMockserver=currentScript.getAttribute("data-sap-ui-use-mockserver");sap.registerComponentDependencyPaths(manifestUri).catch(function(e){jQuery.sap.log.error(e)}).finally(function(){sap.ui.getCore().attachInit(function(){jQuery.sap.require("jquery.sap.resources");var e=sap.ui.getCore().getConfiguration().getLanguage();var t=jQuery.sap.resources({url:"i18n/i18n.properties",locale:e});document.title=t.getText("appTitle")});if(componentName&&componentName.length>0){if(useMockserver&&useMockserver==="true"){sap.ui.getCore().attachInit(function(){sap.ui.require([componentName.replace(/\\./g,"/")+"/localService/mockserver"],function(e){e.init();sap.ushell.Container.createRenderer().placeAt("content")})})}else{sap.ui.require(["sap/ui/core/ComponentSupport"]);sap.ui.getCore().attachInit(function(){jQuery.sap.require("jquery.sap.resources");var e=sap.ui.getCore().getConfiguration().getLanguage();var t=jQuery.sap.resources({url:"i18n/i18n.properties",locale:e});document.title=t.getText("appTitle")})}}else{sap.ui.getCore().attachInit(function(){sap.ushell.Container.createRenderer().placeAt("content")})}});sap.registerComponentDependencyPaths(manifestUri);',
	"zacqmu1010/view/View1.view.xml":'<mvc:View\n    controllerName="zacqmu1010.controller.View1"\n    xmlns:mvc="sap.ui.core.mvc"\n    displayBlock="true"\n    xmlns="sap.m"\n    xmlns:t="sap.ui.table"\n    xmlns:u="sap.ui.unified"\n    xmlns:f="sap.f"\n    xmlns:layout="sap.ui.layout"\n    xmlns:chart="sap.suite.ui.commons"\n    xmlns:viz="sap.viz.ui5.controls"\n    xmlns:viz.feeds="sap.viz.ui5.controls.common.feeds"\n    xmlns:viz.data="sap.viz.ui5.data"\n    height="100%"\n\twidth="100%"\n\n    xmlns:core="sap.ui.core"\n><f:DynamicPage id="dynamicPageId"><f:title><f:DynamicPageTitle><f:heading><Title text="폐기율조회"/></f:heading></f:DynamicPageTitle></f:title><f:header><f:DynamicPageHeader pinnable="true"><Panel><Label text="조회조건" /><FlexBox\n                            alignItems="Start"\n                            justifyContent="SpaceBetween"><items><Panel\n                                    backgroundDesign="Transparent"\n                                    class="sapUiNoContentPadding"><content><layout:HorizontalLayout\n                                            allowWrapping="true"><layout:VerticalLayout\n                                                class="sapUiMediumMarginEnd"><Label text="연도" labelFor="fyear" /><Input\n                                                id="fyear"\n                                                placeholder="filter year"\n                                                value="{main>/filter/tyear}"></Input></layout:VerticalLayout></layout:HorizontalLayout></content></Panel><Button\n                            text="조회"\n                            type="Emphasized"\n                            press="onSearch"\n                            width="100px"/></items></FlexBox></Panel></f:DynamicPageHeader></f:header><f:content><VBox weight="100%"><Panel expandable="false" ><chart:ChartContainer id="chartContainer1" showFullScreen="true" showZoom="true" title="연도 및 품질검사번호별 폐기율"><chart:ChartContainerContent><chart:content><viz:Popover id="idPopOver"></viz:Popover><viz:VizFrame id="vizFrame1" uiConfig="{applicationSet:\'fiori\'}" height="20rem" width="100%"\n                                        vizType="column" selectData="onPress1"\n                                        vizProperties="{title:{ text:\'품질검사번호별 폐기율\'}}"><viz:dataset><viz.data:FlattenedDataset data="{main>/it_data}"><viz.data:dimensions><viz.data:DimensionDefinition name="prueflos"\n                                                            value="{prueflos}" /></viz.data:dimensions><viz.data:measures><viz.data:MeasureDefinition name="tmonth"\n                                                            value="{tmonth}" /><viz.data:MeasureDefinition name="loss"\n                                                            value="{loss}" /></viz.data:measures></viz.data:FlattenedDataset></viz:dataset><viz:feeds><viz.feeds:FeedItem id=\'valueAxisFeed\' uid="valueAxis" type="Measure"\n                                                    values="loss" /><viz.feeds:FeedItem id=\'categoryAxisFeed\' uid="categoryAxis" type="Dimension"\n                                                    values="prueflos" /></viz:feeds></viz:VizFrame></chart:content></chart:ChartContainerContent></chart:ChartContainer></Panel><HBox justifyContent="SpaceBetween"><Panel expandable="false"><chart:ChartContainer id="chartContainer2" showFullScreen="true" showZoom="true" title="합격/불합격 비율"><chart:ChartContainerContent><chart:content><viz:Popover id="idPopOverDonut"></viz:Popover><viz:VizFrame id="idVizFrame2" uiConfig="{applicationSet:\'fiori\'}"\n                                        height="20rem" width="100%" vizType="donut" selectData="onPress2"\n                                        vizProperties="{plotArea: { drawingEffect: \'glossy\' },title:{ text:\'합격/불합격\'}}"><viz:dataset><viz.data:FlattenedDataset data="{main>/it_data2}"><viz.data:dimensions><viz.data:DimensionDefinition name="qm_result_t"\n                                                        value="{qm_result_t}" /></viz.data:dimensions><viz.data:measures><viz.data:MeasureDefinition name="total"\n                                                        value="{total}" /></viz.data:measures></viz.data:FlattenedDataset></viz:dataset><viz:feeds><viz.feeds:FeedItem uid="size" type="Measure"\n                                                values="total" /><viz.feeds:FeedItem uid="color" type="Dimension"\n                                                values="qm_result_t" /></viz:feeds></viz:VizFrame></chart:content></chart:ChartContainerContent></chart:ChartContainer></Panel><Panel><Table id="idTable3" items="{main>/it_data3}"><columns><Column width="15em"><header><Text text="시리얼 번호"></Text></header></Column><Column width="10em"><header><Text text="제품코드"></Text></header></Column><Column><header><Text text="검수완료일"></Text></header></Column><Column><header><Text text="불합격사유"></Text></header></Column></columns><items><ColumnListItem press="onSelectH" vAlign="Middle"><cells><Text text="{main>serial}"></Text><Text text="{main>matnr}"></Text><Text text="{main>comp_date}"></Text><Text text="{main>rmess}"></Text></cells></ColumnListItem></items></Table></Panel></HBox></VBox></f:content></f:DynamicPage></mvc:View>\n'
}});