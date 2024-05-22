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
        .get('/v3/projects/project/members?project=ad&page=1&per_page=6')
        .reply(200, { data: {} });
      return sdk.projectMembers
        .list('ad', { page: 1, perPage: 6 })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/projects/project/members?project=reiciendis&page=6&per_page=4')
        .reply(200, { data: {} });
      return expect(async () => await sdk.projectMembers.list()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/projects/project/members?project=eligendi&page=6&per_page=2')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.projectMembers.list('eligendi', { page: 6, perPage: 2 }),
      ).rejects.toThrow();
    });
  });

  describe('test add', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/projects/project/members?project=aut')
        .reply(200, { data: {} });
      return sdk.projectMembers.add({}, 'aut').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/projects/project/members?project=illum')
        .reply(200, { data: {} });
      return expect(async () => await sdk.projectMembers.add()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/projects/project/members?project=sit')
        .reply(404, { data: {} });
      return expect(async () => await sdk.projectMembers.add({}, 'sit')).rejects.toThrow();
    });
  });

  describe('test get', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/projects/project/members/member/at/fuga?project=esse')
        .reply(200, { data: {} });
      return sdk.projectMembers
        .get('esse', 'at', 'fuga')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/projects/project/members/member/sequi/maxime?project=vero')
        .reply(200, { data: {} });
      return expect(async () => await sdk.projectMembers.get()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/projects/project/members/member/quae/ad?project=cupiditate')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.projectMembers.get('cupiditate', 'quae', 'ad'),
      ).rejects.toThrow();
    });
  });

  describe('test delete', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/projects/project/members/member/sunt/voluptatibus?project=eveniet')
        .reply(200, { data: {} });
      return sdk.projectMembers
        .delete('sunt', 'voluptatibus', 'eveniet')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/projects/project/members/member/aliquid/error?project=aut')
        .reply(200, { data: {} });
      return expect(async () => await sdk.projectMembers.delete()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/projects/project/members/member/natus/placeat?project=harum')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.projectMembers.delete('natus', 'placeat', 'harum'),
      ).rejects.toThrow();
    });
  });

  describe('test update', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .patch('/v3/projects/project/members/member/doloremque/aut?project=enim')
        .reply(200, { data: {} });
      return sdk.projectMembers
        .update({}, 'doloremque', 'aut', 'enim')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .patch('/v3/projects/project/members/member/enim/libero?project=ullam')
        .reply(200, { data: {} });
      return expect(async () => await sdk.projectMembers.update()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .patch('/v3/projects/project/members/member/accusamus/nihil?project=impedit')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.projectMembers.update({}, 'accusamus', 'nihil', 'impedit'),
      ).rejects.toThrow();
    });
  });
});
