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
        .get('/v3/projects/project/members?project=ratione&page=7&per_page=3')
        .reply(200, { data: {} });
      return sdk.projectMembers
        .list('ratione', { page: 7, perPage: 3 })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/projects/project/members?project=fugit&page=4&per_page=1')
        .reply(200, { data: {} });
      return expect(async () => await sdk.projectMembers.list()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/projects/project/members?project=adipisci&page=8&per_page=9')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.projectMembers.list('adipisci', { page: 8, perPage: 9 }),
      ).rejects.toThrow();
    });
  });

  describe('test add', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/projects/project/members?project=natus')
        .reply(200, { data: {} });
      return sdk.projectMembers.add({}, 'natus').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/projects/project/members?project=corrupti')
        .reply(200, { data: {} });
      return expect(async () => await sdk.projectMembers.add()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/projects/project/members?project=delectus')
        .reply(404, { data: {} });
      return expect(async () => await sdk.projectMembers.add({}, 'delectus')).rejects.toThrow();
    });
  });

  describe('test get', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/projects/project/members/member/error/omnis?project=ad')
        .reply(200, { data: {} });
      return sdk.projectMembers
        .get('ad', 'error', 'omnis')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/projects/project/members/member/eos/molestias?project=porro')
        .reply(200, { data: {} });
      return expect(async () => await sdk.projectMembers.get()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/projects/project/members/member/aut/consectetur?project=asperiores')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.projectMembers.get('asperiores', 'aut', 'consectetur'),
      ).rejects.toThrow();
    });
  });

  describe('test delete', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/projects/project/members/member/dolorum/sunt?project=quam')
        .reply(200, { data: {} });
      return sdk.projectMembers
        .delete('dolorum', 'sunt', 'quam')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/projects/project/members/member/quisquam/voluptatem?project=aut')
        .reply(200, { data: {} });
      return expect(async () => await sdk.projectMembers.delete()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/projects/project/members/member/nemo/ullam?project=quam')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.projectMembers.delete('nemo', 'ullam', 'quam'),
      ).rejects.toThrow();
    });
  });

  describe('test update', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .patch('/v3/projects/project/members/member/facere/debitis?project=eius')
        .reply(200, { data: {} });
      return sdk.projectMembers
        .update({}, 'facere', 'debitis', 'eius')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .patch('/v3/projects/project/members/member/est/at?project=voluptas')
        .reply(200, { data: {} });
      return expect(async () => await sdk.projectMembers.update()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .patch('/v3/projects/project/members/member/natus/quisquam?project=temporibus')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.projectMembers.update({}, 'natus', 'quisquam', 'temporibus'),
      ).rejects.toThrow();
    });
  });
});
