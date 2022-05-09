import {test} from 'tap'
import build from '../app/app'
import {add} from '../app/helper/sample'

test('requests the "/" route', async t => {
    const app = build()
    const response = await app.inject({
      method: 'GET',
      url: '/'
    })
    t.equal(response.statusCode, 200, 'returns a status code of 200')
})

test('add function', async t => {
    let res = add(1,2)
    t.equal(res, 3, 'added successfully');
})