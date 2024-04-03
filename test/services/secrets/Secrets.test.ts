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
          '/v3/configs/config/secrets?project=perspiciatis&config=deserunt&include_dynamic_secrets=true&dynamic_secrets_ttl_sec=9&secrets=praesentium&include_managed_secrets=true',
        )
        .reply(200, { data: {} });
      return sdk.secrets
        .list('perspiciatis', 'deserunt', {
          accepts: 'aliquam',
          includeDynamicSecrets: true,
          dynamicSecretsTtlSec: 9,
          secrets: 'praesentium',
          includeManagedSecrets: true,
        })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get(
          '/v3/configs/config/secrets?project=porro&config=pariatur&include_dynamic_secrets=true&dynamic_secrets_ttl_sec=2&secrets=earum&include_managed_secrets=true',
        )
        .reply(200, { data: {} });
      return expect(async () => await sdk.secrets.list()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get(
          '/v3/configs/config/secrets?project=consequatur&config=doloremque&include_dynamic_secrets=true&dynamic_secrets_ttl_sec=6&secrets=minus&include_managed_secrets=true',
        )
        .reply(404, { data: {} });
      return expect(
        async () =>
          await sdk.secrets.list('consequatur', 'doloremque', {
            accepts: 'nulla',
            includeDynamicSecrets: true,
            dynamicSecretsTtlSec: 6,
            secrets: 'minus',
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
        .get('/v3/configs/config/secret?project=deserunt&config=occaecati&name=Douglas')
        .reply(200, { data: {} });
      return sdk.secrets
        .get('deserunt', 'occaecati', 'Douglas')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/secret?project=nihil&config=facere&name=Kattie')
        .reply(200, { data: {} });
      return expect(async () => await sdk.secrets.get()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/configs/config/secret?project=at&config=libero&name=Trudie')
        .reply(404, { data: {} });
      return expect(async () => await sdk.secrets.get('at', 'libero', 'Trudie')).rejects.toThrow();
    });
  });

  describe('test delete', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/configs/config/secret?project=consectetur&config=numquam&name=Odessa')
        .reply(200, { data: {} });
      return sdk.secrets
        .delete('consectetur', 'numquam', 'Odessa')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/configs/config/secret?project=eum&config=blanditiis&name=Annabelle')
        .reply(200, { data: {} });
      return expect(async () => await sdk.secrets.delete()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/configs/config/secret?project=vitae&config=eaque&name=Zoey')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.secrets.delete('vitae', 'eaque', 'Zoey'),
      ).rejects.toThrow();
    });
  });

  describe('test download', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get(
          '/v3/configs/config/secrets/download?project=nisi&config=dignissimos&format=ipsa&name_transformer=Elsie&include_dynamic_secrets=true&dynamic_secrets_ttl_sec=4&secrets=provident',
        )
        .reply(200, { data: {} });
      return sdk.secrets
        .download('nisi', 'dignissimos', {
          format: 'ipsa',
          nameTransformer: 'Elsie',
          includeDynamicSecrets: true,
          dynamicSecretsTtlSec: 4,
          secrets: 'provident',
        })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get(
          '/v3/configs/config/secrets/download?project=asperiores&config=aliquam&format=non&name_transformer=Alana&include_dynamic_secrets=true&dynamic_secrets_ttl_sec=5&secrets=commodi',
        )
        .reply(200, { data: {} });
      return expect(async () => await sdk.secrets.download()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get(
          '/v3/configs/config/secrets/download?project=consectetur&config=incidunt&format=placeat&name_transformer=Jacky&include_dynamic_secrets=true&dynamic_secrets_ttl_sec=6&secrets=harum',
        )
        .reply(404, { data: {} });
      return expect(
        async () =>
          await sdk.secrets.download('consectetur', 'incidunt', {
            format: 'placeat',
            nameTransformer: 'Jacky',
            includeDynamicSecrets: true,
            dynamicSecretsTtlSec: 6,
            secrets: 'harum',
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
          '/v3/configs/config/secrets/names?project=velit&config=velit&include_dynamic_secrets=true&include_managed_secrets=true',
        )
        .reply(200, { data: {} });
      return sdk.secrets
        .names('velit', 'velit', { includeDynamicSecrets: true, includeManagedSecrets: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get(
          '/v3/configs/config/secrets/names?project=quos&config=mollitia&include_dynamic_secrets=true&include_managed_secrets=true',
        )
        .reply(200, { data: {} });
      return expect(async () => await sdk.secrets.names()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get(
          '/v3/configs/config/secrets/names?project=eaque&config=soluta&include_dynamic_secrets=true&include_managed_secrets=true',
        )
        .reply(404, { data: {} });
      return expect(
        async () =>
          await sdk.secrets.names('eaque', 'soluta', {
            includeDynamicSecrets: true,
            includeManagedSecrets: true,
          }),
      ).rejects.toThrow();
    });
  });
});
