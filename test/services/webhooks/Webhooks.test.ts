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
        .get('/v3/webhooks?project=ullam')
        .reply(200, { data: {} });
      return sdk.webhooks.list({ project: 'ullam' }).then((r: any) => expect(r.data).toEqual({}));
    });
  });

  describe('test add', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/webhooks?project=vero')
        .reply(200, { data: {} });
      return sdk.webhooks.add({}, { project: 'vero' }).then((r: any) => expect(r.data).toEqual({}));
    });
  });

  describe('test get', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/webhooks/webhook/sapiente?project=temporibus')
        .reply(200, { data: {} });
      return sdk.webhooks
        .get('sapiente', { project: 'temporibus' })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/webhooks/webhook/aliquid?project=alias')
        .reply(200, { data: {} });
      return expect(async () => await sdk.webhooks.get()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/webhooks/webhook/vitae?project=praesentium')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.webhooks.get('vitae', { project: 'praesentium' }),
      ).rejects.toThrow();
    });
  });

  describe('test delete', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/webhooks/webhook/nemo?project=fugiat')
        .reply(200, { data: {} });
      return sdk.webhooks
        .delete('nemo', { project: 'fugiat' })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/webhooks/webhook/consequatur?project=ad')
        .reply(200, { data: {} });
      return expect(async () => await sdk.webhooks.delete()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/webhooks/webhook/tempore?project=recusandae')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.webhooks.delete('tempore', { project: 'recusandae' }),
      ).rejects.toThrow();
    });
  });

  describe('test update', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .patch('/v3/webhooks/webhook/fuga?project=recusandae')
        .reply(200, { data: {} });
      return sdk.webhooks
        .update({}, 'fuga', { project: 'recusandae' })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .patch('/v3/webhooks/webhook/omnis?project=architecto')
        .reply(200, { data: {} });
      return expect(async () => await sdk.webhooks.update()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .patch('/v3/webhooks/webhook/fugiat?project=debitis')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.webhooks.update({}, 'fugiat', { project: 'debitis' }),
      ).rejects.toThrow();
    });
  });

  describe('test enable', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/webhooks/webhook/corrupti/enable?project=earum')
        .reply(200, { data: {} });
      return sdk.webhooks
        .enable('corrupti', { project: 'earum' })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/webhooks/webhook/consequatur/enable?project=sed')
        .reply(200, { data: {} });
      return expect(async () => await sdk.webhooks.enable()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/webhooks/webhook/vero/enable?project=ipsam')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.webhooks.enable('vero', { project: 'ipsam' }),
      ).rejects.toThrow();
    });
  });

  describe('test disable', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/webhooks/webhook/saepe/disable?project=minima')
        .reply(200, { data: {} });
      return sdk.webhooks
        .disable('saepe', { project: 'minima' })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/webhooks/webhook/eligendi/disable?project=dolore')
        .reply(200, { data: {} });
      return expect(async () => await sdk.webhooks.disable()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/webhooks/webhook/dolorum/disable?project=sapiente')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.webhooks.disable('dolorum', { project: 'sapiente' }),
      ).rejects.toThrow();
    });
  });
});
