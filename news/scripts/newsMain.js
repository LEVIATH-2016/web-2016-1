var LEVIATH = LEVIATH || {};

$(function(){

	var twShare = new LEVIATH.twShare();
	var fbShare = new LEVIATH.fbShare();
	var createHtml = new LEVIATH.createHtml();

	createHtml.getJson();

	$(window).on("load",function(){

		var $btnTw = $(".news-sns-tw");
		var $btnFb = $(".news-sns-fb");
		var $title = $(".news-title");

		twShare.showWindow($btnTw,$title);
		fbShare.showWindow($btnFb,$title);

	});

});

// https://www.facebook.com/sharer.php?s=100&p[url]=http://oswald.hatenablog.com/entry/2013/07/27/120717&p[images][0]=https://fbcdn-sphotos-a-a.akamaihd.net/hphotos-ak-frc1/425113_276411052428693_1745927864_n.jpg&p[title]=%E3%82%B7%E3%82%A7%E3%82%A2%E3%83%9C%E3%82%BF%E3%83%B3%E3%82%92%E9%9A%A0%E3%81%97%E3%83%91%E3%83%A9%E3%83%A1%E3%83%BC%E3%82%BF%E3%83%BC%E3%81%A7%E3%82%AB%E3%82%B9%E3%82%BF%E3%83%9E%E3%82%A4%E3%82%BA&p[summary]=%E3%82%B7%E3%82%A7%E3%82%A2%E3%83%9C%E3%82%BF%E3%83%B3%E3%81%8C%E6%8A%BC%E3%81%95%E3%82%8C%E3%81%9F%E3%81%82%E3%81%A8%E3%81%AE%E8%A1%A8%E7%A4%BA%E3%82%92sharer.php%E3%81%AE%E9%9A%A0%E3%81%97%E3%83%91%E3%83%A9%E3%83%A1%E3%83%BC%E3%82%BF%E3%83%BC%E3%81%A7%E3%82%AB%E3%82%B9%E3%82%BF%E3%83%9E%E3%82%A4%E3%82%BA%E3%81%99%E3%82%8B%E6%96%B9%E6%B3%95%E3%81%A7%E3%81%99&m2w

// https://www.facebook.com/sharer/sharer.php?s=100&p[url]=http%3A%2F%2Flocalhost%3A8001%2Fnews%2F&p[title]=%E3%82%B5%E3%82%A4%E3%83%88%E9%96%8B%E8%A8%AD%E3%81%97%E3%81%BE%E3%81%97%E3%81%9F&p[summary]=%E3%83%86%E3%82%B9%E3%83%88%E3%81%A7%E3%81%99&m2w
