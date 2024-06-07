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
        .get('/v3/workplace/service_accounts/service_account/iure/tokens?page=2&per_page=9')
        .reply(200, { data: {} });
      return sdk.serviceAccountTokens
        .list('iure', { page: 2, perPage: 9 })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/workplace/service_accounts/service_account/eveniet/tokens?page=6&per_page=7')
        .reply(200, { data: {} });
      return expect(async () => await sdk.serviceAccountTokens.list()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/workplace/service_accounts/service_account/nesciunt/tokens?page=5&per_page=1')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.serviceAccountTokens.list('nesciunt', { page: 5, perPage: 1 }),
      ).rejects.toThrow();
    });
  });

  describe('test create', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/workplace/service_accounts/service_account/excepturi/tokens')
        .reply(200, { data: {} });
      return sdk.serviceAccountTokens
        .create({}, 'excepturi')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/workplace/service_accounts/service_account/facilis/tokens')
        .reply(200, { data: {} });
      return expect(async () => await sdk.serviceAccountTokens.create()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/workplace/service_accounts/service_account/laboriosam/tokens')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.serviceAccountTokens.create({}, 'laboriosam'),
      ).rejects.toThrow();
    });
  });

  describe('test get', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/workplace/service_accounts/service_account/assumenda/tokens/token/perferendis')
        .reply(200, { data: {} });
      return sdk.serviceAccountTokens
        .get('assumenda', 'perferendis')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/workplace/service_accounts/service_account/inventore/tokens/token/voluptates')
        .reply(200, { data: {} });
      return expect(async () => await sdk.serviceAccountTokens.get()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/workplace/service_accounts/service_account/eos/tokens/token/quaerat')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.serviceAccountTokens.get('eos', 'quaerat'),
      ).rejects.toThrow();
    });
  });

  describe('test delete', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/workplace/service_accounts/service_account/harum/tokens/token/cum')
        .reply(200, { data: {} });
      return sdk.serviceAccountTokens
        .delete('harum', 'cum')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/workplace/service_accounts/service_account/asperiores/tokens/token/culpa')
        .reply(200, { data: {} });
      return expect(async () => await sdk.serviceAccountTokens.delete()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .delete(
          '/v3/workplace/service_accounts/service_account/exercitationem/tokens/token/blanditiis',
        )
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.serviceAccountTokens.delete('exercitationem', 'blanditiis'),
      ).rejects.toThrow();
    });
  });
});
