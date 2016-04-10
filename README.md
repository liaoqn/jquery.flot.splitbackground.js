# jquery.flot.splitbackground.js
支持flot隔行换色背景插件

使用方式
=====
如下，向grid中增加 splitBackground 和 splitBackgroundColor 两个参数。splitBackground 表示是否使用隔行变色，值为 true 或 false；splitBackgroundColor 表示隔行变色的颜色，值为数组，需两个元素。

    grid: {
		splitBackground: true,
		splitBackgroundColor: ['#F3F3F3', '#FFF']
	}

加入该插件后，默认隔行变色，背景分别为'#F3F3F3'、'#FFF'。