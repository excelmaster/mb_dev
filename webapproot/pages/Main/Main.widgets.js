Main.widgets = {
	varTemplateLogout: ["wm.LogoutVariable", {}, {}, {
		input: ["wm.ServiceInput", {"type":"logoutInputs"}, {}]
	}],
	securityService_getUserNameSVar: ["wm.ServiceVariable", {"operation":"getUserName","service":"securityService","startUpdate":true}, {}, {
		input: ["wm.ServiceInput", {"type":"getUserNameInputs"}, {}]
	}],
	nav_mainAdmin: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"Menu_Admin\"","targetProperty":"pageName"}, {}]
			}]
		}]
	}],
	nav_menu_Almacen: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"Menu_Almacen\"","targetProperty":"pageName"}, {}]
			}]
		}]
	}],
	nav_menu_farmacia: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"Menu_Farmacia\"","targetProperty":"pageName"}, {}]
			}]
		}]
	}],
	layoutBox1: ["wm.Layout", {"horizontalAlign":"center","layoutKind":"left-to-right","preferredDevice":"desktop","verticalAlign":"top","width":"902px"}, {}, {
		panelCenter: ["wm.Panel", {"height":"100%","horizontalAlign":"left","minDesktopHeight":600,"minHeight":600,"styles":{},"verticalAlign":"top","width":"900px"}, {}, {
			panelHeader: ["wm.HeaderContentPanel", {"height":"80px","horizontalAlign":"left","layoutKind":"left-to-right","padding":"0,10,0,10","verticalAlign":"middle","width":"100%"}, {}, {
				picture1: ["wm.Picture", {"height":"72px","source":"resources/images/mb/logo_medi-011.jpg","width":"314px"}, {}],
				label2: ["wm.Label", {"align":"right","caption":"Sistema de inventario","height":"35px","padding":"4","styles":{},"width":"245px"}, {}],
				panel10: ["wm.Panel", {"height":"100%","horizontalAlign":"left","styles":{},"verticalAlign":"middle","width":"65px"}, {}, {
					panel15: ["wm.Panel", {"height":"24px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"middle","width":"59px"}, {}]
				}],
				panel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","verticalAlign":"bottom","width":"261px"}, {}, {
					logoutButton: ["wm.Button", {"caption":"Logout","margin":"4"}, {"onclick":"varTemplateLogout"}],
					label3: ["wm.Label", {"padding":"4","styles":{},"width":"158px"}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"expression":"\"Usuario: \"+${securityService_getUserNameSVar.dataValue}","targetProperty":"caption"}, {}]
						}]
					}]
				}]
			}],
			panelContent: ["wm.MainContentPanel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
				fancyPanel1: ["wm.FancyPanel", {"innerHorizontalAlign":"center","innerVerticalAlign":"middle","labelHeight":"50","margin":"20,0,0,0","styles":{"textAlign":"center"},"title":"MENU PRINCIPAL"}, {}, {
					button1: ["wm.Button", {"_classes":{"domNode":["buttons_main"]},"border":"2,0,0,0","borderColor":"#2bba2b","caption":"Administraciòn","desktopHeight":"45px","height":"45px","imageList":"app.silkIconList","margin":"4","roles":["1"],"styles":{},"width":"300px"}, {"onclick":"nav_mainAdmin"}],
					button2: ["wm.Button", {"_classes":{"domNode":["buttons_main"]},"border":"1,0,0,0","borderColor":"#1dc97f","caption":"Almacen general","desktopHeight":"45px","height":"45px","margin":"4","roles":["1","3"],"styles":{},"width":"300px"}, {"onclick":"nav_menu_Almacen"}],
					button3: ["wm.Button", {"_classes":{"domNode":["buttons_main"]},"border":"1,0,0,0","borderColor":"#df6412","caption":"Farmacia","desktopHeight":"45px","height":"45px","margin":"4","roles":["1","2"],"styles":{},"width":"300px"}, {"onclick":"nav_menu_farmacia"}]
				}]
			}],
			panelFooter: ["wm.HeaderContentPanel", {"height":"24px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
				picture2: ["wm.Picture", {"height":"100%","source":"lib/wm/base/widget/themes/default/images/wmSmallLogo.png","width":"24px"}, {}],
				label1: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_10px"]},"caption":"Powered by WaveMaker","height":"100%","padding":"4"}, {}],
				edFooterLabel: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_10px"]},"align":"right","caption":"Copyright 2012 [company name]","height":"100%","padding":"4","width":"100%"}, {}]
			}]
		}]
	}]
}