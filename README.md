# DoubanFMPlayer

A mimic of Douban.fm player on [Douban.fm](https://douban.fm/). *Also a Flex practice project.*

  **All copyright of the design belongs to who creates it.** 

  Any copyright issue, please contact [hi@chengkang.me](mailto:hi@chengkang.me).

## Showcase
Click [here](http://chengkang.me/DoubanFMPlayer/) to check live demo.
### Dark Theme (the color of the player is dark, used in light color web page)
![](https://raw.githubusercontent.com/cheng-kang/DoubanFMPlayer/master/DBFMPlayer-1.gif)

### Light Theme (the color of the player is light, used in dark color web page)
![](https://raw.githubusercontent.com/cheng-kang/DoubanFMPlayer/master/DBFMPlayer-2.gif)

## Usage

Feel free to download source code from `/src` folder.

Alternatively, use the cdn I've set up:
```
dbfmplayer.js: http://7u2sl0.com1.z0.glb.clouddn.com/dbfmplayer/dbfmplayer.js
dbfmplayer-dark.css: http://7u2sl0.com1.z0.glb.clouddn.com/dbfmplayer/dbfmplayer-dark.css
dbfmplayer-light.css: http://7u2sl0.com1.z0.glb.clouddn.com/dbfmplayer/dbfmplayer-light.css
```
    
    
### 1. Use it on your website
1. Add `<div id="dbfmplayer"></div>` to your HTML file
2. Add the following script to your HTML file. Note that **you must specify settings** for this player to work properly. Follow the example below.
    ```
    <script type="text/javascript">
        // dbfmplayerSetting: an object for the player to set up things
        //     title: the title of your music
        //     singer: the name of the singer of this song
        //     album_pic_url: a valid url for the picture you want to show for this song
        //     music_url: a valid url for the music file
        //     theme: (optional) dark / light, by default (if you leave it empty) the value is dark
    	var dbfmplayerSetting = {
    		"title": "How Long Will I Love You",
    		"singer": "Ellie Goulding",
    		"album_pic_url": "http://wx2.sinaimg.cn/mw690/643ec13dgy1fce044w2ckj215o15o15i.jpg",
    		"music_url": "http://d.mimp3.me/d/166259042_655898541/preview.mp3",
    		"theme": "dark" // light or dark, default is dark
    	};
    
    	(function() { // DON'T EDIT BELOW THIS LINE
    	var d = document, s = d.createElement('script');
    	s.src = 'http://7u2sl0.com1.z0.glb.clouddn.com/dbfmplayer/dbfmplayer.js';
    	(d.head || d.body).appendChild(s);
    	})();
    </script>
    ```
    
### 2. Embed it in your Hexo theme

1. Add the following script to your layout file for **Post** (or anywhere else you want):
    ```
    <% 
        for (var i = 0; i<site.data.musics.length; i++) {
            if (site.data.musics[i].post === page.title) { 
    %>
                <div id="dbfmplayer"></div>
                <script type="text/javascript">
                var dbfmplayerSetting = {
                  "title": "<%- site.data.musics[i].title %>",
                  "singer": "<%- site.data.musics[i].singer %>",
                  "album_pic_url": "<%- site.data.musics[i].album %>",
                  "music_url": "<%- site.data.musics[i].music %>"
                };
    
                (function() { // DON'T EDIT BELOW THIS LINE
                var d = document, s = d.createElement('script');
                s.src = 'http://7u2sl0.com1.z0.glb.clouddn.com/dbfmplayer/dbfmplayer.js';
                (d.head || d.body).appendChild(s);
                })();
            </script>
    <% 
            break;
          } 
        }
    %>
    ```
2. Create a folder named `_data` in the `source` folder in your `Hexo` blog directory.
3. Create a `musics.json` file in the `_data` folder you just created.
4. Add music data to `musics.json` for your blog. Fill it with data like this:
    ```
    [
       {
          "post": "QnA，一个 Hexo FAQ 主题",
          "title": "茜さす 帰路照らされど…",
          "singer": "椎名林檎",
          "album": "https://img1.doubanio.com/lpic/s2722629.jpg",
          "music": "http://mr3.doubanio.com/ff7730a714d4e3ecbf3f5854f6154532/0/fm/song/p1033017_128k.mp4"
       }
    ]
    ```
    Each object should have all those **five** keys.
    
    - `post` should be **the title of the post** in which you want to add an player
    - `title`, `singer`, `album`, `music` you can easily figure out what the values should be : D
