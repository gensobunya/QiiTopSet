//Qiitaのトップをタグフィードにリダイレクトする
'use strict';

const qiitaBaseUrl = "https://qiita.com/";

chrome.storage.local.get("redirectPage", (items)=>{
	chrome.webRequest.onBeforeRequest.addListener( (detail) =>{
		return {redirectUrl : qiitaBaseUrl + items.redirectPage};
	},
		{urls: ["*://qiita.com/trend"]}, //リクエスト先がtrendになった場合発火
		["blocking"]
	)
	console.log("redirect to "+ qiitaBaseUrl + items.redirectPage);
}
)

