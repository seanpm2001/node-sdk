import nock from 'nock';

import { DopplerSDK } from '../../../src';

import { ProjectsService } from '../../../src/services/projects/Projects';

describe('test ProjectsService object', () => {
  it('should be an object', () => {
    expect(typeof ProjectsService).toBe('function');
  });
});

describe('test Projects', () => {
  let sdk: any;

  beforeEach(() => {
    sdk = new DopplerSDK({});

    nock.cleanAll();
  });

  describe('test list', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/projects?page=2&per_page=6')
        .reply(200, { data: {} });
      return sdk.projects
        .list({ page: 2, perPage: 6 })
        .then((r: any) => expect(r.data).toEqual({}));
    });
  });

  describe('test create', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com').post('/v3/projects').reply(200, { data: {} });
      return sdk.projects.create({}).then((r: any) => expect(r.data).toEqual({}));
    });
  });

  describe('test get', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/projects/project?project=deserunt')
        .reply(200, { data: {} });
      return sdk.projects.get('deserunt').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/projects/project?project=cumque')
        .reply(200, { data: {} });
      return expect(async () => await sdk.projects.get()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/projects/project?project=libero')
        .reply(404, { data: {} });
      return expect(async () => await sdk.projects.get('libero')).rejects.toThrow();
    });
  });

  describe('test update', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/projects/project')
        .reply(200, { data: {} });
      return sdk.projects.update({}).then((r: any) => expect(r.data).toEqual({}));
    });
  });

  describe('test delete', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/projects/project')
        .reply(200, { data: {} });
      return sdk.projects.delete({}).then((r: any) => expect(r.data).toEqual({}));
    });
  });
});
