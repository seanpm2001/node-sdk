import nock from 'nock';

import { DopplerSDK } from '../../../src';

import { ConfigsService } from '../../../src/services/configs/Configs';

describe('test ConfigsService object', () => {
  it('should be an object', () => {
    expect(typeof ConfigsService).toBe('function');
  });
});

describe('test Configs', () => {
  let sdk: any;

  beforeEach(() => {
    sdk = new DopplerSDK({});

    nock.cleanAll();
  });

  describe('test get', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config?project=sint&config=non')
        .reply(200, { data: {} });
      return sdk.configs.get('sint', 'non').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config?project=quasi&config=repudiandae')
        .reply(200, { data: {} });
      return expect(async () => await sdk.configs.get()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config?project=quis&config=consectetur')
        .reply(404, { data: {} });
      return expect(async () => await sdk.configs.get('quis', 'consectetur')).rejects.toThrow();
    });
  });

  describe('test update', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/configs/config')
        .reply(200, { data: {} });
      return sdk.configs.update({}).then((r: any) => expect(r.data).toEqual({}));
    });
  });

  describe('test delete', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/configs/config')
        .reply(200, { data: {} });
      return sdk.configs.delete({}).then((r: any) => expect(r.data).toEqual({}));
    });
  });

  describe('test list', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs?project=cumque&environment=ipsam&page=1&per_page=4')
        .reply(200, { data: {} });
      return sdk.configs
        .list('cumque', { environment: 'ipsam', page: 1, perPage: 4 })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs?project=ratione&environment=adipisci&page=3&per_page=7')
        .reply(200, { data: {} });
      return expect(async () => await sdk.configs.list()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs?project=sint&environment=fuga&page=1&per_page=7')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.configs.list('sint', { environment: 'fuga', page: 1, perPage: 7 }),
      ).rejects.toThrow();
    });
  });

  describe('test create', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com').post('/v3/configs').reply(200, { data: {} });
      return sdk.configs.create({}).then((r: any) => expect(r.data).toEqual({}));
    });
  });

  describe('test unlock', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/configs/config/unlock')
        .reply(200, { data: {} });
      return sdk.configs.unlock({}).then((r: any) => expect(r.data).toEqual({}));
    });
  });

  describe('test clone', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/configs/config/clone')
        .reply(200, { data: {} });
      return sdk.configs.clone({}).then((r: any) => expect(r.data).toEqual({}));
    });
  });

  describe('test lock', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/configs/config/lock')
        .reply(200, { data: {} });
      return sdk.configs.lock({}).then((r: any) => expect(r.data).toEqual({}));
    });
  });

  describe('test listTrustedIps', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/trusted_ips?project=ab&config=fugiat')
        .reply(200, { data: {} });
      return sdk.configs
        .listTrustedIps('ab', 'fugiat')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/trusted_ips?project=laboriosam&config=voluptas')
        .reply(200, { data: {} });
      return expect(async () => await sdk.configs.listTrustedIps()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/trusted_ips?project=iste&config=assumenda')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.configs.listTrustedIps('iste', 'assumenda'),
      ).rejects.toThrow();
    });
  });

  describe('test addTrustedIp', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/configs/config/trusted_ips?project=nobis&config=tempore')
        .reply(200, { data: {} });
      return sdk.configs
        .addTrustedIp({}, 'nobis', 'tempore')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/configs/config/trusted_ips?project=explicabo&config=facere')
        .reply(200, { data: {} });
      return expect(async () => await sdk.configs.addTrustedIp()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/configs/config/trusted_ips?project=et&config=esse')
        .reply(404, { data: {} });
      return expect(async () => await sdk.configs.addTrustedIp({}, 'et', 'esse')).rejects.toThrow();
    });
  });

  describe('test deleteTrustedIp', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/configs/config/trusted_ips?project=dignissimos&config=quaerat')
        .reply(200, { data: {} });
      return sdk.configs
        .deleteTrustedIp({}, 'dignissimos', 'quaerat')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/configs/config/trusted_ips?project=necessitatibus&config=itaque')
        .reply(200, { data: {} });
      return expect(async () => await sdk.configs.deleteTrustedIp()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/configs/config/trusted_ips?project=blanditiis&config=repellat')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.configs.deleteTrustedIp({}, 'blanditiis', 'repellat'),
      ).rejects.toThrow();
    });
  });
});
