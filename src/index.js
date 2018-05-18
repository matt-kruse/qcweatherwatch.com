import $ from 'jquery'
import {kwqc, wqad} from './weather-constants'

function scrapeWeather({scrapeLink, searchCriteria, stopWord, htmlLocationName}) {
  $.get(scrapeLink + encodeURIComponent(searchCriteria) + '@html')
  .done(function(data = {}) {
    buildHTML(data.content, stopWord, htmlLocationName)
  })
}

function buildHTML(content, stopWord, placeInHTML) {
  let html = ''
  
  content.every(function(paragraph) {
    const atEnd = !paragraph.startsWith(stopWord)

    return atEnd ? html += '<p>' + paragraph + '</p>': atEnd
  })

  $(placeInHTML).html(html)
}

scrapeWeather(kwqc)
scrapeWeather(wqad)