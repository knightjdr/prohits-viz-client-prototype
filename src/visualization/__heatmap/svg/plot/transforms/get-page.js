/* GetPage takes an array of row/heatmap data, slices it in both
** dimensions to fit the display. For heatmaps it adds in the fill color value
** after mapping the value to the gradient color range, while for dotplots
** it will add the edge color and radius as well. */

const GetPage = imageType => (
  rows,
  position,
  dimensions,
  cellSize,
  edgeGradient,
  fillGradient,
  edgeRange,
  fillRange,
) => {
  const pageEnd = {
    x: position.x + dimensions.pageX,
    y: position.y + dimensions.pageY,
  };
  const circleRadius = Math.floor((cellSize / 2) - 1);
  if (imageType === 'dotplot') {
    return rows.slice(position.y, pageEnd.y).map(row => ({
      data: row.data.slice(position.x, pageEnd.x).map(item => ({
        ...item,
        edgeColor: edgeGradient[edgeRange(item.score)],
        fillColor: fillGradient[fillRange(item.value)],
        radius: typeof item.ratio === 'number' ? circleRadius * item.ratio : circleRadius,
      })),
      name: row.name,
    }));
  }
  return rows.slice(position.y, pageEnd.y).map(row => ({
    data: row.data.slice(position.x, pageEnd.x).map(item => ({
      ...item,
      fillColor: fillGradient[fillRange(item.value)],
    })),
    name: row.name,
  }));
};

export default GetPage;
