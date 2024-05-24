import nock from 'nock';

import { DopplerSDK } from '../../../src';

import { WebhooksService } from '../../../src/services/webhooks/Webhooks';

describe('test WebhooksService object', () => {
  it('should be an object', () => {
    expect(typeof WebhooksService).toBe('function');
  });
});

describe('test Webhooks', () => {
  let sdk: any;

  beforeEach(() => {
    sdk = new DopplerSDK({});

    nock.cleanAll();
  });

  describe('test list', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/webhooks?project=ea')
        .reply(200, { data: {} });
      return sdk.webhooks.list({ project: 'ea' }).then((r: any) => expect(r.data).toEqual({}));
    });
  });

  describe('test add', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/webhooks?project=repudiandae')
        .reply(200, { data: {} });
      return sdk.webhooks
        .add({}, { project: 'repudiandae' })
        .then((r: any) => expect(r.data).toEqual({}));
    });
  });

  describe('test get', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/webhooks/webhook/ducimus?project=optio')
        .reply(200, { data: {} });
      return sdk.webhooks
        .get('ducimus', { project: 'optio' })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/webhooks/webhook/nobis?project=quidem')
        .reply(200, { data: {} });
      return expect(async () => await sdk.webhooks.get()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/webhooks/webhook/placeat?project=nulla')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.webhooks.get('placeat', { project: 'nulla' }),
      ).rejects.toThrow();
    });
  });

  describe('test delete', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/webhooks/webhook/necessitatibus?project=eos')
        .reply(200, { data: {} });
      return sdk.webhooks
        .delete('necessitatibus', { project: 'eos' })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/webhooks/webhook/ratione?project=porro')
        .reply(200, { data: {} });
      return expect(async () => await sdk.webhooks.delete()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/webhooks/webhook/sequi?project=recusandae')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.webhooks.delete('sequi', { project: 'recusandae' }),
      ).rejects.toThrow();
    });
  });

  describe('test update', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .patch('/v3/webhooks/webhook/assumenda?project=ullam')
        .reply(200, { data: {} });
      return sdk.webhooks
        .update({}, 'assumenda', { project: 'ullam' })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .patch('/v3/webhooks/webhook/explicabo?project=odit')
        .reply(200, { data: {} });
      return expect(async () => await sdk.webhooks.update()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .patch('/v3/webhooks/webhook/ea?project=officia')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.webhooks.update({}, 'ea', { project: 'officia' }),
      ).rejects.toThrow();
    });
  });

  describe('test enable', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/webhooks/webhook/repellat/enable?project=maiores')
        .reply(200, { data: {} });
      return sdk.webhooks
        .enable('repellat', { project: 'maiores' })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/webhooks/webhook/optio/enable?project=ut')
        .reply(200, { data: {} });
      return expect(async () => await sdk.webhooks.enable()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/webhooks/webhook/amet/enable?project=optio')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.webhooks.enable('amet', { project: 'optio' }),
      ).rejects.toThrow();
    });
  });

  describe('test disable', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/webhooks/webhook/odio/disable?project=nostrum')
        .reply(200, { data: {} });
      return sdk.webhooks
        .disable('odio', { project: 'nostrum' })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/webhooks/webhook/dolore/disable?project=blanditiis')
        .reply(200, { data: {} });
      return expect(async () => await sdk.webhooks.disable()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/webhooks/webhook/odio/disable?project=quidem')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.webhooks.disable('odio', { project: 'quidem' }),
      ).rejects.toThrow();
    });
  });
});
