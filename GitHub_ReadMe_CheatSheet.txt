READ ME github cheat sheet
---------------------------
Inspired by: 
https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet
https://towardsdatascience.com/the-ultimate-markdown-cheat-sheet-3d3976b31a0

README.md //mark down - markup language

-----------------------------------------------------------------------------------------
Headers:
	# H1
	## H2
	
	or
	
	Alt-H1
	======
	Alt-H2
	------
	
-----------------------------------------------------------------------------------------
Emphasis:
	*asterisks* or _underscores_ - italics
	**asterisks** - bold
	**asterisks and _underscores_** - bold and bold&italics
	~~Scratch this.~~ - strikethrough

-----------------------------------------------------------------------------------------
Lists:
	UL
	- unordered list 1
	+ unordered list 2
	* unordered list 3
	..* Unordered sub-list
	
	OL
	1. ordered list 1 
	2. ordered list 2
	..1. Ordered sub-list
	... paragraphs 

-----------------------------------------------------------------------------------------
Links:
	Google: https://www.google.com
	[I'm an inline-style link](https://www.google.com)
	[I'm an inline-style link with title](https://www.google.com "Google's Homepage")
	
	[You can use numbers for reference-style link definitions][1]
	...
	[1]: http://slashdot.org
	
-----------------------------------------------------------------------------------------
Images:
	Here's our logo (hover to see the title text):
	Inline-style: 
	![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")

	Reference-style: 
	![alt text][logo]

	[logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 2"

-----------------------------------------------------------------------------------------
Code and Syntax Highlighting:
	If you use ` ` you will make simple code highlight. (similar to //)
	If you use ``` ``` you will make more line code section. (similar to /* */)
	
	Inline `code` has `back-ticks around` it.
	
	```javascript
		var s = "JavaScript syntax highlighting";
		alert(s);
	```
	
	```php //if you use it the MD take into consideration this is PHP code

-----------------------------------------------------------------------------------------
Inline HTML:
	You can also use raw HTML in your Markdown, and it'll mostly work pretty well.
	
	<dl>
		<dt>Definition list</dt>
		<dd>Is something people use sometimes.</dd>

		<dt>Markdown in HTML</dt>
		<dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>
	</dl>
	
-----------------------------------------------------------------------------------------
Horizontal Rule <HR>:

	---
	Hyphens

	***
	Asterisks

	___
	Underscores
	
-----------------------------------------------------------------------------------------
YouTube Videos:

	They can't be added directly but you can add an image with a 
	link to the video like this:
	
	<a href="youtube video url"><img src="img src"/></a>
	
	or

	[![IMAGE ALT TEXT HERE](http://img.youtube.com/vi/YOUTUBE_VIDEO_ID_HERE/0.jpg)]
	(http://www.youtube.com/watch?v=YOUTUBE_VIDEO_ID_HERE)
	
-----------------------------------------------------------------------------------------	