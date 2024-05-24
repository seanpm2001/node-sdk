import nock from 'nock';

import { DopplerSDK } from '../../../src';

import { ProjectMembersService } from '../../../src/services/projectMembers/ProjectMembers';

describe('test ProjectMembersService object', () => {
  it('should be an object', () => {
    expect(typeof ProjectMembersService).toBe('function');
  });
});

describe('test ProjectMembers', () => {
  let sdk: any;

  beforeEach(() => {
    sdk = new DopplerSDK({});

    nock.cleanAll();
  });

  describe('test list', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/projects/project/members?project=mollitia&page=1&per_page=5')
        .reply(200, { data: {} });
      return sdk.projectMembers
        .list('mollitia', { page: 1, perPage: 5 })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/projects/project/members?project=natus&page=3&per_page=8')
        .reply(200, { data: {} });
      return expect(async () => await sdk.projectMembers.list()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/projects/project/members?project=officia&page=1&per_page=7')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.projectMembers.list('officia', { page: 1, perPage: 7 }),
      ).rejects.toThrow();
    });
  });

  describe('test add', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/projects/project/members?project=possimus')
        .reply(200, { data: {} });
      return sdk.projectMembers.add({}, 'possimus').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/projects/project/members?project=provident')
        .reply(200, { data: {} });
      return expect(async () => await sdk.projectMembers.add()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/projects/project/members?project=culpa')
        .reply(404, { data: {} });
      return expect(async () => await sdk.projectMembers.add({}, 'culpa')).rejects.toThrow();
    });
  });

  describe('test get', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/projects/project/members/member/vel/itaque?project=fugit')
        .reply(200, { data: {} });
      return sdk.projectMembers
        .get('fugit', 'vel', 'itaque')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/projects/project/members/member/quis/perferendis?project=ad')
        .reply(200, { data: {} });
      return expect(async () => await sdk.projectMembers.get()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/projects/project/members/member/dicta/praesentium?project=ratione')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.projectMembers.get('ratione', 'dicta', 'praesentium'),
      ).rejects.toThrow();
    });
  });

  describe('test delete', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/projects/project/members/member/nam/illum?project=iusto')
        .reply(200, { data: {} });
      return sdk.projectMembers
        .delete('nam', 'illum', 'iusto')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/projects/project/members/member/rem/voluptatem?project=quisquam')
        .reply(200, { data: {} });
      return expect(async () => await sdk.projectMembers.delete()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/projects/project/members/member/velit/odit?project=esse')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.projectMembers.delete('velit', 'odit', 'esse'),
      ).rejects.toThrow();
    });
  });

  describe('test update', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .patch('/v3/projects/project/members/member/consequatur/praesentium?project=impedit')
        .reply(200, { data: {} });
      return sdk.projectMembers
        .update({}, 'consequatur', 'praesentium', 'impedit')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .patch('/v3/projects/project/members/member/illum/voluptatibus?project=voluptate')
        .reply(200, { data: {} });
      return expect(async () => await sdk.projectMembers.update()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .patch('/v3/projects/project/members/member/maiores/aliquid?project=vel')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.projectMembers.update({}, 'maiores', 'aliquid', 'vel'),
      ).rejects.toThrow();
    });
  });
});
