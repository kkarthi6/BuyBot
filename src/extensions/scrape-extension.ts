import * as fs from 'fs'
import { GluegunToolbox } from 'gluegun'
import * as schedule from 'node-schedule'

import { scrapeTarget } from '../utils/scrape-target-util'


module.exports = (toolbox: GluegunToolbox) => {
  toolbox.scrape = async (site: string) => {
    const config = JSON.parse(fs.readFileSync('./config.json', 'utf8'))
    const cronJobSchedule = config.cronSchedule

    let scraperToRun = scrapeTarget

    if (!cronJobSchedule) {
      await scraperToRun(config)
    } else {
      toolbox.print.info('Scheduled BuyBot for checkout')
      schedule.scheduleJob(cronJobSchedule, async () => {
        await scraperToRun(config)
      })
    }
  }
}
