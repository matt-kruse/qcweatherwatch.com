import {kwqc, wqad} from './weather-constants'

function scrapeWeather({scrapeLink, searchCriteria, stopWord, htmlLocationName}) {
  fetch(scrapeLink + encodeURIComponent(searchCriteria) + '@html')
  .then(res => res.json())
  .then(data => {
    buildHTML(data.content, stopWord, htmlLocationName)
  })
}

function buildHTML(content, stopWord, placeInHTML) {
  let html = ''
  content.every(function(paragraph) {
    const atEnd = !paragraph.includes(stopWord)

    return atEnd ? html += '<p>' + paragraph + '</p>': atEnd
  })

  document.querySelector(placeInHTML).innerHTML = html
}

scrapeWeather(kwqc)
scrapeWeather(wqad)