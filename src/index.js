import $ from 'jquery'
import {kwqc, wqad} from './weather-constants'

function scrapeWeather(endpoint, searchCriteria) {
  $.get(endpoint + encodeURIComponent(searchCriteria) + '@html')
  .done(function(data = {}) {
    buildHTML(data.content)
  })
}

scrapeWeather(wqad.scrapeLink, wqad.searchCriteria)



function buildHTML(content) {
  var html = '';
  for (var i = 0; i < content.length; i++) {
    if (content[i].indexOf('Chief') >= 0) {
      break;
    }
    html += '<p>' + content[i]; + '</p>';
  }
  $('#wqad-forecast').html(html);
}

$.get( kwqc.scrapeLink + encodeURIComponent("#wxAccordion_forecast .media-body") + '@html', function (data = {}) {
  if (data.content) {
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