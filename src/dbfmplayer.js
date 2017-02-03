(function ($) {
// load CSS
$("<link/>", {
   rel: "stylesheet",
   type: "text/css",
   href: "https://cdn.rawgit.com/cheng-kang/DoubanFMPlayer/61ea6ae4/src/dbfmplayer.css",
}).appendTo("head");

// var dbfmplayerSetting = {
// 	"title": "茜さす 帰路照らされど…",
// 	"singer": "椎名林檎",
// 	"album_pic_url": "https://img1.doubanio.com/lpic/s2722629.jpg",
// 	"music_url": "http://mr3.doubanio.com/ff7730a714d4e3ecbf3f5854f6154532/0/fm/song/p1033017_128k.mp4"
// };

var musicVar="";
musicVar += "<div id=\"dbfmplayer-containner\">";
musicVar += "				<div id=\"dbfmplayer-left\">";
musicVar += "					<div id=\"dbfmplayer-title\">";
musicVar += "						"+dbfmplayerSetting.title;
musicVar += "					<\/div>";
musicVar += "					<div id=\"dbfmplayer-singer\">";
musicVar += "						"+dbfmplayerSetting.singer;
musicVar += "					<\/div>";
musicVar += "					<div id=\"dbfmplayer-bar\">";
musicVar += "						<div id=\"dbfmplayer-wrapper\">";
musicVar += "							<span id=\"dbfmplayer-time\">-00:00<\/span>";
musicVar += "						<\/div>";
musicVar += "						<div id=\"dbfmplayer-wrapper\">";
musicVar += "							<span id=\"dbfmplayer-volume-slider\">";
musicVar += "							<svg viewBox=\"0,0,18,18\" height=\"11\" width=\"15\" style=\"vertical-align: middle;\"><desc><\/desc><g id=\"outbox\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\"><g id=\"inbox\" transform=\"translate(0.000000, 0.000000) scale(1.4)\" fill=\"#919191\"><path d=\"M4.39035714,1.10464215 L1.5,4 L0.5,4 C0.302857143,4 0,4 0,4.5 L0,7.5 C0,8 0.302857143,8 0.5,8 L1.5,8 L4.39035714,10.8952903 C4.4925,10.9974324 4.64607143,11.0281465 4.77964286,10.9727897 C4.91321429,10.917433 5,10.7874338 5,10.642792 L5,1.35714044 C5,1.2128557 4.91285714,1.08249944 4.77964286,1.02714267 C4.73535714,1.00892851 4.68892857,1 4.64285714,1 C4.55,1 4.45857143,1.03642833 4.39035714,1.10464215 Z\" id=\"Shape\" transform=\"translate(2.500000, 6.000000) scale(1, -1) translate(-2.500000, -6.000000) \"><\/path><path d=\"M7.12915286,8.59484045 C7.22027735,8.70345348 7.35098117,8.7596009 7.48306566,8.7596009 C7.58707645,8.7596009 7.69154746,8.72462382 7.77806971,8.65282876 C8.50154297,8.04809348 9,6.99999993 9,5.99733213 C9,4.99466434 8.49141802,3.9226391 7.75091645,3.31882427 C7.55394027,3.15774562 7.2639987,3.1890409 7.10338027,3.38509663 C6.94276184,3.58207281 6.97267645,3.87201438 7.16965263,4.03263281 C7.69799061,4.46340315 7.98629522,4.99558479 8,5.99779236 C8.01370478,6.99999993 7.70397353,7.51469303 7.18714117,7.94638382 C6.99200589,8.10930337 6.96669353,8.39970517 7.12915286,8.59484045 Z\"><\/path><path d=\"M10.2816139,10.0758436 C11.3056139,9.07623551 12,8.00000011 12,5.99779236 C12,3.99558461 11.3056139,2.91888899 10.2816139,1.9192809 C10.0998252,1.74209438 9.80896314,1.74531596 9.63085617,1.92756494 C9.45320943,2.10981393 9.45689123,2.40067596 9.63914022,2.5783227 C10.4864139,3.40534652 10.9724113,4.49650506 11,5.99825258 C11.0275887,7.50000011 10.4859537,8.59069843 9.63914022,9.41772225 C9.45689123,9.59536899 9.45366966,9.88669124 9.63085617,10.06848 C9.72106022,10.1605249 9.84071864,10.2065474 9.96037707,10.2065474 C10.0763537,10.2065474 10.1923303,10.1628261 10.2816139,10.0758436 Z\"><\/path><path d=\"M12.7930946,11.483671 C14.1056555,10.1089798 14.999885,8.7399225 15,5.99687191 C15.000115,3.25382132 14.1051953,1.88522427 12.7935548,0.510533034 C12.6182092,0.326903371 12.3259665,0.32 12.1427971,0.495345618 C11.9591674,0.671151461 11.9522641,0.962473708 12.1276097,1.14610337 C13.2781715,2.35143191 14.0001151,3.57113359 14,5.99687191 C13.9998849,8.42261023 13.2781715,9.64277213 12.1271494,10.8481007 C11.9518038,11.0317303 11.9587072,11.3230526 12.1423369,11.4988584 C12.2311602,11.5844602 12.3457562,11.6263407 12.4598919,11.6263407 C12.5813912,11.6263407 12.7019701,11.5784773 12.7930946,11.483671 Z\"><\/path><\/g><\/g><\/svg>";
musicVar += "							<div id=\"dbfmplayer-volume-slider-bar\"><\/div>";
musicVar += "						<\/span>";
musicVar += "					<\/div>";
musicVar += "					<div id=\"dbfmplayer-progress-bar\"><\/div>";
musicVar += "				<\/div>";
musicVar += "				<div id=\"dbfmplayer-btns\">";
musicVar += "					<div id=\"dbfmplayer-btns-left\">";
musicVar += "						<svg id=\"dbfmplayer-download\" xmlns=\"http:\/\/www.w3.org\/2000\/svg\" xmlns:xlink=\"http:\/\/www.w3.org\/1999\/xlink\" version=\"1.1\" id=\"Capa_1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 60 60\" style=\"enable-background:new 0 0 60 60;\" xml:space=\"preserve\" width=\"25px\" height=\"25px\">";
musicVar += "						<g>";
musicVar += "							<path d=\"M50.976,20.694c-0.528-9-7.947-16.194-16.892-16.194c-5.43,0-10.688,2.663-13.945,7.008   c-0.075-0.039-0.154-0.066-0.23-0.102c-0.198-0.096-0.399-0.187-0.604-0.269c-0.114-0.045-0.228-0.086-0.343-0.126   c-0.203-0.071-0.409-0.134-0.619-0.191c-0.115-0.031-0.229-0.063-0.345-0.089c-0.225-0.051-0.455-0.09-0.687-0.125   c-0.101-0.015-0.2-0.035-0.302-0.046C16.677,10.523,16.341,10.5,16,10.5c-4.963,0-9,4.037-9,9c0,0.129,0.008,0.255,0.017,0.381   C2.857,22.148,0,26.899,0,31.654C0,38.737,5.762,44.5,12.845,44.5H18c0.553,0,1-0.447,1-1s-0.447-1-1-1h-5.155   C6.865,42.5,2,37.635,2,31.654c0-4.154,2.705-8.466,6.433-10.253L9,21.13V20.5c0-0.12,0.008-0.242,0.015-0.365l0.011-0.185   l-0.013-0.194C9.007,19.671,9,19.586,9,19.5c0-3.859,3.141-7,7-7c0.309,0,0.614,0.027,0.917,0.067   c0.078,0.01,0.156,0.023,0.233,0.036c0.267,0.044,0.53,0.102,0.789,0.177c0.035,0.01,0.071,0.017,0.106,0.027   c0.285,0.087,0.563,0.197,0.835,0.321c0.071,0.032,0.14,0.067,0.21,0.101c0.24,0.119,0.475,0.249,0.702,0.396   C21.719,14.873,23,17.038,23,19.5c0,0.553,0.447,1,1,1s1-0.447,1-1c0-2.754-1.246-5.219-3.2-6.871   C24.667,8.879,29.388,6.5,34.084,6.5c7.745,0,14.178,6.135,14.849,13.888c-1.021-0.072-2.552-0.109-4.083,0.124   c-0.546,0.083-0.921,0.593-0.838,1.139c0.075,0.495,0.501,0.85,0.987,0.85c0.05,0,0.101-0.004,0.151-0.012   c2.227-0.337,4.548-0.021,4.684-0.002C54.49,23.372,58,27.661,58,32.472C58,38.001,53.501,42.5,47.972,42.5H44   c-0.553,0-1,0.447-1,1s0.447,1,1,1h3.972C54.604,44.5,60,39.104,60,32.472C60,26.983,56.173,22.06,50.976,20.694z\" fill=\"#4a4a4a\"\/>";
musicVar += "							<path d=\"M38.293,45.793L32,52.086V31.5c0-0.553-0.447-1-1-1s-1,0.447-1,1v20.586l-6.293-6.293c-0.391-0.391-1.023-0.391-1.414,0   s-0.391,1.023,0,1.414l7.999,7.999c0.092,0.093,0.203,0.166,0.326,0.217C30.74,55.474,30.87,55.5,31,55.5s0.26-0.026,0.382-0.077   c0.123-0.051,0.234-0.124,0.326-0.217l7.999-7.999c0.391-0.391,0.391-1.023,0-1.414S38.684,45.402,38.293,45.793z\" fill=\"#4a4a4a\"\/>";
musicVar += "						<\/g>";
musicVar += "						<\/svg>";
musicVar += "					<\/div>";
musicVar += "					<div id=\"dbfmplayer-btns-right\">";
musicVar += "						<svg id=\"dbfmplayer-play\" version=\"1.1\" xmlns=\"http:\/\/www.w3.org\/2000\/svg\" xmlns:xlink=\"http:\/\/www.w3.org\/1999\/xlink\" width=\"30\" height=\"30\" viewBox=\"0 0 32 32\">";
musicVar += "							<path d=\"M6 4l20 12-20 12z\" fill=\"#4a4a4a\"><\/path>";
musicVar += "						<\/svg>";
musicVar += "						<span style=\"width: 50px; display: inline-block;\"><\/span>";
musicVar += "						<svg id=\"dbfmplayer-loop\" version=\"1.1\" xmlns=\"http:\/\/www.w3.org\/2000\/svg\" xmlns:xlink=\"http:\/\/www.w3.org\/1999\/xlink\" width=\"30\" height=\"30\" viewBox=\"-5 -5 42 42\">";
musicVar += "							<path d=\"M32 12h-12l4.485-4.485c-2.267-2.266-5.28-3.515-8.485-3.515s-6.219 1.248-8.485 3.515c-2.266 2.267-3.515 5.28-3.515 8.485s1.248 6.219 3.515 8.485c2.267 2.266 5.28 3.515 8.485 3.515s6.219-1.248 8.485-3.515c0.189-0.189 0.371-0.384 0.546-0.583l3.010 2.634c-2.933 3.349-7.239 5.464-12.041 5.464-8.837 0-16-7.163-16-16s7.163-16 16-16c4.418 0 8.418 1.791 11.313 4.687l4.687-4.687v12z\" fill=\"#4a4a4a\"><\/path>";
musicVar += "						<\/svg>";
musicVar += "					<\/div>";
musicVar += "				<\/div>";
musicVar += "			<\/div>";
musicVar += "			<div id=\"dbfmplayer-right\" class=\"rotate paused\">";
musicVar += '				<img src="'+dbfmplayerSetting.album_pic_url+'">';
musicVar += "			<\/div>";
musicVar += '			<audio id=\"dbfmplayer-music\" src=\"'+dbfmplayerSetting.music_url+'" style=\"display: none;\"><\/audio>';
musicVar += "		<\/div>";

$("#dbfmplayer")[0].outerHTML = musicVar;

var music = $("#dbfmplayer-music")[0];
music.loop = true;
music.volume = 0.5;

music.onplaying = function() {
	$("#dbfmplayer-right").removeClass("paused");
}
music.onpause = function() {
	$("#dbfmplayer-right").addClass("paused");
}
music.ended = function() {
	$("#dbfmplayer-right").addClass("paused");
}
music.ontimeupdate = function() {
	var timeLeftInSeconds = music.duration - music.currentTime;
	$("#dbfmplayer-time").html("-"+formatTimeNumber(parseInt(timeLeftInSeconds/60))+":"+formatTimeNumber(parseInt(timeLeftInSeconds%60)));

	var progressBar = $("#dbfmplayer-progress-bar");
	var cp = music.currentTime / music.duration * 100; // current percentage

	progressBar.css("background", "-moz-linear-gradient(left,  rgb(107, 189, 122) 0%, rgb(107, 189, 122) "+cp+"%, #dadada "+cp+"%, #dadada "+(100-cp)+"%)")
	progressBar.css("background", "-webkit-linear-gradient(left,  rgb(107, 189, 122) 0%, rgb(107, 189, 122) "+cp+"%, #dadada "+cp+"%, #dadada "+(100-cp)+"%)")
	progressBar.css("background", "linear-gradient(to right,  rgb(107, 189, 122) 0%, rgb(107, 189, 122) "+cp+"%, #dadada "+cp+"%, #dadada "+(100-cp)+"%)")
};

function formatTimeNumber(myNumber) {
	return ("0" + myNumber).slice(-2);
}

$("#dbfmplayer-play").click(function(e) {
	if (music.paused) {
		music.play();
		$("#dbfmplayer-play").html('<path d="M4 4h10v24h-10zM18 4h10v24h-10z" fill="#4a4a4a"></path>');
	} else {
		music.pause();
		$("#dbfmplayer-play").html('<path d="M6 4l20 12-20 12z" fill="#4a4a4a"></path>');
	}
});
$("#dbfmplayer-loop").click(function(e) {
	music.loop = !music.loop;
	if (music.loop) {
		$($("#dbfmplayer-loop").children()[0]).attr("fill", "#4a4a4a");
	} else {
		$($("#dbfmplayer-loop").children()[0]).attr("fill", "rgb(155, 155, 155)");
	}
});
$("#dbfmplayer-download").click(function(e) {
	var a = $('<a href="'+music.src+'" download="'+music.src.replace(/^.*[\\\/]/, '')+'" style="display: none;">');
	a.appendTo("body");
	a.click();
	delete a;
})
$('#dbfmplayer-volume-slider-bar').click(function(e) {
	if (music.readyState) {
		var posX = $(this).offset().left, posY = $(this).offset().top;
		var x = e.pageX - posX;

		var sliderBar = $("#dbfmplayer-volume-slider-bar");
		sliderBar.css("background", "-moz-linear-gradient(left,  #9b9b9b 0%, #9b9b9b "+x*2+"%, #e5e5e8 "+x*2+"%, #e5e5e8 "+(100-x*2)+"%)")
		sliderBar.css("background", "-webkit-linear-gradient(left,  #9b9b9b 0%, #9b9b9b "+x*2+"%, #e5e5e8 "+x*2+"%, #e5e5e8 "+(100-x*2)+"%)")
		sliderBar.css("background", "linear-gradient(to right,  #9b9b9b 0%, #9b9b9b "+x*2+"%, #e5e5e8 "+x*2+"%, #e5e5e8 "+(100-x*2)+"%)")

		music.volume = x*2/100;
	}
});
$('#dbfmplayer-progress-bar').click(function(e) {
	if (music.readyState) {
		var posX = $(this).offset().left, posY = $(this).offset().top;
		var x = e.pageX - posX;

		var progressBar = $("#dbfmplayer-progress-bar");
		var cp = x / parseInt(progressBar.css("width")) * 100;

		music.currentTime = music.duration * cp / 100;
		progressBar.css("background", "-moz-linear-gradient(left,  rgb(107, 189, 122) 0%, rgb(107, 189, 122) "+cp+"%, #dadada "+cp+"%, #dadada "+(100-cp)+"%)")
		progressBar.css("background", "-webkit-linear-gradient(left,  rgb(107, 189, 122) 0%, rgb(107, 189, 122) "+cp+"%, #dadada "+cp+"%, #dadada "+(100-cp)+"%)")
		progressBar.css("background", "linear-gradient(to right,  rgb(107, 189, 122) 0%, rgb(107, 189, 122) "+cp+"%, #dadada "+cp+"%, #dadada "+(100-cp)+"%)")
	}
});
})(jQuery);
