# [QCWeatherWatch](http://qcweatherwatch.com/)

An at-a-glimpse breakdown of upcoming weather conditions based on local weather providers. Created with love and web-scraping.

## Contributing

This project is free of production dependencies and has a simple babel and webpack configuration to allow developers to write latest JavaScript syntax without worrying about browser support.

### Installation

1. With [NodeJS](https://www.nodejs.org) installed, run the command `yarn install` or `npm install` in the root of the directory.

1. Start development with `yarn build:watch`.  This watches changes to `src/index.js` as well as any files that this file imports.

1. That's it! Now any saved changes made to `src/index.js` will automatically trigger a new *unoptimized* build in `dist/bundle.js`. To view your changes along the way in a browser, open up `dist/index.html`.

### Adding another weather provider

To keep `src/index.js` tidy, this project relies on an opinionated configuration.  This configuration is located in `src/weather-constants.js`:

key | value | description
--- | --- | ---
scrapeLink | String:url | A link to your service that handles scraping the webpage
searchCriteria | String: div/id | Where to begin scraping
stopWord | String?: word | optional: The word/phrase in which to stop scraping on.
htmlLocationName | String:HTMLElement | Where in `dist/index.html` to insert the data.

### Submitting changes

As mentioned above, running `yarn build:watch` will create an _unoptimized_ build . This is ideal for development since the build times are faster, at the expense of them being larger. To create an _optimized_ build for production eg, one that is smaller, simply run the command `yarn build` (check it out in `dist/bundle.js`!).  This is preferred before submitting changes and will possibly to integrated in a `prepush` script.