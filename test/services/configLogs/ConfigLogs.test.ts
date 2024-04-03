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
        .get('/v3/configs/config/logs/log?project=alias&config=alias&log=deserunt')
        .reply(200, { data: {} });
      return sdk.configLogs
        .get('alias', 'alias', 'deserunt')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/logs/log?project=saepe&config=voluptatum&log=saepe')
        .reply(200, { data: {} });
      return expect(async () => await sdk.configLogs.get()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/logs/log?project=reprehenderit&config=accusamus&log=animi')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.configLogs.get('reprehenderit', 'accusamus', 'animi'),
      ).rejects.toThrow();
    });
  });

  describe('test list', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/logs?project=quasi&config=excepturi&page=7&per_page=7')
        .reply(200, { data: {} });
      return sdk.configLogs
        .list('quasi', 'excepturi', { page: 7, perPage: 7 })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/logs?project=eius&config=facere&page=9&per_page=9')
        .reply(200, { data: {} });
      return expect(async () => await sdk.configLogs.list()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/logs?project=beatae&config=architecto&page=4&per_page=1')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.configLogs.list('beatae', 'architecto', { page: 4, perPage: 1 }),
      ).rejects.toThrow();
    });
  });

  describe('test rollback', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/configs/config/logs/log/rollback?project=quas&config=error&log=excepturi')
        .reply(200, { data: {} });
      return sdk.configLogs
        .rollback('quas', 'error', 'excepturi')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .post(
          '/v3/configs/config/logs/log/rollback?project=tempore&config=necessitatibus&log=soluta',
        )
        .reply(200, { data: {} });
      return expect(async () => await sdk.configLogs.rollback()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/configs/config/logs/log/rollback?project=omnis&config=expedita&log=saepe')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.configLogs.rollback('omnis', 'expedita', 'saepe'),
      ).rejects.toThrow();
    });
  });
});
