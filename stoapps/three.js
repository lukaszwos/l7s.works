d3.select('#adata').on('mouseover', function() {
	d3.select('#right').transition().attr('x', 29);
	d3.select('#left').transition().attr('x', 9).attr('y', 145);
	d3.select('#front').attr('fill', "url(#grad1)");
	
})

d3.select('#adata').on('mouseout', function() {
	d3.select('#right').transition().attr('x', 20.5286153);
	d3.select('#left').transition().attr('x', 20.5286153).attr('y', 137);
	d3.select('#front').transition().attr('fill', "#1347FE");
})