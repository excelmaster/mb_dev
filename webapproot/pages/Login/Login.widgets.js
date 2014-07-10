Login.widgets = {
	phonegapCredentialStorage: ["wm.Variable", {"saveInPhonegap":true,"type":"EntryData"}, {}],
	loginVariable1: ["wm.LoginVariable", {}, {"onError":"loginFailed","onResult":"loadingDialog.hide","onSuccess":"onLoginSuccess"}, {
		input: ["wm.ServiceInput", {"type":"loginInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"usernameInput.dataValue","targetProperty":"username"}, {}],
				wire1: ["wm.Wire", {"expression":undefined,"source":"passwordInput.dataValue","targetProperty":"password"}, {}],
				wire2: ["wm.Wire", {"expression":undefined,"source":"hashInput.dataValue","targetProperty":"hash"}, {}]
			}]
		}]
	}],
	loadingDialog: ["wm.LoadingDialog", {"_classes":{"domNode":["rounded"]},"caption":"Logging in","captionSize":"80px","captionWidth":"100px"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"loginInputPanel","targetProperty":"widgetToCover"}, {}]
		}]
	}],
	layoutBox: ["wm.Layout", {}, {}, {
		headerPanel: ["wm.HeaderContentPanel", {"height":"48px","horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
			login_title: ["wm.Label", {"align":"center","border":"0,0,0,0","caption":"Sistema de gestión de inventarios","height":"40px","padding":"4","styles":{"fontWeight":"bold","fontSize":"18px"},"width":"354px"}, {}]
		}],
		loginMainPanel: ["wm.Panel", {"height":"100%","horizontalAlign":"center","padding":"10","styles":{"fontWeight":"bold"},"verticalAlign":"middle","width":"100%"}, {}, {
			panel2: ["wm.Panel", {"height":"174px","horizontalAlign":"center","layoutKind":"left-to-right","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
				picture1: ["wm.Picture", {"imageList":"app.silkIconList","source":"resources/images/mb/logo_medi-011.jpg","styles":{},"width":"430px"}, {}]
			}],
			loginInputPanel: ["wm.HeaderContentPanel", {"_classes":{"domNode":["rounded"]},"border":"0,0,0,0","desktopHeight":"222px","deviceType":null,"enableTouchHeight":true,"fitToContentHeight":true,"height":"162px","horizontalAlign":"center","margin":"10","mobileHeight":"290px","padding":"10","styles":{"color":""},"verticalAlign":"top","width":"390px"}, {"onEnterKeyPress":"loginButton.click"}, {
				panel1: ["wm.Panel", {"fitToContentHeight":true,"height":"72px","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
					usernameInput: ["wm.Text", {"caption":"Usuario","captionSize":"120px","dataValue":undefined,"desktopHeight":"35px","displayValue":"","height":"35px","mobileHeight":"45px","width":"100%"}, {}],
					passwordInput: ["wm.Text", {"caption":"Contraseña","captionSize":"120px","dataValue":undefined,"desktopHeight":"35px","displayValue":"","height":"35px","mobileHeight":"45px","password":true,"width":"100%"}, {}],
					hashInput: ["wm.Text", {"dataValue":"#{\"studio\":{\"pageName\":\"Main\",\"projectName\":\"mb_dev\",\"deviceType\":\"desktop\"},\"studio.sourceTabs\":9}","displayValue":"#{\"studio\":{\"pageName\":\"Main\",\"projectName\":\"mb_dev\",\"deviceType\":\"desktop\"},\"studio.sourceTabs\":9}","showing":false}, {}]
				}],
				loginButtonPanel: ["wm.Panel", {"height":"50px","horizontalAlign":"right","layoutKind":"left-to-right","padding":"4","width":"100%"}, {}, {
					loginErrorMsg: ["wm.Label", {"align":"center","caption":" ","height":"100%","padding":"4","singleLine":false,"width":"100%"}, {}, {
						format: ["wm.DataFormatter", {}, {}]
					}],
					loginButton: ["wm.Button", {"borderColor":"#000000","caption":"Ingresar","height":"100%","margin":"4","width":"90px"}, {"onclick":"loginButtonClick","onclick2":"loadingDialog.show","onclick3":"loginVariable1"}]
				}]
			}]
		}]
	}]
}