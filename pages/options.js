'use strict';

const storage = chrome.storage.local;

// options.htmlからリダイレクト先を取得してobjectに格納
function save_options() {
	const page = {
		redirectPage : document.getElementById('redirectTo').value
	};

// オブジェクトをchrome.storage.syncに保存
	storage.set(page,function() {
			let status = document.getElementById('status');
			status.textContent = 'Saved!'; //ボタン押したらフィードバック
			console.log('option saved as ' + page.redirectPage);

			setTimeout(function() {
				status.textContent = '';
				}, 750); //フィードバックを消す
		  }
	);
}

// 初期表示は保存されている内容を表示する
function restore_options() {
	storage.get({
		redirectPage: "timeline" //getデータが無い時のための初期値
	},function(items) {
		document.getElementById('redirectTo').value = items.redirectPage;
	});
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',save_options);