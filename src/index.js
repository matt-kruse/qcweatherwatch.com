import $ from 'jquery'

$.get('https://8xd8ar771c.execute-api.us-east-1.amazonaws.com/prod/xray?url=http://wqad.com/weather/forecast/&selector=' + encodeURIComponent('.entry-content>div:not([class]), .entry-content>p+p') + '@html', function (data) {
  if (data && data.content) {
    var html = '';
    for (var i = 0; i < data.content.length; i++) {
      if (data.content[i].indexOf('Chief') >= 0) {
        break;
      }
      html += '<p>' + data.content[i]; + '</p>';
    }
    $('#wqad-forecast').html(html);
  }
});

$.get('https://8xd8ar771c.execute-api.us-east-1.amazonaws.com/prod/xray?url=http://www.kwqc.com/weather/&selector=' + encodeURIComponent("#wxAccordion_forecast .media-body") + '@html', function (data) {
  if (data && data.content) {
    var html = '';
    for (var i = 0; i < data.content.length; i++) {
      if (data.content[i].indexOf('smart phone') >= 0) {
        break;
      }
      html += '<p>' + data.content[i]; + '</p>';
    }
    $('#kwqc-forecast').html(html);
  }
});