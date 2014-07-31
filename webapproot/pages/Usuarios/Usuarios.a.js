dojo.declare("Usuarios", wm.Page, {
start: function() {
},
"preferredDevice": "desktop",
usersDojoGridSelect: function(inSender) {
},
usersDialogShow: function(inSender) {
this.cargoEditor1.caption=this.securityService_getUserNameSVar;
},
usersNewButtonClick1: function(inSender) {
this.usersDialog.
},
usersDojoGridPrinombreFormat: function( inValue, rowId, cellId, cellField, cellObj, rowObj) {
},
panelCenterEnterKeyPress: function(inSender, inEvent) {
this.usersLiveForm1.
},
_end: 0
});

Usuarios.widgets = {
varTemplateLogout: ["wm.LogoutVariable", {}, {}, {
input: ["wm.ServiceInput", {"type":"logoutInputs"}, {}]
}],
securityService_getUserNameSVar: ["wm.ServiceVariable", {"operation":"getUserName","service":"securityService","startUpdate":true}, {}, {
input: ["wm.ServiceInput", {"type":"getUserNameInputs"}, {}]
}],
nav_mainAdmin: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"Menu_admin\"","targetProperty":"pageName"}, {}]
}]
}]
}],
nav_menu_Almacen: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"Menu_almacen\"","targetProperty":"pageName"}, {}]
}]
}]
}],
nav_menu_farmacia: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"Menu_farmacia\"","targetProperty":"pageName"}, {}]
}]
}]
}],
usersLiveVariable1: ["wm.LiveVariable", {"type":"com.invent_mbdb.data.Users"}, {}, {
liveView: ["wm.LiveView", {"dataType":"com.invent_mbdb.data.Users","view":[
{"caption":"Id","sortable":true,"dataIndex":"id","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"Prinombre","sortable":true,"dataIndex":"prinombre","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},
{"caption":"Demasnombres","sortable":true,"dataIndex":"demasnombres","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},
{"caption":"Priapellido","sortable":true,"dataIndex":"priapellido","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},
{"caption":"Segapellido","sortable":true,"dataIndex":"segapellido","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},
{"caption":"Username","sortable":true,"dataIndex":"username","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":5,"subType":null},
{"caption":"Password","sortable":true,"dataIndex":"password","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":6,"subType":null},
{"caption":"Cargo","sortable":true,"dataIndex":"cargo","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":7,"subType":null},
{"caption":"Rol","sortable":true,"dataIndex":"rol","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":8,"subType":null}
]}, {}],
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"usersLiveVariable1.iduserCreate","targetProperty":"filter.iduserCreate"}, {}]
}]
}],
notificationCall1: ["wm.NotificationCall", {}, {}, {
input: ["wm.ServiceInput", {"type":"alertInputs"}, {}]
}],
volver_menuAdm: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"Menu_Admin\"","targetProperty":"pageName"}, {}]
}]
}]
}],
usersLiveVariable2: ["wm.LiveVariable", {"type":"com.invent_mbdb.data.Users"}, {}, {
liveView: ["wm.LiveView", {"dataType":"com.invent_mbdb.data.Users","view":[
{"caption":"Id","sortable":true,"dataIndex":"id","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"Prinombre","sortable":true,"dataIndex":"prinombre","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},
{"caption":"Demasnombres","sortable":true,"dataIndex":"demasnombres","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},
{"caption":"Priapellido","sortable":true,"dataIndex":"priapellido","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},
{"caption":"Segapellido","sortable":true,"dataIndex":"segapellido","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},
{"caption":"Username","sortable":true,"dataIndex":"username","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":5,"subType":null},
{"caption":"Password","sortable":true,"dataIndex":"password","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":6,"subType":null},
{"caption":"Cargo","sortable":true,"dataIndex":"cargo","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":7,"subType":null},
{"caption":"Rol","sortable":true,"dataIndex":"rol","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":8,"subType":null}
]}, {}]
}],
serviceVariable1: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"getUsersById","service":"invent_mbDB"}, {}, {
input: ["wm.ServiceInput", {"type":"getUsersByIdInputs"}, {}]
}],
serviceVariable2: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"user_x_id","service":"invent_mbDB"}, {}, {
input: ["wm.ServiceInput", {"type":"user_x_idInputs"}, {}]
}],
usersLiveVariable3: ["wm.LiveVariable", {"type":"com.invent_mbdb.data.Users"}, {}, {
liveView: ["wm.LiveView", {"dataType":"com.invent_mbdb.data.Users","view":[
{"caption":"Id","sortable":true,"dataIndex":"id","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"Prinombre","sortable":true,"dataIndex":"prinombre","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},
{"caption":"Demasnombres","sortable":true,"dataIndex":"demasnombres","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},
{"caption":"Priapellido","sortable":true,"dataIndex":"priapellido","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},
{"caption":"Segapellido","sortable":true,"dataIndex":"segapellido","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},
{"caption":"Username","sortable":true,"dataIndex":"username","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":5,"subType":null},
{"caption":"Password","sortable":true,"dataIndex":"password","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":6,"subType":null},
{"caption":"Cargo","sortable":true,"dataIndex":"cargo","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":7,"subType":null},
{"caption":"Rol","sortable":true,"dataIndex":"rol","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":8,"subType":null}
]}, {}]
}],
usersDialog: ["wm.DesignableDialog", {"buttonBarId":"buttonBar","containerWidgetId":"containerWidget","desktopHeight":"314px","height":"314px","styles":{},"title":"users","width":"500px"}, {"onShow":"usersDialogShow"}, {
containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
usersLiveForm1: ["wm.LiveForm", {"alwaysPopulateEditors":true,"fitToContentHeight":true,"height":"244px","horizontalAlign":"left","liveEditing":false,"margin":"4","verticalAlign":"top"}, {"onSuccess":"usersLivePanel2.popupLiveFormSuccess"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"usersDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
}],
idEditor1: ["wm.Number", {"caption":"Id","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"zero","formField":"id","height":"26px","required":true,"width":"100%"}, {}],
prinombreEditor1: ["wm.Text", {"caption":"Prinombre","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"prinombre","height":"26px","required":true,"width":"100%"}, {}],
demasnombresEditor1: ["wm.Text", {"caption":"Demasnombres","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"demasnombres","height":"26px","width":"100%"}, {}],
priapellidoEditor1: ["wm.Text", {"caption":"Priapellido","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"priapellido","height":"26px","required":true,"width":"100%"}, {}],
segapellidoEditor1: ["wm.Text", {"caption":"Segapellido","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"segapellido","height":"26px","width":"100%"}, {}],
usernameEditor1: ["wm.Text", {"caption":"Username","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"username","height":"26px","required":true,"width":"100%"}, {}],
passwordEditor1: ["wm.Text", {"caption":"Password","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"password","height":"26px","required":true,"width":"100%"}, {}],
cargoEditor1: ["wm.Text", {"caption":"Cargo","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"cargo","height":"26px","required":true,"width":"100%"}, {}],
rolEditor1: ["wm.Number", {"borderColor":"#FBFBFB","caption":"Rol","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"zero","formField":"rol","height":"26px","required":true,"width":"100%"}, {}]
}]
}],
buttonBar: ["wm.ButtonBarPanel", {"border":"1,0,0,0","borderColor":"#333333","desktopHeight":"41px","height":"33px","mobileHeight":"41px"}, {}, {
usersSaveButton: ["wm.Button", {"caption":"Guardar","margin":"4"}, {"onclick":"usersLiveForm1.saveDataIfValid"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"usersLiveForm1.invalid","targetId":null,"targetProperty":"disabled"}, {}]
}]
}],
usersCancelButton: ["wm.Button", {"caption":"Cancelar","margin":"4"}, {"onclick":"usersDialog.hide","onclick1":"usersLiveForm1.cancelEdit"}]
}]
}],
usersDialog1: ["wm.DesignableDialog", {"buttonBarId":"buttonBar1","containerWidgetId":"containerWidget1","desktopHeight":"314px","height":"314px","title":"Mantenimiento de Usuarios","width":"500px"}, {}, {
containerWidget1: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
usersLiveForm2: ["wm.LiveForm", {"alwaysPopulateEditors":true,"captionSize":"100px","editorHeight":"24px","fitToContentHeight":true,"height":"226px","horizontalAlign":"left","liveEditing":false,"margin":"4","verticalAlign":"top"}, {"onSuccess":"usersLivePanel1.popupLiveFormSuccess"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"usersDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
}],
idEditor2: ["wm.Number", {"borderColor":"#FBFBFB","caption":"Id","changeOnKey":true,"emptyValue":"zero","formField":"id","required":true,"width":"100%"}, {}],
prinombreEditor2: ["wm.Text", {"caption":"Prinombre","changeOnKey":true,"emptyValue":"emptyString","formField":"prinombre","maxChars":100,"required":true,"width":"100%"}, {}],
demasnombresEditor2: ["wm.Text", {"caption":"Demasnombres","changeOnKey":true,"emptyValue":"emptyString","formField":"demasnombres","maxChars":100,"width":"100%"}, {}],
priapellidoEditor2: ["wm.Text", {"caption":"Priapellido","changeOnKey":true,"emptyValue":"emptyString","formField":"priapellido","maxChars":100,"required":true,"width":"100%"}, {}],
segapellidoEditor2: ["wm.Text", {"caption":"Segapellido","changeOnKey":true,"emptyValue":"emptyString","formField":"segapellido","maxChars":100,"width":"100%"}, {}],
usernameEditor2: ["wm.Text", {"caption":"Username","changeOnKey":true,"emptyValue":"emptyString","formField":"username","maxChars":100,"required":true,"width":"100%"}, {}],
passwordEditor2: ["wm.Text", {"caption":"Password","changeOnKey":true,"emptyValue":"emptyString","formField":"password","maxChars":100,"required":true,"width":"100%"}, {}],
cargoEditor2: ["wm.Text", {"caption":"Cargo","changeOnKey":true,"emptyValue":"emptyString","formField":"cargo","maxChars":100,"required":true,"width":"100%"}, {}],
rolEditor2: ["wm.Number", {"borderColor":"#FBFBFB","caption":"Rol","changeOnKey":true,"emptyValue":"zero","formField":"rol","required":true,"width":"100%"}, {}]
}]
}],
buttonBar1: ["wm.ButtonBarPanel", {"border":"1,0,0,0","borderColor":"#333333","desktopHeight":"33px","height":"33px"}, {}, {
usersSaveButton1: ["wm.Button", {"caption":"Guardar","margin":"4"}, {"onclick":"usersLiveForm2.saveDataIfValid"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"usersLiveForm2.invalid","targetId":null,"targetProperty":"disabled"}, {}]
}]
}],
usersCancelButton1: ["wm.Button", {"caption":"Cancelar","margin":"4"}, {"onclick":"usersDialog1.hide","onclick1":"usersLiveForm2.cancelEdit"}]
}]
}],
usersDialog2: ["wm.DesignableDialog", {"buttonBarId":"","containerWidgetId":"containerWidget2","desktopHeight":"314px","height":"314px","title":"users","width":"500px"}, {}, {
containerWidget2: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
usersLiveForm3: ["wm.LiveForm", {"alwaysPopulateEditors":true,"fitToContentHeight":true,"height":"244px","horizontalAlign":"left","liveEditing":false,"margin":"4","verticalAlign":"top"}, {"onSuccess":"usersLivePanel2.popupLiveFormSuccess"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"usersDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
}],
idEditor3: ["wm.Number", {"borderColor":"#FBFBFB","caption":"Id","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"zero","formField":"id","height":"26px","required":true,"width":"100%"}, {}],
prinombreEditor3: ["wm.Text", {"caption":"Prinombre","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"prinombre","height":"26px","maxChars":100,"required":true,"width":"100%"}, {}],
demasnombresEditor3: ["wm.Text", {"caption":"Demasnombres","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"demasnombres","height":"26px","maxChars":100,"width":"100%"}, {}],
priapellidoEditor3: ["wm.Text", {"caption":"Priapellido","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"priapellido","height":"26px","maxChars":100,"required":true,"width":"100%"}, {}],
segapellidoEditor3: ["wm.Text", {"caption":"Segapellido","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"segapellido","height":"26px","maxChars":100,"width":"100%"}, {}],
usernameEditor3: ["wm.Text", {"caption":"Username","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"username","height":"26px","maxChars":100,"required":true,"width":"100%"}, {}],
passwordEditor3: ["wm.Text", {"caption":"Password","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"password","height":"26px","maxChars":100,"required":true,"width":"100%"}, {}],
cargoEditor3: ["wm.Text", {"caption":"Cargo","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"cargo","height":"26px","maxChars":100,"required":true,"width":"100%"}, {}],
rolEditor3: ["wm.Number", {"borderColor":"#FBFBFB","caption":"Rol","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"zero","formField":"rol","height":"26px","required":true,"width":"100%"}, {}]
}]
}],
buttonBar2: ["wm.ButtonBarPanel", {"border":"1,0,0,0","borderColor":"#333333"}, {}, {
usersSaveButton2: ["wm.Button", {"caption":"Guardar","margin":"4"}, {"onclick":"usersLiveForm3.saveDataIfValid"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"usersLiveForm3.invalid","targetId":null,"targetProperty":"disabled"}, {}]
}]
}],
usersCancelButton2: ["wm.Button", {"caption":"Cancelar","margin":"4"}, {"onclick":"usersDialog2.hide","onclick1":"usersLiveForm3.cancelEdit"}]
}]
}],
layoutBox1: ["wm.Layout", {"horizontalAlign":"center","layoutKind":"left-to-right","preferredDevice":"desktop","verticalAlign":"top","width":"815px"}, {}, {
panelCenter: ["wm.Panel", {"height":"100%","horizontalAlign":"left","minDesktopHeight":600,"minHeight":600,"styles":{},"verticalAlign":"top","width":"900px"}, {"onEnterKeyPress":"panelCenterEnterKeyPress"}, {
panelHeader: ["wm.HeaderContentPanel", {"height":"80px","horizontalAlign":"left","layoutKind":"left-to-right","padding":"0,10,0,10","verticalAlign":"middle","width":"100%"}, {}, {
picture1: ["wm.Picture", {"height":"72px","source":"resources/images/mb/logo_medi-011.jpg","width":"314px"}, {}],
label2: ["wm.Label", {"align":"right","caption":"Sistema de inventario","height":"35px","padding":"4","styles":{},"width":"177px"}, {}],
panel10: ["wm.Panel", {"height":"100%","horizontalAlign":"left","styles":{},"verticalAlign":"middle","width":"114px"}, {}],
panel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","verticalAlign":"bottom","width":"277px"}, {}, {
userid: ["wm.CheckboxSet", {"caption":"checkboxSet1","dataType":"com.invent_mbdb.data.Users","displayField":"password","displayValue":"","emptyValue":"zero"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"usersLiveVariable2.id","targetProperty":"dataValue"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"usersLiveVariable2","targetProperty":"dataSet"}, {}]
}]
}],
button1: ["wm.Button", {"margin":"4"}, {}],
logoutButton: ["wm.Button", {"caption":"Logout","margin":"4"}, {"onclick":"varTemplateLogout"}],
label3: ["wm.Label", {"padding":"4","styles":{}}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"Usuario: \"+${securityService_getUserNameSVar.dataValue}","targetProperty":"caption"}, {}]
}]
}]
}]
}],
dojoMenu1: ["wm.DojoMenu", {"fullStructure":[
{"label":"Inicio","separator":undefined,"defaultLabel":"Inicio","iconClass":"app_silkIconList_3","imageList":"app.silkIconList","idInPage":undefined,"isCheckbox":false,"onClick":"volver_menuAdm","children":[]}
],"height":"25px","localizationStructure":{}}, {}],
panelContent: ["wm.MainContentPanel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
fancyPanel1: ["wm.FancyPanel", {"innerHorizontalAlign":"center","innerVerticalAlign":"middle","labelHeight":"30","margin":"0,0,0,0","styles":{"textAlign":"center"},"title":"USUARIOS"}, {}, {
usersLivePanel1: ["wm.LivePanel", {"autoScroll":false,"borderColor":"#FBFBFB","horizontalAlign":"left","verticalAlign":"top"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"usersDialog1","targetId":null,"targetProperty":"dialog"}, {}],
wire1: ["wm.Wire", {"source":"usersLiveForm2","targetId":null,"targetProperty":"liveForm"}, {}],
wire2: ["wm.Wire", {"source":"usersDojoGrid","targetId":null,"targetProperty":"dataGrid"}, {}],
wire3: ["wm.Wire", {"source":"usersSaveButton1","targetId":null,"targetProperty":"saveButton"}, {}]
}],
usersLivePanel2: ["wm.LivePanel", {"autoScroll":false,"borderColor":"#FBFBFB","horizontalAlign":"left","verticalAlign":"top"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"usersDialog2","targetId":null,"targetProperty":"dialog"}, {}],
wire1: ["wm.Wire", {"source":"usersLiveForm3","targetId":null,"targetProperty":"liveForm"}, {}],
wire2: ["wm.Wire", {"source":"usersDojoGrid","targetId":null,"targetProperty":"dataGrid"}, {}],
wire3: ["wm.Wire", {"source":"usersSaveButton2","targetId":null,"targetProperty":"saveButton"}, {}]
}],
text1: ["wm.Text", {"caption":"text1","changeOnKey":true,"dataValue":undefined,"displayValue":"","resetButton":true}, {}],
usersDojoGrid: ["wm.DojoGrid", {"columns":[
{"show":true,"field":"id","title":"Id","width":"80px","displayType":"Number","align":"right","formatFunc":""},
{"show":true,"field":"prinombre","title":"Prinombre","width":"100%","displayType":"Text","align":"left","formatFunc":""},
{"show":true,"field":"demasnombres","title":"Demasnombres","width":"100%","displayType":"Text","align":"left","formatFunc":""},
{"show":true,"field":"priapellido","title":"Priapellido","width":"100%","displayType":"Text","align":"left","formatFunc":""},
{"show":true,"field":"segapellido","title":"Segapellido","width":"100%","displayType":"Text","align":"left","formatFunc":""},
{"show":true,"field":"username","title":"Username","width":"100%","displayType":"Text","align":"left","formatFunc":""},
{"show":true,"field":"password","title":"Password","width":"100%","displayType":"Text","align":"left","formatFunc":""},
{"show":true,"field":"cargo","title":"Cargo","width":"100%","displayType":"Text","align":"left","formatFunc":""},
{"show":true,"field":"rol","title":"Rol","width":"80px","displayType":"Number","align":"right","formatFunc":""},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Id: \" + ${id} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Prinombre: \" + ${prinombre}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Demasnombres: \" + ${demasnombres}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Priapellido: \" + ${priapellido}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Segapellido: \" + ${segapellido}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Username: \" + ${username}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Password: \" + ${password}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Cargo: \" + ${cargo}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Rol: \" + ${rol}\n + \"</div>\"\n\n","mobileColumn":true}
],"dsType":"com.invent_mbdb.data.Users","height":"100%","localizationStructure":{},"margin":"4","minDesktopHeight":60}, {"onCellDblClick":"usersLivePanel2.popupLivePanelEdit"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"usersLiveVariable3","targetProperty":"dataSet"}, {}]
}]
}],
usersGridButtonPanel: ["wm.Panel", {"desktopHeight":"32px","enableTouchHeight":true,"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","mobileHeight":"40px","verticalAlign":"top","width":"100%"}, {}, {
usersNewButton: ["wm.Button", {"caption":"Nuevo","margin":"4"}, {"onclick":"usersLivePanel2.popupLivePanelInsert"}],
usersUpdateButton: ["wm.Button", {"caption":"Modificar","margin":"4"}, {"onclick":"usersLivePanel2.popupLivePanelEdit"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"usersDojoGrid.emptySelection","targetId":null,"targetProperty":"disabled"}, {}]
}]
}],
usersDeleteButton: ["wm.Button", {"caption":"Eliminar","margin":"4"}, {"onclick":"usersLiveForm3.deleteData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"usersDojoGrid.emptySelection","targetId":null,"targetProperty":"disabled"}, {}]
}]
}]
}]
}]
}]
}]
}],
panelFooter: ["wm.HeaderContentPanel", {"height":"24px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
picture2: ["wm.Picture", {"height":"100%","source":"lib/wm/base/widget/themes/default/images/wmSmallLogo.png","width":"24px"}, {}],
label1: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_10px"]},"caption":"Powered by WaveMaker","height":"100%","padding":"4"}, {}],
edFooterLabel: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_10px"]},"align":"right","caption":"Copyright 2012 [company name]","height":"100%","padding":"4","width":"100%"}, {}]
}]
}]
}]
};

Usuarios.prototype._cssText = '';
Usuarios.prototype._htmlText = '';