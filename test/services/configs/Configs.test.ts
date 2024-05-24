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
        .get('/v3/configs/config?project=laborum&config=alias')
        .reply(200, { data: {} });
      return sdk.configs.get('laborum', 'alias').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config?project=veritatis&config=eligendi')
        .reply(200, { data: {} });
      return expect(async () => await sdk.configs.get()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config?project=error&config=iste')
        .reply(404, { data: {} });
      return expect(async () => await sdk.configs.get('error', 'iste')).rejects.toThrow();
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
        .delete('/v3/configs/config?project=distinctio&config=voluptate')
        .reply(200, { data: {} });
      return sdk.configs
        .delete('distinctio', 'voluptate')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/configs/config?project=quam&config=enim')
        .reply(200, { data: {} });
      return expect(async () => await sdk.configs.delete()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/configs/config?project=reprehenderit&config=minima')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.configs.delete('reprehenderit', 'minima'),
      ).rejects.toThrow();
    });
  });

  describe('test list', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs?project=doloribus&environment=voluptatem&page=1&per_page=1')
        .reply(200, { data: {} });
      return sdk.configs
        .list('doloribus', { environment: 'voluptatem', page: 1, perPage: 1 })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs?project=consequuntur&environment=velit&page=2&per_page=7')
        .reply(200, { data: {} });
      return expect(async () => await sdk.configs.list()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs?project=laborum&environment=voluptate&page=8&per_page=3')
        .reply(404, { data: {} });
      return expect(
        async () =>
          await sdk.configs.list('laborum', { environment: 'voluptate', page: 8, perPage: 3 }),
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
        .get('/v3/configs/config/trusted_ips?project=dolorem&config=quisquam')
        .reply(200, { data: {} });
      return sdk.configs
        .listTrustedIps('dolorem', 'quisquam')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/trusted_ips?project=cupiditate&config=error')
        .reply(200, { data: {} });
      return expect(async () => await sdk.configs.listTrustedIps()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/trusted_ips?project=dignissimos&config=delectus')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.configs.listTrustedIps('dignissimos', 'delectus'),
      ).rejects.toThrow();
    });
  });

  describe('test addTrustedIp', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/configs/config/trusted_ips?project=dolor&config=laboriosam')
        .reply(200, { data: {} });
      return sdk.configs
        .addTrustedIp({}, 'dolor', 'laboriosam')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/configs/config/trusted_ips?project=possimus&config=temporibus')
        .reply(200, { data: {} });
      return expect(async () => await sdk.configs.addTrustedIp()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/configs/config/trusted_ips?project=dicta&config=adipisci')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.configs.addTrustedIp({}, 'dicta', 'adipisci'),
      ).rejects.toThrow();
    });
  });

  describe('test deleteTrustedIp', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/configs/config/trusted_ips?project=laudantium&config=dicta')
        .reply(200, { data: {} });
      return sdk.configs
        .deleteTrustedIp({}, 'laudantium', 'dicta')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/configs/config/trusted_ips?project=dolore&config=beatae')
        .reply(200, { data: {} });
      return expect(async () => await sdk.configs.deleteTrustedIp()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/configs/config/trusted_ips?project=repellendus&config=error')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.configs.deleteTrustedIp({}, 'repellendus', 'error'),
      ).rejects.toThrow();
    });
  });
});
