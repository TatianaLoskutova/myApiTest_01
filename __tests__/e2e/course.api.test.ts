import request from 'supertest'
import {app} from '../../src';

describe('/course', () => {
    beforeAll(async () => {
        await request(app).delete('/__test__/data')
    })

    it('should return 200 and empty array', async () => {
        await request(app)
            .get('/courses')
            .expect(200, [])
    })

    it('should return 404 for not existing course', async () => {
        await request(app)
            .get('/courses/1')
            .expect(404)
    })

    it('should not create course with incorrect input data', async () => {
        await request(app)
            .post('/courses')
            .send( {title: 'new course'} )
            .expect(400)
    })

})