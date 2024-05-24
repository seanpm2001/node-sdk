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
        .get('/v3/configs/config/logs/log?project=tenetur&config=iusto&log=in')
        .reply(200, { data: {} });
      return sdk.configLogs
        .get('tenetur', 'iusto', 'in')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/logs/log?project=beatae&config=quo&log=perspiciatis')
        .reply(200, { data: {} });
      return expect(async () => await sdk.configLogs.get()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/logs/log?project=repudiandae&config=quibusdam&log=autem')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.configLogs.get('repudiandae', 'quibusdam', 'autem'),
      ).rejects.toThrow();
    });
  });

  describe('test list', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/logs?project=at&config=tempore&page=2&per_page=2')
        .reply(200, { data: {} });
      return sdk.configLogs
        .list('at', 'tempore', { page: 2, perPage: 2 })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/logs?project=nisi&config=tempora&page=4&per_page=6')
        .reply(200, { data: {} });
      return expect(async () => await sdk.configLogs.list()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/logs?project=minus&config=explicabo&page=4&per_page=3')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.configLogs.list('minus', 'explicabo', { page: 4, perPage: 3 }),
      ).rejects.toThrow();
    });
  });

  describe('test rollback', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/configs/config/logs/log/rollback?project=esse&config=est&log=sed')
        .reply(200, { data: {} });
      return sdk.configLogs
        .rollback('esse', 'est', 'sed')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/configs/config/logs/log/rollback?project=corporis&config=ipsam&log=hic')
        .reply(200, { data: {} });
      return expect(async () => await sdk.configLogs.rollback()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/configs/config/logs/log/rollback?project=facere&config=error&log=nesciunt')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.configLogs.rollback('facere', 'error', 'nesciunt'),
      ).rejects.toThrow();
    });
  });
});
