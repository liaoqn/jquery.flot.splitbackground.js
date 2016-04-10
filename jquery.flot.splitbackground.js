/**
 * flot插件，用于背景隔行变色
 */
;(function($) {
	var option = {
        grid: {
        	splitBackground: true,
        	splitBackgroundColor: ['#F3F3F3', '#FFF']
        }
	};
	
	function drawSplitBackground(plot, ctx) {		
		var options = plot.getOptions();
		if(options.grid.splitBackground) {
			var yAxes = plot.getYAxes();
			if(yAxes && yAxes.length > 0) {
				var ticks = yAxes[0].ticks;
				if(ticks) {
					var width = plot.width();
					var height = plot.height();
					var plotOffset = plot.getPlotOffset();
					var colNum = ticks.length - 1;
					var gridHeight = height / colNum;
					
					for(var i = 0; i < colNum; i++) {
						var color = options.grid.splitBackgroundColor[i % 2];
						ctx.fillStyle = color;
						ctx.fillRect(plotOffset.left, plotOffset.top + gridHeight * (colNum - i - 1), width, gridHeight);
					}
				}				
			}			
		}
	}	
	
    function init(plot) {
        plot.hooks.drawBackground.push(drawSplitBackground);
    }

    $.plot.plugins.push({
        init: init,
        options: option,
        name: 'splitbackground',
        version: '0.8'
    });
})(jQuery);