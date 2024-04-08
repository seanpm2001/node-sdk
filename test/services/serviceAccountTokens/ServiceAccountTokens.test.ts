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
        .get('/v3/workplace/service_accounts/service_account/dolor/tokens?page=4&per_page=1')
        .reply(200, { data: {} });
      return sdk.serviceAccountTokens
        .list('dolor', { page: 4, perPage: 1 })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/workplace/service_accounts/service_account/voluptates/tokens?page=4&per_page=8')
        .reply(200, { data: {} });
      return expect(async () => await sdk.serviceAccountTokens.list()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/workplace/service_accounts/service_account/voluptatem/tokens?page=5&per_page=5')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.serviceAccountTokens.list('voluptatem', { page: 5, perPage: 5 }),
      ).rejects.toThrow();
    });
  });

  describe('test create', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/workplace/service_accounts/service_account/explicabo/tokens')
        .reply(200, { data: {} });
      return sdk.serviceAccountTokens
        .create({}, 'explicabo')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/workplace/service_accounts/service_account/dolor/tokens')
        .reply(200, { data: {} });
      return expect(async () => await sdk.serviceAccountTokens.create()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/workplace/service_accounts/service_account/facilis/tokens')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.serviceAccountTokens.create({}, 'facilis'),
      ).rejects.toThrow();
    });
  });

  describe('test get', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/workplace/service_accounts/service_account/possimus/tokens/token/laborum')
        .reply(200, { data: {} });
      return sdk.serviceAccountTokens
        .get('possimus', 'laborum')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/workplace/service_accounts/service_account/ex/tokens/token/dicta')
        .reply(200, { data: {} });
      return expect(async () => await sdk.serviceAccountTokens.get()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/workplace/service_accounts/service_account/eos/tokens/token/quia')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.serviceAccountTokens.get('eos', 'quia'),
      ).rejects.toThrow();
    });
  });

  describe('test delete', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/workplace/service_accounts/service_account/velit/tokens/token/omnis')
        .reply(200, { data: {} });
      return sdk.serviceAccountTokens
        .delete('velit', 'omnis')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/workplace/service_accounts/service_account/aliquid/tokens/token/officiis')
        .reply(200, { data: {} });
      return expect(async () => await sdk.serviceAccountTokens.delete()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/workplace/service_accounts/service_account/cum/tokens/token/animi')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.serviceAccountTokens.delete('cum', 'animi'),
      ).rejects.toThrow();
    });
  });
});
