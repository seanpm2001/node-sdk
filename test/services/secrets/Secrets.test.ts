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
          '/v3/configs/config/secrets?project=et&config=corrupti&include_dynamic_secrets=true&dynamic_secrets_ttl_sec=9&secrets=repellat&include_managed_secrets=true',
        )
        .reply(200, { data: {} });
      return sdk.secrets
        .list('et', 'corrupti', {
          accepts: 'consectetur',
          includeDynamicSecrets: true,
          dynamicSecretsTtlSec: 9,
          secrets: 'repellat',
          includeManagedSecrets: true,
        })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get(
          '/v3/configs/config/secrets?project=nesciunt&config=dolor&include_dynamic_secrets=true&dynamic_secrets_ttl_sec=7&secrets=dolores&include_managed_secrets=true',
        )
        .reply(200, { data: {} });
      return expect(async () => await sdk.secrets.list()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get(
          '/v3/configs/config/secrets?project=aliquam&config=possimus&include_dynamic_secrets=true&dynamic_secrets_ttl_sec=3&secrets=ex&include_managed_secrets=true',
        )
        .reply(404, { data: {} });
      return expect(
        async () =>
          await sdk.secrets.list('aliquam', 'possimus', {
            accepts: 'hic',
            includeDynamicSecrets: true,
            dynamicSecretsTtlSec: 3,
            secrets: 'ex',
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
        .get('/v3/configs/config/secret?project=impedit&config=voluptas&name=Monserrat')
        .reply(200, { data: {} });
      return sdk.secrets
        .get('impedit', 'voluptas', 'Monserrat')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/secret?project=doloremque&config=laudantium&name=Robyn')
        .reply(200, { data: {} });
      return expect(async () => await sdk.secrets.get()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/secret?project=quos&config=numquam&name=Baby')
        .reply(404, { data: {} });
      return expect(async () => await sdk.secrets.get('quos', 'numquam', 'Baby')).rejects.toThrow();
    });
  });

  describe('test delete', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/configs/config/secret?project=molestias&config=facilis&name=Cathrine')
        .reply(200, { data: {} });
      return sdk.secrets
        .delete('molestias', 'facilis', 'Cathrine')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/configs/config/secret?project=asperiores&config=expedita&name=Rolando')
        .reply(200, { data: {} });
      return expect(async () => await sdk.secrets.delete()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/configs/config/secret?project=minus&config=id&name=Karlie')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.secrets.delete('minus', 'id', 'Karlie'),
      ).rejects.toThrow();
    });
  });

  describe('test download', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get(
          '/v3/configs/config/secrets/download?project=fugit&config=commodi&format=minus&name_transformer=Claude&include_dynamic_secrets=true&dynamic_secrets_ttl_sec=7&secrets=pariatur',
        )
        .reply(200, { data: {} });
      return sdk.secrets
        .download('fugit', 'commodi', {
          format: 'minus',
          nameTransformer: 'Claude',
          includeDynamicSecrets: true,
          dynamicSecretsTtlSec: 7,
          secrets: 'pariatur',
        })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get(
          '/v3/configs/config/secrets/download?project=expedita&config=dolores&format=vitae&name_transformer=Turner&include_dynamic_secrets=true&dynamic_secrets_ttl_sec=8&secrets=voluptatibus',
        )
        .reply(200, { data: {} });
      return expect(async () => await sdk.secrets.download()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get(
          '/v3/configs/config/secrets/download?project=unde&config=occaecati&format=impedit&name_transformer=Lelia&include_dynamic_secrets=true&dynamic_secrets_ttl_sec=4&secrets=dignissimos',
        )
        .reply(404, { data: {} });
      return expect(
        async () =>
          await sdk.secrets.download('unde', 'occaecati', {
            format: 'impedit',
            nameTransformer: 'Lelia',
            includeDynamicSecrets: true,
            dynamicSecretsTtlSec: 4,
            secrets: 'dignissimos',
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
          '/v3/configs/config/secrets/names?project=excepturi&config=aut&include_dynamic_secrets=true&include_managed_secrets=true',
        )
        .reply(200, { data: {} });
      return sdk.secrets
        .names('excepturi', 'aut', { includeDynamicSecrets: true, includeManagedSecrets: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get(
          '/v3/configs/config/secrets/names?project=laborum&config=asperiores&include_dynamic_secrets=true&include_managed_secrets=true',
        )
        .reply(200, { data: {} });
      return expect(async () => await sdk.secrets.names()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get(
          '/v3/configs/config/secrets/names?project=tempora&config=iure&include_dynamic_secrets=true&include_managed_secrets=true',
        )
        .reply(404, { data: {} });
      return expect(
        async () =>
          await sdk.secrets.names('tempora', 'iure', {
            includeDynamicSecrets: true,
            includeManagedSecrets: true,
          }),
      ).rejects.toThrow();
    });
  });
});
