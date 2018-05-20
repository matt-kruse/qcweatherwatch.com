export const wqad= {
  scrapeLink:'https://8xd8ar771c.execute-api.us-east-1.amazonaws.com/prod/xray?url=http://wqad.com/weather/forecast/&selector=',
  searchCriteria: '.entry-content>div:not([class]), .entry-content>p+p',
  stopWord:'Meteorologist',
  htmlLocationName:'#wqad-forecast'
}
export const kwqc= {
  scrapeLink: 'https://8xd8ar771c.execute-api.us-east-1.amazonaws.com/prod/xray?url=http://www.kwqc.com/weather/&selector=',
  searchCriteria: '#wxAccordion_forecast .media-body',
  stopWord: 'smart phone',
  htmlLocationName:'#kwqc-forecast'
}  