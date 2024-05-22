import nock from 'nock';

import { DopplerSDK } from '../../../src';

import { ConfigLogsService } from '../../../src/services/configLogs/ConfigLogs';

describe('test ConfigLogsService object', () => {
  it('should be an object', () => {
    expect(typeof ConfigLogsService).toBe('function');
  });
});

describe('test ConfigLogs', () => {
  let sdk: any;

  beforeEach(() => {
    sdk = new DopplerSDK({});

    nock.cleanAll();
  });

  describe('test get', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/logs/log?project=praesentium&config=natus&log=odio')
        .reply(200, { data: {} });
      return sdk.configLogs
        .get('praesentium', 'natus', 'odio')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/logs/log?project=error&config=illo&log=quasi')
        .reply(200, { data: {} });
      return expect(async () => await sdk.configLogs.get()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/logs/log?project=in&config=exercitationem&log=numquam')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.configLogs.get('in', 'exercitationem', 'numquam'),
      ).rejects.toThrow();
    });
  });

  describe('test list', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/logs?project=fugiat&config=alias&page=3&per_page=5')
        .reply(200, { data: {} });
      return sdk.configLogs
        .list('fugiat', 'alias', { page: 3, perPage: 5 })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/logs?project=eum&config=unde&page=9&per_page=2')
        .reply(200, { data: {} });
      return expect(async () => await sdk.configLogs.list()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/logs?project=porro&config=expedita&page=3&per_page=1')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.configLogs.list('porro', 'expedita', { page: 3, perPage: 1 }),
      ).rejects.toThrow();
    });
  });

  describe('test rollback', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/configs/config/logs/log/rollback?project=harum&config=est&log=ratione')
        .reply(200, { data: {} });
      return sdk.configLogs
        .rollback('harum', 'est', 'ratione')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/configs/config/logs/log/rollback?project=sed&config=adipisci&log=illo')
        .reply(200, { data: {} });
      return expect(async () => await sdk.configLogs.rollback()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/configs/config/logs/log/rollback?project=illo&config=repudiandae&log=pariatur')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.configLogs.rollback('illo', 'repudiandae', 'pariatur'),
      ).rejects.toThrow();
    });
  });
});
