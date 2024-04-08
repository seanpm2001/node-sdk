import nock from 'nock';

import { DopplerSDK } from '../../../src';

import { GroupsService } from '../../../src/services/groups/Groups';

describe('test GroupsService object', () => {
  it('should be an object', () => {
    expect(typeof GroupsService).toBe('function');
  });
});

describe('test Groups', () => {
  let sdk: any;

  beforeEach(() => {
    sdk = new DopplerSDK({});

    nock.cleanAll();
  });

  describe('test get', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/workplace/groups/group/saepe')
        .reply(200, { data: {} });
      return sdk.groups.get('saepe').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/workplace/groups/group/rerum')
        .reply(200, { data: {} });
      return expect(async () => await sdk.groups.get()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/workplace/groups/group/suscipit')
        .reply(404, { data: {} });
      return expect(async () => await sdk.groups.get('suscipit')).rejects.toThrow();
    });
  });

  describe('test delete', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/workplace/groups/group/atque')
        .reply(200, { data: {} });
      return sdk.groups.delete('atque').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/workplace/groups/group/tempora')
        .reply(200, { data: {} });
      return expect(async () => await sdk.groups.delete()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/workplace/groups/group/blanditiis')
        .reply(404, { data: {} });
      return expect(async () => await sdk.groups.delete('blanditiis')).rejects.toThrow();
    });
  });

  describe('test update', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .patch('/v3/workplace/groups/group/aut')
        .reply(200, { data: {} });
      return sdk.groups.update({}, 'aut').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .patch('/v3/workplace/groups/group/nobis')
        .reply(200, { data: {} });
      return expect(async () => await sdk.groups.update()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .patch('/v3/workplace/groups/group/sit')
        .reply(404, { data: {} });
      return expect(async () => await sdk.groups.update({}, 'sit')).rejects.toThrow();
    });
  });

  describe('test list', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/workplace/groups?page=5&per_page=3')
        .reply(200, { data: {} });
      return sdk.groups.list({ page: 5, perPage: 3 }).then((r: any) => expect(r.data).toEqual({}));
    });
  });

  describe('test create', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/workplace/groups')
        .reply(200, { data: {} });
      return sdk.groups.create({}).then((r: any) => expect(r.data).toEqual({}));
    });
  });

  describe('test deleteMember', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/workplace/groups/group/voluptatum/members/dolorum/ut')
        .reply(200, { data: {} });
      return sdk.groups
        .deleteMember('voluptatum', 'dolorum', 'ut')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/workplace/groups/group/ducimus/members/rem/exercitationem')
        .reply(200, { data: {} });
      return expect(async () => await sdk.groups.deleteMember()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/workplace/groups/group/aperiam/members/necessitatibus/voluptatum')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.groups.deleteMember('aperiam', 'necessitatibus', 'voluptatum'),
      ).rejects.toThrow();
    });
  });

  describe('test addMember', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/workplace/groups/group/vero/members')
        .reply(200, { data: {} });
      return sdk.groups.addMember({}, 'vero').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/workplace/groups/group/optio/members')
        .reply(200, { data: {} });
      return expect(async () => await sdk.groups.addMember()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/workplace/groups/group/quaerat/members')
        .reply(404, { data: {} });
      return expect(async () => await sdk.groups.addMember({}, 'quaerat')).rejects.toThrow();
    });
  });
});
