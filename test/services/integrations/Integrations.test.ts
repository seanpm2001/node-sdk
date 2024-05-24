import nock from 'nock';

import { DopplerSDK } from '../../../src';

import { IntegrationsService } from '../../../src/services/integrations/Integrations';

describe('test IntegrationsService object', () => {
  it('should be an object', () => {
    expect(typeof IntegrationsService).toBe('function');
  });
});

describe('test Integrations', () => {
  let sdk: any;

  beforeEach(() => {
    sdk = new DopplerSDK({});

    nock.cleanAll();
  });

  describe('test get', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/integrations/integration?integration=rem')
        .reply(200, { data: {} });
      return sdk.integrations.get('rem').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/integrations/integration?integration=voluptatum')
        .reply(200, { data: {} });
      return expect(async () => await sdk.integrations.get()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/integrations/integration?integration=quos')
        .reply(404, { data: {} });
      return expect(async () => await sdk.integrations.get('quos')).rejects.toThrow();
    });
  });

  describe('test update', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .put('/v3/integrations/integration?integration=exercitationem')
        .reply(200, { data: {} });
      return sdk.integrations
        .update({}, 'exercitationem')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .put('/v3/integrations/integration?integration=ut')
        .reply(200, { data: {} });
      return expect(async () => await sdk.integrations.update()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .put('/v3/integrations/integration?integration=voluptatibus')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.integrations.update({}, 'voluptatibus'),
      ).rejects.toThrow();
    });
  });

  describe('test delete', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/integrations/integration?integration=impedit')
        .reply(200, { data: {} });
      return sdk.integrations.delete('impedit').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/integrations/integration?integration=blanditiis')
        .reply(200, { data: {} });
      return expect(async () => await sdk.integrations.delete()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/integrations/integration?integration=nisi')
        .reply(404, { data: {} });
      return expect(async () => await sdk.integrations.delete('nisi')).rejects.toThrow();
    });
  });

  describe('test list', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/integrations')
        .reply(200, { data: {} });
      return sdk.integrations.list().then((r: any) => expect(r.data).toEqual({}));
    });
  });

  describe('test create', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/integrations')
        .reply(200, { data: {} });
      return sdk.integrations.create({}).then((r: any) => expect(r.data).toEqual({}));
    });
  });
});
