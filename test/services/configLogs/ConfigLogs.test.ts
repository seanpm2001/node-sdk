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

  describe('test list', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/logs?project=soluta&config=occaecati&page=8&per_page=3')
        .reply(200, { data: {} });
      return sdk.configLogs
        .list('soluta', 'occaecati', { page: 8, perPage: 3 })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/logs?project=atque&config=hic&page=5&per_page=5')
        .reply(200, { data: {} });
      return expect(async () => await sdk.configLogs.list()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/logs?project=vero&config=enim&page=1&per_page=8')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.configLogs.list('vero', 'enim', { page: 1, perPage: 8 }),
      ).rejects.toThrow();
    });
  });

  describe('test get', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/logs/log?project=nam&config=vero&log=excepturi')
        .reply(200, { data: {} });
      return sdk.configLogs
        .get('nam', 'vero', 'excepturi')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/logs/log?project=error&config=repellat&log=ab')
        .reply(200, { data: {} });
      return expect(async () => await sdk.configLogs.get()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/logs/log?project=amet&config=quia&log=quisquam')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.configLogs.get('amet', 'quia', 'quisquam'),
      ).rejects.toThrow();
    });
  });

  describe('test rollback', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/configs/config/logs/log/rollback?project=facilis&config=beatae&log=laboriosam')
        .reply(200, { data: {} });
      return sdk.configLogs
        .rollback('facilis', 'beatae', 'laboriosam')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/configs/config/logs/log/rollback?project=ad&config=tempore&log=expedita')
        .reply(200, { data: {} });
      return expect(async () => await sdk.configLogs.rollback()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/configs/config/logs/log/rollback?project=at&config=nulla&log=alias')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.configLogs.rollback('at', 'nulla', 'alias'),
      ).rejects.toThrow();
    });
  });
});
