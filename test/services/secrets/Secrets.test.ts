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
          '/v3/configs/config/secrets?project=illum&config=suscipit&include_dynamic_secrets=true&dynamic_secrets_ttl_sec=8&secrets=cupiditate&include_managed_secrets=true',
        )
        .reply(200, { data: {} });
      return sdk.secrets
        .list('illum', 'suscipit', {
          accepts: 'ab',
          includeDynamicSecrets: true,
          dynamicSecretsTtlSec: 8,
          secrets: 'cupiditate',
          includeManagedSecrets: true,
        })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get(
          '/v3/configs/config/secrets?project=modi&config=laboriosam&include_dynamic_secrets=true&dynamic_secrets_ttl_sec=9&secrets=expedita&include_managed_secrets=true',
        )
        .reply(200, { data: {} });
      return expect(async () => await sdk.secrets.list()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get(
          '/v3/configs/config/secrets?project=labore&config=incidunt&include_dynamic_secrets=true&dynamic_secrets_ttl_sec=8&secrets=ratione&include_managed_secrets=true',
        )
        .reply(404, { data: {} });
      return expect(
        async () =>
          await sdk.secrets.list('labore', 'incidunt', {
            accepts: 'ea',
            includeDynamicSecrets: true,
            dynamicSecretsTtlSec: 8,
            secrets: 'ratione',
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
        .get('/v3/configs/config/secret?project=assumenda&config=totam&name=Brando')
        .reply(200, { data: {} });
      return sdk.secrets
        .get('assumenda', 'totam', 'Brando')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/secret?project=delectus&config=cum&name=Jana')
        .reply(200, { data: {} });
      return expect(async () => await sdk.secrets.get()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/secret?project=dignissimos&config=culpa&name=Isai')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.secrets.get('dignissimos', 'culpa', 'Isai'),
      ).rejects.toThrow();
    });
  });

  describe('test delete', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/configs/config/secret?project=quas&config=impedit&name=Neva')
        .reply(200, { data: {} });
      return sdk.secrets
        .delete('quas', 'impedit', 'Neva')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/configs/config/secret?project=ipsa&config=debitis&name=Quinton')
        .reply(200, { data: {} });
      return expect(async () => await sdk.secrets.delete()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/configs/config/secret?project=nam&config=veritatis&name=Heloise')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.secrets.delete('nam', 'veritatis', 'Heloise'),
      ).rejects.toThrow();
    });
  });

  describe('test download', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get(
          '/v3/configs/config/secrets/download?project=itaque&config=fuga&format=modi&name_transformer=Jadyn&include_dynamic_secrets=true&dynamic_secrets_ttl_sec=5&secrets=qui',
        )
        .reply(200, { data: {} });
      return sdk.secrets
        .download('itaque', 'fuga', {
          format: 'modi',
          nameTransformer: 'Jadyn',
          includeDynamicSecrets: true,
          dynamicSecretsTtlSec: 5,
          secrets: 'qui',
        })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get(
          '/v3/configs/config/secrets/download?project=beatae&config=nesciunt&format=explicabo&name_transformer=Manuel&include_dynamic_secrets=true&dynamic_secrets_ttl_sec=3&secrets=facere',
        )
        .reply(200, { data: {} });
      return expect(async () => await sdk.secrets.download()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get(
          '/v3/configs/config/secrets/download?project=at&config=necessitatibus&format=temporibus&name_transformer=Joshua&include_dynamic_secrets=true&dynamic_secrets_ttl_sec=5&secrets=blanditiis',
        )
        .reply(404, { data: {} });
      return expect(
        async () =>
          await sdk.secrets.download('at', 'necessitatibus', {
            format: 'temporibus',
            nameTransformer: 'Joshua',
            includeDynamicSecrets: true,
            dynamicSecretsTtlSec: 5,
            secrets: 'blanditiis',
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
          '/v3/configs/config/secrets/names?project=libero&config=maiores&include_dynamic_secrets=true&include_managed_secrets=true',
        )
        .reply(200, { data: {} });
      return sdk.secrets
        .names('libero', 'maiores', { includeDynamicSecrets: true, includeManagedSecrets: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get(
          '/v3/configs/config/secrets/names?project=aliquam&config=delectus&include_dynamic_secrets=true&include_managed_secrets=true',
        )
        .reply(200, { data: {} });
      return expect(async () => await sdk.secrets.names()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get(
          '/v3/configs/config/secrets/names?project=placeat&config=eius&include_dynamic_secrets=true&include_managed_secrets=true',
        )
        .reply(404, { data: {} });
      return expect(
        async () =>
          await sdk.secrets.names('placeat', 'eius', {
            includeDynamicSecrets: true,
            includeManagedSecrets: true,
          }),
      ).rejects.toThrow();
    });
  });
});
