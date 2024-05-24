import nock from 'nock';

import { DopplerSDK } from '../../../src';

import { ServiceAccountTokensService } from '../../../src/services/serviceAccountTokens/ServiceAccountTokens';

describe('test ServiceAccountTokensService object', () => {
  it('should be an object', () => {
    expect(typeof ServiceAccountTokensService).toBe('function');
  });
});

describe('test ServiceAccountTokens', () => {
  let sdk: any;

  beforeEach(() => {
    sdk = new DopplerSDK({});

    nock.cleanAll();
  });

  describe('test list', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/workplace/service_accounts/service_account/vitae/tokens?page=2&per_page=6')
        .reply(200, { data: {} });
      return sdk.serviceAccountTokens
        .list('vitae', { page: 2, perPage: 6 })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/workplace/service_accounts/service_account/repellat/tokens?page=3&per_page=4')
        .reply(200, { data: {} });
      return expect(async () => await sdk.serviceAccountTokens.list()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/workplace/service_accounts/service_account/fugit/tokens?page=5&per_page=6')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.serviceAccountTokens.list('fugit', { page: 5, perPage: 6 }),
      ).rejects.toThrow();
    });
  });

  describe('test create', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/workplace/service_accounts/service_account/iusto/tokens')
        .reply(200, { data: {} });
      return sdk.serviceAccountTokens
        .create({}, 'iusto')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/workplace/service_accounts/service_account/omnis/tokens')
        .reply(200, { data: {} });
      return expect(async () => await sdk.serviceAccountTokens.create()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/workplace/service_accounts/service_account/provident/tokens')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.serviceAccountTokens.create({}, 'provident'),
      ).rejects.toThrow();
    });
  });

  describe('test get', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/workplace/service_accounts/service_account/consequatur/tokens/token/ad')
        .reply(200, { data: {} });
      return sdk.serviceAccountTokens
        .get('consequatur', 'ad')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/workplace/service_accounts/service_account/necessitatibus/tokens/token/itaque')
        .reply(200, { data: {} });
      return expect(async () => await sdk.serviceAccountTokens.get()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/workplace/service_accounts/service_account/libero/tokens/token/ab')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.serviceAccountTokens.get('libero', 'ab'),
      ).rejects.toThrow();
    });
  });

  describe('test delete', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/workplace/service_accounts/service_account/ratione/tokens/token/molestias')
        .reply(200, { data: {} });
      return sdk.serviceAccountTokens
        .delete('ratione', 'molestias')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/workplace/service_accounts/service_account/ut/tokens/token/ad')
        .reply(200, { data: {} });
      return expect(async () => await sdk.serviceAccountTokens.delete()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/workplace/service_accounts/service_account/molestias/tokens/token/modi')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.serviceAccountTokens.delete('molestias', 'modi'),
      ).rejects.toThrow();
    });
  });
});
