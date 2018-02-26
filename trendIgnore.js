//Qiitaのトップをタグフィードにリダイレクトする

chrome.webRequest.onBeforeRequest.addListener(
	function( detail ) {
		var qiitaFeedUrl = "https://qiita.com/tag-feed";
		return {
			redirectUrl: qiitaFeedUrl
				//アクセス後はページ遷移ではなくページ描画しているので分岐不要（ラッキー）
		};
	}, 
	{
	urls: ["*://qiita.com/trend"] //リクエスト先がtrendになった場合発火
	},
	 [ 
	"blocking" 
	]
 );
console.log('Redirect /trend->/tag-feed')
