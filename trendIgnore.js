//Qiitaのトップをタグフィードにリダイレクトする
'use strict';

const qiitaBaseUrl = "https://qiita.com/";

chrome.storage.local.get("redirectPage", (items)=>{
	let redirectFullUrl = qiitaBaseUrl + items.redirectPage;
	chrome.webRequest.onBeforeRequest.addListener( (detail) =>{
		return {redirectUrl : redirectFullUrl};
	},
		{urls: ["*://qiita.com/trend"]}, //リクエスト先がtrendになった場合発火
		["blocking"]
	)
	console.log("redirect to "+ qiitaBaseUrl + items.redirectPage);

	chrome.storage.onChanged.addListener((newItems)=>{
		redirectFullUrl = qiitaBaseUrl + newItems.redirectPage.newValue;
		console.log("change redirect url to" + redirectFullUrl);
	})
}
)

