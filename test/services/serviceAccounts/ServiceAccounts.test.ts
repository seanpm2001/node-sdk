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
        .get('/v3/workplace/service_accounts/service_account/iure')
        .reply(200, { data: {} });
      return sdk.serviceAccounts.get('iure').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/workplace/service_accounts/service_account/id')
        .reply(200, { data: {} });
      return expect(async () => await sdk.serviceAccounts.get()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/workplace/service_accounts/service_account/illum')
        .reply(404, { data: {} });
      return expect(async () => await sdk.serviceAccounts.get('illum')).rejects.toThrow();
    });
  });

  describe('test delete', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/workplace/service_accounts/service_account/commodi')
        .reply(200, { data: {} });
      return sdk.serviceAccounts.delete('commodi').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/workplace/service_accounts/service_account/vero')
        .reply(200, { data: {} });
      return expect(async () => await sdk.serviceAccounts.delete()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/workplace/service_accounts/service_account/labore')
        .reply(404, { data: {} });
      return expect(async () => await sdk.serviceAccounts.delete('labore')).rejects.toThrow();
    });
  });

  describe('test update', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .patch('/v3/workplace/service_accounts/service_account/nemo')
        .reply(200, { data: {} });
      return sdk.serviceAccounts.update({}, 'nemo').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .patch('/v3/workplace/service_accounts/service_account/suscipit')
        .reply(200, { data: {} });
      return expect(async () => await sdk.serviceAccounts.update()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .patch('/v3/workplace/service_accounts/service_account/enim')
        .reply(404, { data: {} });
      return expect(async () => await sdk.serviceAccounts.update({}, 'enim')).rejects.toThrow();
    });
  });

  describe('test list', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/workplace/service_accounts?page=7&per_page=4')
        .reply(200, { data: {} });
      return sdk.serviceAccounts
        .list({ page: 7, perPage: 4 })
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
