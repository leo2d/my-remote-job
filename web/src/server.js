import { Server, Model } from 'miragejs';

export function makeServer({ environment = 'development' } = {}) {
    const photoId = 370; // Math.floor(Math.random() * 1000);

    let server = new Server({
        environment,

        models: {
            job: Model,
        },

        seeds(server) {
            server.create('job', {
                _id: '131213321',
                title:
                    'Crud Maker er ew rtettryfghdgh5tyhrth rh rhrt m retre ert ert erwte',
                company:
                    'Y team er er twert er er ert et ewrtfwer34343tertret r',
                location: 'remote',
                date: '22/02/2020',
                employmentType: 'PJ',
                foundAt: '20/02/2020',
                source: 'StackOverflow',
                job_avatar: `https://i.picsum.photos/id/${photoId}/200/200.jpg`,
            });
            server.create('job', {
                _id: '32',
                title: 'Fornt end',
                company: 'qwerqwer ',
                location: 'remote',
                date: '22/02/2020',
                employmentType: 'PJ',
                foundAt: '20/02/2020',
                source: 'StackOverflow',
                job_avatar: `https://i.picsum.photos/id/${5 +
                    photoId}/200/200.jpg`,
            });
            server.create('job', {
                _id: '1313321',
                title: 'Crud Maker sdfg sdf gs',
                company: 'Y team retre ert ert erwtet w ee ter e',
                location: 'remote',
                date: '22/02/2020',
                employmentType: 'PJ',
                foundAt: '20/02/2020',
                source: 'StackOverflow',
                job_avatar: `https://i.picsum.photos/id/${photoId +
                    1}/200/200.jpg`,
            });
            server.create('job', {
                _id: '44445',
                title: 'Back End dfg sdfg fg sdfg sdfg',
                company: 'Y qweqweqwe',
                location: 'remote',
                date: '22/02/2020',
                employmentType: 'PJ',
                foundAt: '20/02/2020',
                source: 'StackOverflow',
                job_avatar: `https://i.picsum.photos/id/${photoId +
                    8}/200/200.jpg`,
            });
            server.create('job', {
                _id: '788',
                title: 'Fornt end sdf gsdfg sdfg ',
                company: 'qwerqwer ',
                location: 'remote',
                date: '22/02/2020',
                employmentType: 'PJ',
                foundAt: '20/02/2020',
                source: 'StackOverflow',
                job_avatar: `https://i.picsum.photos/id/${3 +
                    photoId}/200/200.jpg`,
            });
            server.create('job', {
                _id: '22124',
                title: 'Back End',
                company: 'Y qweqweqwe',
                location: 'remote',
                date: '22/02/2020',
                employmentType: 'PJ',
                foundAt: '20/02/2020',
                source: 'StackOverflow',
                job_avatar: `https://i.picsum.photos/id/${photoId +
                    4}/200/200.jpg`,
            });
            server.create('job', {
                _id: '3902',
                title: 'Fornt end dfg sdfg sdsdfg dfg sd fgfs df',
                company: 'qwerqwer ',
                location: 'remote',
                date: '22/02/2020',
                employmentType: 'PJ',
                foundAt: '20/02/2020',
                source: 'StackOverflow',
                job_avatar: `https://i.picsum.photos/id/${photoId -
                    2}/200/200.jpg`,
            });
            server.create('job', {
                _id: '1211',
                title: 'Back End sdg sdfg sdfg sdfg sdf sdg ',
                company: 'Y qweqweqwe',
                location: 'remote',
                date: '22/02/2020',
                employmentType: 'PJ',
                foundAt: '20/02/2020',
                source: 'StackOverflow',
                job_avatar: `https://i.picsum.photos/id/${photoId -
                    1}/200/200.jpg`,
            });
            server.create('job', {
                _id: '372',
                title: 'Fornt end',
                company: 'qwerqwer ',
                location: 'remote',
                date: '22/02/2020',
                employmentType: 'PJ',
                foundAt: '20/02/2020',
                source: 'StackOverflow',
                job_avatar: `https://i.picsum.photos/id/${photoId +
                    10}/200/200.jpg`,
            });
            server.create('job', {
                _id: '22',
                title: 'Back End',
                company: 'Y qweqweqwe',
                location: 'remote',
                date: '22/02/2020',
                employmentType: 'PJ',
                foundAt: '20/02/2020',
                source: 'StackOverflow',
                job_avatar: `https://i.picsum.photos/id/${photoId +
                    11}/200/200.jpg`,
            });
            server.create('job', {
                _id: '443',
                title: 'Fornt end re twer tete',
                company: 'qwerqwer ',
                location: 'Toronto, CA',
                date: '22/02/2020',
                employmentType: 'PJ',
                foundAt: '20/02/2020',
                source: 'StackOverflow',
                job_avatar: `https://i.picsum.photos/id/${photoId +
                    12}/200/200.jpg`,
            });
            server.create('job', {
                _id: '666',
                title: 'Back End',
                company: 'Y qweqweqwe',
                location: 'remote',
                date: '22/02/2020',
                employmentType: 'PJ',
                foundAt: '20/02/2020',
                source: 'StackOverflow',
                job_avatar: `https://i.picsum.photos/id/${photoId +
                    13}/200/200.jpg`,
            });
        },

        routes() {
            this.urlPrefix = `http://localhost:3333/`;
            this.namespace = `api`;

            this.get('/jobs', schema => {
                return schema.jobs.all();
            });
        },
    });

    return server;
}
