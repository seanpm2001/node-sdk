import nock from 'nock';

import { DopplerSDK } from '../../../src';

import { GetService } from '../../../src/services/get/Get';

describe('test GetService object', () => {
  it('should be an object', () => {
    expect(typeof GetService).toBe('function');
  });
});

describe('test Get', () => {
  let sdk: any;

  beforeEach(() => {
    sdk = new DopplerSDK({});

    nock.cleanAll();
  });

  describe('test options', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/integrations/integration/options?integration=quas')
        .reply(200, { data: {} });
      return sdk.get.options('quas').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/integrations/integration/options?integration=voluptatum')
        .reply(200, { data: {} });
      return expect(async () => await sdk.get.options()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/integrations/integration/options?integration=quis')
        .reply(404, { data: {} });
      return expect(async () => await sdk.get.options('quis')).rejects.toThrow();
    });
  });
});
