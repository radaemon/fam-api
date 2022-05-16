import dotenv from 'dotenv'
import { it } from 'mocha'
import { assert, expect } from 'chai'
import to from 'await-to-js'
import { getLooksLogsByDate } from '../LooksRare/getLogByDate'
import { dateToLooksUnixTimestamp } from 'api/utils/Date/dateConverter'

dotenv.config()

describe('Query LooksRare Daily Log By Date.', () => {
  it('Expect object to not be null.', async () => {
    const [err, res] = await to(getLooksLogsByDate(dateToLooksUnixTimestamp(new Date())))
    if (err) assert.fail(err.message)
    expect(res).to.not.be.null
  })
})
