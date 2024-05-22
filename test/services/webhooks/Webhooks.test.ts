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
        .get('/v3/webhooks?project=ipsa')
        .reply(200, { data: {} });
      return sdk.webhooks.list({ project: 'ipsa' }).then((r: any) => expect(r.data).toEqual({}));
    });
  });

  describe('test add', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/webhooks?project=quasi')
        .reply(200, { data: {} });
      return sdk.webhooks
        .add({}, { project: 'quasi' })
        .then((r: any) => expect(r.data).toEqual({}));
    });
  });

  describe('test get', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/webhooks/webhook/occaecati?project=blanditiis')
        .reply(200, { data: {} });
      return sdk.webhooks
        .get('occaecati', { project: 'blanditiis' })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/webhooks/webhook/magnam?project=rem')
        .reply(200, { data: {} });
      return expect(async () => await sdk.webhooks.get()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/webhooks/webhook/magnam?project=accusamus')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.webhooks.get('magnam', { project: 'accusamus' }),
      ).rejects.toThrow();
    });
  });

  describe('test delete', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/webhooks/webhook/sint?project=rem')
        .reply(200, { data: {} });
      return sdk.webhooks
        .delete('sint', { project: 'rem' })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/webhooks/webhook/neque?project=iusto')
        .reply(200, { data: {} });
      return expect(async () => await sdk.webhooks.delete()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/webhooks/webhook/autem?project=laborum')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.webhooks.delete('autem', { project: 'laborum' }),
      ).rejects.toThrow();
    });
  });

  describe('test update', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .patch('/v3/webhooks/webhook/corporis?project=corporis')
        .reply(200, { data: {} });
      return sdk.webhooks
        .update({}, 'corporis', { project: 'corporis' })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .patch('/v3/webhooks/webhook/architecto?project=iste')
        .reply(200, { data: {} });
      return expect(async () => await sdk.webhooks.update()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .patch('/v3/webhooks/webhook/est?project=vel')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.webhooks.update({}, 'est', { project: 'vel' }),
      ).rejects.toThrow();
    });
  });

  describe('test enable', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/webhooks/webhook/tempora/enable?project=quod')
        .reply(200, { data: {} });
      return sdk.webhooks
        .enable('tempora', { project: 'quod' })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/webhooks/webhook/sequi/enable?project=aliquam')
        .reply(200, { data: {} });
      return expect(async () => await sdk.webhooks.enable()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/webhooks/webhook/odit/enable?project=vel')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.webhooks.enable('odit', { project: 'vel' }),
      ).rejects.toThrow();
    });
  });

  describe('test disable', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/webhooks/webhook/autem/disable?project=odit')
        .reply(200, { data: {} });
      return sdk.webhooks
        .disable('autem', { project: 'odit' })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/webhooks/webhook/ullam/disable?project=aperiam')
        .reply(200, { data: {} });
      return expect(async () => await sdk.webhooks.disable()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/webhooks/webhook/quia/disable?project=quas')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.webhooks.disable('quia', { project: 'quas' }),
      ).rejects.toThrow();
    });
  });
});
