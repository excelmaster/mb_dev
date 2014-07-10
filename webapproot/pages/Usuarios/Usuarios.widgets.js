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
	usersDialog: ["wm.DesignableDialog", {"buttonBarId":"buttonBar","containerWidgetId":"containerWidget","desktopHeight":"314px","height":"314px","styles":{},"title":"users","width":"500px"}, {"onShow":"usersDialogShow"}, {
		containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
			usersLiveForm1: ["wm.LiveForm", {"alwaysPopulateEditors":true,"fitToContentHeight":true,"height":"325px","horizontalAlign":"left","liveEditing":false,"margin":"4","verticalAlign":"top"}, {"onSuccess":"usersLivePanel2.popupLiveFormSuccess"}, {
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
	layoutBox1: ["wm.Layout", {"horizontalAlign":"center","layoutKind":"left-to-right","preferredDevice":"desktop","verticalAlign":"top","width":"815px"}, {}, {
		panelCenter: ["wm.Panel", {"height":"100%","horizontalAlign":"left","minDesktopHeight":600,"minHeight":600,"styles":{},"verticalAlign":"top","width":"900px"}, {}, {
			panelHeader: ["wm.HeaderContentPanel", {"height":"80px","horizontalAlign":"left","layoutKind":"left-to-right","padding":"0,10,0,10","verticalAlign":"middle","width":"100%"}, {}, {
				picture1: ["wm.Picture", {"height":"72px","source":"resources/images/mb/logo_medi-011.jpg","width":"314px"}, {}],
				label2: ["wm.Label", {"align":"right","caption":"Sistema de inventario","height":"35px","padding":"4","styles":{},"width":"177px"}, {}],
				panel10: ["wm.Panel", {"height":"100%","horizontalAlign":"left","styles":{},"verticalAlign":"middle","width":"114px"}, {}],
				panel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","verticalAlign":"bottom","width":"277px"}, {}, {
					logoutButton: ["wm.Button", {"caption":"Logout","margin":"4"}, {"onclick":"varTemplateLogout"}],
					label3: ["wm.Label", {"padding":"4","styles":{}}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"expression":"\"Usuario: \"+${securityService_getUserNameSVar.dataValue}","targetProperty":"caption"}, {}]
						}]
					}]
				}]
			}],
			dojoMenu1: ["wm.DojoMenu", {"fullStructure":[
{"label":"Archivo","separator":undefined,"defaultLabel":"Archivo","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":"volver_menuAdm","children":[]}
],"height":"25px","localizationStructure":{}}, {}],
			panelContent: ["wm.MainContentPanel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
				fancyPanel1: ["wm.FancyPanel", {"innerHorizontalAlign":"center","innerVerticalAlign":"middle","labelHeight":"30","margin":"0,0,0,0","styles":{"textAlign":"center"},"title":"USUARIOS"}, {}, {
					usersLivePanel1: ["wm.LivePanel", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
						usersLivePanel2: ["wm.LivePanel", {"autoScroll":false,"horizontalAlign":"left","verticalAlign":"top"}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"source":"usersDialog","targetId":null,"targetProperty":"dialog"}, {}],
								wire1: ["wm.Wire", {"source":"usersLiveForm1","targetId":null,"targetProperty":"liveForm"}, {}],
								wire2: ["wm.Wire", {"source":"usersDojoGrid","targetId":null,"targetProperty":"dataGrid"}, {}],
								wire3: ["wm.Wire", {"source":"usersSaveButton","targetId":null,"targetProperty":"saveButton"}, {}]
							}],
							usersDojoGrid: ["wm.DojoGrid", {"columns":[
{"show":true,"field":"id","title":"Id","width":"80px","align":"right","expression":"Primer nombre","mobileColumn":false},
{"show":true,"field":"prinombre","title":"Prinombre","width":"100%","align":"left","formatFunc":"usersDojoGridPrinombreFormat","expression":"\"Primer nombre\"","mobileColumn":false},
{"show":true,"field":"demasnombres","title":"Demasnombres","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"priapellido","title":"Priapellido","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"segapellido","title":"Segapellido","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"username","title":"Username","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"password","title":"Password","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"cargo","title":"Cargo","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"rol","title":"Rol","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Id: \" + ${wm.runtimeId}.formatCell(\"id\", ${id}, ${this}, ${wm.rowId}) +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Prinombre: \" + ${wm.runtimeId}.formatCell(\"prinombre\", ${prinombre}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Demasnombres: \" + ${demasnombres}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Priapellido: \" + ${priapellido}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Segapellido: \" + ${segapellido}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Username: \" + ${username}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Password: \" + ${password}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Cargo: \" + ${cargo}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Rol: \" + ${rol}\n + \"</div>\"\n\n","mobileColumn":true}
],"height":"100%","localizationStructure":{},"margin":"4","minDesktopHeight":60}, {"onCellDblClick":"usersLivePanel2.popupLivePanelEdit"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"usersLiveVariable2","targetProperty":"dataSet"}, {}]
								}]
							}],
							usersGridButtonPanel: ["wm.Panel", {"desktopHeight":"32px","enableTouchHeight":true,"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","mobileHeight":"40px","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
								usersNewButton: ["wm.Button", {"caption":"Nuevo","margin":"4"}, {"onclick":"usersLivePanel2.popupLivePanelInsert","onclick1":"usersNewButtonClick1"}],
								usersUpdateButton: ["wm.Button", {"caption":"Modificar","margin":"4"}, {"onclick":"usersLivePanel2.popupLivePanelEdit"}, {
									binding: ["wm.Binding", {}, {}, {
										wire: ["wm.Wire", {"source":"usersDojoGrid.emptySelection","targetId":null,"targetProperty":"disabled"}, {}]
									}]
								}],
								usersDeleteButton: ["wm.Button", {"caption":"Eliminar","margin":"4"}, {"onclick":"usersLiveForm1.deleteData"}, {
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
}