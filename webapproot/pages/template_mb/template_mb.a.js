dojo.declare("template_mb", wm.Page, {
start: function() {
},
"preferredDevice": "desktop",
_end: 0
});

template_mb.widgets = {
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
layoutBox1: ["wm.Layout", {"horizontalAlign":"center","layoutKind":"left-to-right","preferredDevice":"desktop","verticalAlign":"top","width":"815px"}, {}, {
panelCenter: ["wm.Panel", {"height":"100%","horizontalAlign":"left","minDesktopHeight":600,"minHeight":600,"styles":{},"verticalAlign":"top","width":"900px"}, {}, {
panelHeader: ["wm.HeaderContentPanel", {"height":"80px","horizontalAlign":"left","layoutKind":"left-to-right","padding":"0,10,0,10","verticalAlign":"middle","width":"100%"}, {}, {
picture1: ["wm.Picture", {"height":"72px","source":"resources/images/mb/logo_medi-011.jpg","width":"314px"}, {}],
label2: ["wm.Label", {"align":"right","caption":"Sistema de inventario","height":"35px","padding":"4","styles":{},"width":"177px"}, {}],
panel10: ["wm.Panel", {"height":"100%","horizontalAlign":"left","styles":{},"verticalAlign":"middle","width":"300px"}, {}, {
panel15: ["wm.Panel", {"height":"24px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"middle","width":"100%"}, {}]
}],
logoutButton: ["wm.Button", {"caption":"Logout","margin":"4"}, {"onclick":"varTemplateLogout"}]
}],
label3: ["wm.Label", {"padding":"4","styles":{}}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"Usuario: \"+${securityService_getUserNameSVar.dataValue}","targetProperty":"caption"}, {}]
}]
}],
panelContent: ["wm.MainContentPanel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
fancyPanel1: ["wm.FancyPanel", {"innerHorizontalAlign":"center","innerVerticalAlign":"middle","labelHeight":"30","margin":"0,0,0,0","styles":{"textAlign":"center"},"title":"MENU PRINCIPAL"}, {}]
}],
panelFooter: ["wm.HeaderContentPanel", {"height":"24px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
picture2: ["wm.Picture", {"height":"100%","source":"lib/wm/base/widget/themes/default/images/wmSmallLogo.png","width":"24px"}, {}],
label1: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_10px"]},"caption":"Powered by WaveMaker","height":"100%","padding":"4"}, {}],
edFooterLabel: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_10px"]},"align":"right","caption":"Copyright 2012 [company name]","height":"100%","padding":"4","width":"100%"}, {}]
}]
}]
}]
};

template_mb.prototype._cssText = '';
template_mb.prototype._htmlText = '';