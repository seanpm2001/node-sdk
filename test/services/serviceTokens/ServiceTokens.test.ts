import nock from 'nock';

import { DopplerSDK } from '../../../src';

import { ServiceTokensService } from '../../../src/services/serviceTokens/ServiceTokens';

describe('test ServiceTokensService object', () => {
  it('should be an object', () => {
    expect(typeof ServiceTokensService).toBe('function');
  });
});

describe('test ServiceTokens', () => {
  let sdk: any;

  beforeEach(() => {
    sdk = new DopplerSDK({});

    nock.cleanAll();
  });

  describe('test delete', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/configs/config/tokens/token')
        .reply(200, { data: {} });
      return sdk.serviceTokens.delete({}).then((r: any) => expect(r.data).toEqual({}));
    });
  });

  describe('test list', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/tokens?project=ea&config=non')
        .reply(200, { data: {} });
      return sdk.serviceTokens.list('ea', 'non').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/tokens?project=quas&config=nulla')
        .reply(200, { data: {} });
      return expect(async () => await sdk.serviceTokens.list()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/tokens?project=expedita&config=at')
        .reply(404, { data: {} });
      return expect(async () => await sdk.serviceTokens.list('expedita', 'at')).rejects.toThrow();
    });
  });

  describe('test create', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/configs/config/tokens')
        .reply(200, { data: {} });
      return sdk.serviceTokens.create({}).then((r: any) => expect(r.data).toEqual({}));
    });
  });
});
