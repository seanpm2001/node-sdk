import nock from 'nock';

import { DopplerSDK } from '../../../src';

import { SyncsService } from '../../../src/services/syncs/Syncs';

describe('test SyncsService object', () => {
  it('should be an object', () => {
    expect(typeof SyncsService).toBe('function');
  });
});

describe('test Syncs', () => {
  let sdk: any;

  beforeEach(() => {
    sdk = new DopplerSDK({});

    nock.cleanAll();
  });

  describe('test create', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/configs/config/syncs?project=necessitatibus&config=voluptas')
        .reply(200, { data: {} });
      return sdk.syncs
        .create({}, 'necessitatibus', 'voluptas')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/configs/config/syncs?project=error&config=nisi')
        .reply(200, { data: {} });
      return expect(async () => await sdk.syncs.create()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/configs/config/syncs?project=consectetur&config=voluptate')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.syncs.create({}, 'consectetur', 'voluptate'),
      ).rejects.toThrow();
    });
  });

  describe('test get', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/syncs/sync?project=quia&config=nisi&sync=a')
        .reply(200, { data: {} });
      return sdk.syncs.get('quia', 'nisi', 'a').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/syncs/sync?project=quam&config=culpa&sync=incidunt')
        .reply(200, { data: {} });
      return expect(async () => await sdk.syncs.get()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/syncs/sync?project=cupiditate&config=dicta&sync=autem')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.syncs.get('cupiditate', 'dicta', 'autem'),
      ).rejects.toThrow();
    });
  });

  describe('test delete', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .delete(
          '/v3/configs/config/syncs/sync?project=perferendis&config=quaerat&sync=eveniet&delete_from_target=true',
        )
        .reply(200, { data: {} });
      return sdk.syncs
        .delete('perferendis', 'quaerat', 'eveniet', true)
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .delete(
          '/v3/configs/config/syncs/sync?project=beatae&config=quo&sync=totam&delete_from_target=true',
        )
        .reply(200, { data: {} });
      return expect(async () => await sdk.syncs.delete()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .delete(
          '/v3/configs/config/syncs/sync?project=neque&config=ratione&sync=non&delete_from_target=true',
        )
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.syncs.delete('neque', 'ratione', 'non', true),
      ).rejects.toThrow();
    });
  });
});
