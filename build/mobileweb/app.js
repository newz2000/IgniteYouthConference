var win1 = Titanium.UI.createWindow({  
    title:'Tab 1',
    backgroundColor:'#fff'
});
win1.open();

var mainwebview = Ti.UI.createWebView({
	url:'/webview/index.html'
});

win1.add(mainwebview);
