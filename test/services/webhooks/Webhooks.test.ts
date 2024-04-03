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
        .get('/v3/webhooks?project=facilis')
        .reply(200, { data: {} });
      return sdk.webhooks.list({ project: 'facilis' }).then((r: any) => expect(r.data).toEqual({}));
    });
  });

  describe('test add', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/webhooks?project=at')
        .reply(200, { data: {} });
      return sdk.webhooks.add({}, { project: 'at' }).then((r: any) => expect(r.data).toEqual({}));
    });
  });

  describe('test get', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/webhooks/webhook/minus?project=cupiditate')
        .reply(200, { data: {} });
      return sdk.webhooks
        .get('minus', { project: 'cupiditate' })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/webhooks/webhook/nobis?project=consectetur')
        .reply(200, { data: {} });
      return expect(async () => await sdk.webhooks.get()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/webhooks/webhook/omnis?project=impedit')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.webhooks.get('omnis', { project: 'impedit' }),
      ).rejects.toThrow();
    });
  });

  describe('test delete', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/webhooks/webhook/libero?project=deserunt')
        .reply(200, { data: {} });
      return sdk.webhooks
        .delete('libero', { project: 'deserunt' })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/webhooks/webhook/nobis?project=enim')
        .reply(200, { data: {} });
      return expect(async () => await sdk.webhooks.delete()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/webhooks/webhook/libero?project=blanditiis')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.webhooks.delete('libero', { project: 'blanditiis' }),
      ).rejects.toThrow();
    });
  });

  describe('test update', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .patch('/v3/webhooks/webhook/libero?project=explicabo')
        .reply(200, { data: {} });
      return sdk.webhooks
        .update({}, 'libero', { project: 'explicabo' })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .patch('/v3/webhooks/webhook/rerum?project=alias')
        .reply(200, { data: {} });
      return expect(async () => await sdk.webhooks.update()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .patch('/v3/webhooks/webhook/assumenda?project=dolores')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.webhooks.update({}, 'assumenda', { project: 'dolores' }),
      ).rejects.toThrow();
    });
  });

  describe('test enable', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/webhooks/webhook/cupiditate/enable?project=numquam')
        .reply(200, { data: {} });
      return sdk.webhooks
        .enable('cupiditate', { project: 'numquam' })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/webhooks/webhook/esse/enable?project=illum')
        .reply(200, { data: {} });
      return expect(async () => await sdk.webhooks.enable()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/webhooks/webhook/iusto/enable?project=provident')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.webhooks.enable('iusto', { project: 'provident' }),
      ).rejects.toThrow();
    });
  });

  describe('test disable', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/webhooks/webhook/eius/disable?project=perferendis')
        .reply(200, { data: {} });
      return sdk.webhooks
        .disable('eius', { project: 'perferendis' })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/webhooks/webhook/deserunt/disable?project=ab')
        .reply(200, { data: {} });
      return expect(async () => await sdk.webhooks.disable()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/webhooks/webhook/optio/disable?project=in')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.webhooks.disable('optio', { project: 'in' }),
      ).rejects.toThrow();
    });
  });
});
