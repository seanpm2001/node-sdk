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
        .get('/v3/workplace/service_accounts/service_account/quam/tokens?page=5&per_page=4')
        .reply(200, { data: {} });
      return sdk.serviceAccountTokens
        .list('quam', { page: 5, perPage: 4 })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get(
          '/v3/workplace/service_accounts/service_account/exercitationem/tokens?page=1&per_page=9',
        )
        .reply(200, { data: {} });
      return expect(async () => await sdk.serviceAccountTokens.list()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/workplace/service_accounts/service_account/accusamus/tokens?page=2&per_page=6')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.serviceAccountTokens.list('accusamus', { page: 2, perPage: 6 }),
      ).rejects.toThrow();
    });
  });

  describe('test create', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/workplace/service_accounts/service_account/asperiores/tokens')
        .reply(200, { data: {} });
      return sdk.serviceAccountTokens
        .create({}, 'asperiores')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/workplace/service_accounts/service_account/magni/tokens')
        .reply(200, { data: {} });
      return expect(async () => await sdk.serviceAccountTokens.create()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/workplace/service_accounts/service_account/nam/tokens')
        .reply(404, { data: {} });
      return expect(async () => await sdk.serviceAccountTokens.create({}, 'nam')).rejects.toThrow();
    });
  });

  describe('test get', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/workplace/service_accounts/service_account/aspernatur/tokens/token/saepe')
        .reply(200, { data: {} });
      return sdk.serviceAccountTokens
        .get('aspernatur', 'saepe')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/workplace/service_accounts/service_account/vero/tokens/token/distinctio')
        .reply(200, { data: {} });
      return expect(async () => await sdk.serviceAccountTokens.get()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/workplace/service_accounts/service_account/vel/tokens/token/dolore')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.serviceAccountTokens.get('vel', 'dolore'),
      ).rejects.toThrow();
    });
  });

  describe('test delete', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/workplace/service_accounts/service_account/impedit/tokens/token/quam')
        .reply(200, { data: {} });
      return sdk.serviceAccountTokens
        .delete('impedit', 'quam')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/workplace/service_accounts/service_account/molestias/tokens/token/inventore')
        .reply(200, { data: {} });
      return expect(async () => await sdk.serviceAccountTokens.delete()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/workplace/service_accounts/service_account/voluptates/tokens/token/nobis')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.serviceAccountTokens.delete('voluptates', 'nobis'),
      ).rejects.toThrow();
    });
  });
});
