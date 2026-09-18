import { GluegunToolbox } from 'gluegun'
import { TARGET } from '../contants'

module.exports = {
  name: 'scrape',
  alias: ['s'],
  description: 'Runs the webscraper for Target',
  run: async (toolbox: GluegunToolbox) => {
    // retrieve the tools from the toolbox that we will need
    const { scrape } = toolbox

    console.log('Starting Target scraper...');
    await scrape(TARGET).catch(e => console.error(e));
  }
}
