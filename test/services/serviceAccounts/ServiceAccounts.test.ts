import nock from 'nock';

import { DopplerSDK } from '../../../src';

import { ServiceAccountsService } from '../../../src/services/serviceAccounts/ServiceAccounts';

describe('test ServiceAccountsService object', () => {
  it('should be an object', () => {
    expect(typeof ServiceAccountsService).toBe('function');
  });
});

describe('test ServiceAccounts', () => {
  let sdk: any;

  beforeEach(() => {
    sdk = new DopplerSDK({});

    nock.cleanAll();
  });

  describe('test get', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/workplace/service_accounts/service_account/asperiores')
        .reply(200, { data: {} });
      return sdk.serviceAccounts.get('asperiores').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/workplace/service_accounts/service_account/laudantium')
        .reply(200, { data: {} });
      return expect(async () => await sdk.serviceAccounts.get()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/workplace/service_accounts/service_account/architecto')
        .reply(404, { data: {} });
      return expect(async () => await sdk.serviceAccounts.get('architecto')).rejects.toThrow();
    });
  });

  describe('test delete', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/workplace/service_accounts/service_account/facere')
        .reply(200, { data: {} });
      return sdk.serviceAccounts.delete('facere').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/workplace/service_accounts/service_account/illum')
        .reply(200, { data: {} });
      return expect(async () => await sdk.serviceAccounts.delete()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/workplace/service_accounts/service_account/veniam')
        .reply(404, { data: {} });
      return expect(async () => await sdk.serviceAccounts.delete('veniam')).rejects.toThrow();
    });
  });

  describe('test update', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .patch('/v3/workplace/service_accounts/service_account/accusamus')
        .reply(200, { data: {} });
      return sdk.serviceAccounts
        .update({}, 'accusamus')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .patch('/v3/workplace/service_accounts/service_account/voluptate')
        .reply(200, { data: {} });
      return expect(async () => await sdk.serviceAccounts.update()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .patch('/v3/workplace/service_accounts/service_account/perferendis')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.serviceAccounts.update({}, 'perferendis'),
      ).rejects.toThrow();
    });
  });

  describe('test list', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/workplace/service_accounts?page=4&per_page=6')
        .reply(200, { data: {} });
      return sdk.serviceAccounts
        .list({ page: 4, perPage: 6 })
        .then((r: any) => expect(r.data).toEqual({}));
    });
  });

  describe('test create', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/workplace/service_accounts')
        .reply(200, { data: {} });
      return sdk.serviceAccounts.create({}).then((r: any) => expect(r.data).toEqual({}));
    });
  });
});
