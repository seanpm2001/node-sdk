import nock from 'nock';

import { DopplerSDK } from '../../../src';

import { SecretsService } from '../../../src/services/secrets/Secrets';

describe('test SecretsService object', () => {
  it('should be an object', () => {
    expect(typeof SecretsService).toBe('function');
  });
});

describe('test Secrets', () => {
  let sdk: any;

  beforeEach(() => {
    sdk = new DopplerSDK({});

    nock.cleanAll();
  });

  describe('test list', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get(
          '/v3/configs/config/secrets?project=dolore&config=nemo&include_dynamic_secrets=true&dynamic_secrets_ttl_sec=5&secrets=reprehenderit&include_managed_secrets=true',
        )
        .reply(200, { data: {} });
      return sdk.secrets
        .list('dolore', 'nemo', {
          accepts: 'nesciunt',
          includeDynamicSecrets: true,
          dynamicSecretsTtlSec: 5,
          secrets: 'reprehenderit',
          includeManagedSecrets: true,
        })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get(
          '/v3/configs/config/secrets?project=ratione&config=debitis&include_dynamic_secrets=true&dynamic_secrets_ttl_sec=1&secrets=nulla&include_managed_secrets=true',
        )
        .reply(200, { data: {} });
      return expect(async () => await sdk.secrets.list()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get(
          '/v3/configs/config/secrets?project=voluptate&config=praesentium&include_dynamic_secrets=true&dynamic_secrets_ttl_sec=3&secrets=nulla&include_managed_secrets=true',
        )
        .reply(404, { data: {} });
      return expect(
        async () =>
          await sdk.secrets.list('voluptate', 'praesentium', {
            accepts: 'ad',
            includeDynamicSecrets: true,
            dynamicSecretsTtlSec: 3,
            secrets: 'nulla',
            includeManagedSecrets: true,
          }),
      ).rejects.toThrow();
    });
  });

  describe('test update', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/configs/config/secrets')
        .reply(200, { data: {} });
      return sdk.secrets.update({}).then((r: any) => expect(r.data).toEqual({}));
    });
  });

  describe('test get', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/secret?project=labore&config=quidem&name=Nelle')
        .reply(200, { data: {} });
      return sdk.secrets
        .get('labore', 'quidem', 'Nelle')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/secret?project=aut&config=delectus&name=Glenna')
        .reply(200, { data: {} });
      return expect(async () => await sdk.secrets.get()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/secret?project=iste&config=laudantium&name=Richard')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.secrets.get('iste', 'laudantium', 'Richard'),
      ).rejects.toThrow();
    });
  });

  describe('test delete', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/configs/config/secret?project=accusamus&config=quo&name=Alanis')
        .reply(200, { data: {} });
      return sdk.secrets
        .delete('accusamus', 'quo', 'Alanis')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/configs/config/secret?project=eos&config=aliquam&name=Ed')
        .reply(200, { data: {} });
      return expect(async () => await sdk.secrets.delete()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/configs/config/secret?project=temporibus&config=aspernatur&name=Darby')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.secrets.delete('temporibus', 'aspernatur', 'Darby'),
      ).rejects.toThrow();
    });
  });

  describe('test download', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get(
          '/v3/configs/config/secrets/download?project=repellendus&config=necessitatibus&format=quia&name_transformer=Miles&include_dynamic_secrets=true&dynamic_secrets_ttl_sec=1&secrets=sit',
        )
        .reply(200, { data: {} });
      return sdk.secrets
        .download('repellendus', 'necessitatibus', {
          format: 'quia',
          nameTransformer: 'Miles',
          includeDynamicSecrets: true,
          dynamicSecretsTtlSec: 1,
          secrets: 'sit',
        })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get(
          '/v3/configs/config/secrets/download?project=in&config=ea&format=nostrum&name_transformer=Micaela&include_dynamic_secrets=true&dynamic_secrets_ttl_sec=9&secrets=sunt',
        )
        .reply(200, { data: {} });
      return expect(async () => await sdk.secrets.download()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get(
          '/v3/configs/config/secrets/download?project=ea&config=dolor&format=saepe&name_transformer=Fernando&include_dynamic_secrets=true&dynamic_secrets_ttl_sec=9&secrets=laudantium',
        )
        .reply(404, { data: {} });
      return expect(
        async () =>
          await sdk.secrets.download('ea', 'dolor', {
            format: 'saepe',
            nameTransformer: 'Fernando',
            includeDynamicSecrets: true,
            dynamicSecretsTtlSec: 9,
            secrets: 'laudantium',
          }),
      ).rejects.toThrow();
    });
  });

  describe('test updateNote', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/configs/config/secrets/note')
        .reply(200, { data: {} });
      return sdk.secrets.updateNote({}).then((r: any) => expect(r.data).toEqual({}));
    });
  });

  describe('test names', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get(
          '/v3/configs/config/secrets/names?project=odit&config=quos&include_dynamic_secrets=true&include_managed_secrets=true',
        )
        .reply(200, { data: {} });
      return sdk.secrets
        .names('odit', 'quos', { includeDynamicSecrets: true, includeManagedSecrets: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get(
          '/v3/configs/config/secrets/names?project=sint&config=ea&include_dynamic_secrets=true&include_managed_secrets=true',
        )
        .reply(200, { data: {} });
      return expect(async () => await sdk.secrets.names()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get(
          '/v3/configs/config/secrets/names?project=maxime&config=debitis&include_dynamic_secrets=true&include_managed_secrets=true',
        )
        .reply(404, { data: {} });
      return expect(
        async () =>
          await sdk.secrets.names('maxime', 'debitis', {
            includeDynamicSecrets: true,
            includeManagedSecrets: true,
          }),
      ).rejects.toThrow();
    });
  });
});
