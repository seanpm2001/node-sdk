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
        .get('/v3/projects/project/members?project=quis&page=3&per_page=7')
        .reply(200, { data: {} });
      return sdk.projectMembers
        .list('quis', { page: 3, perPage: 7 })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/projects/project/members?project=natus&page=9&per_page=1')
        .reply(200, { data: {} });
      return expect(async () => await sdk.projectMembers.list()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/projects/project/members?project=sed&page=4&per_page=9')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.projectMembers.list('sed', { page: 4, perPage: 9 }),
      ).rejects.toThrow();
    });
  });

  describe('test add', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/projects/project/members?project=architecto')
        .reply(200, { data: {} });
      return sdk.projectMembers.add({}, 'architecto').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/projects/project/members?project=veritatis')
        .reply(200, { data: {} });
      return expect(async () => await sdk.projectMembers.add()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/projects/project/members?project=deserunt')
        .reply(404, { data: {} });
      return expect(async () => await sdk.projectMembers.add({}, 'deserunt')).rejects.toThrow();
    });
  });

  describe('test get', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/projects/project/members/member/sint/totam?project=numquam')
        .reply(200, { data: {} });
      return sdk.projectMembers
        .get('numquam', 'sint', 'totam')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/projects/project/members/member/modi/provident?project=numquam')
        .reply(200, { data: {} });
      return expect(async () => await sdk.projectMembers.get()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/projects/project/members/member/nulla/fugiat?project=voluptatibus')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.projectMembers.get('voluptatibus', 'nulla', 'fugiat'),
      ).rejects.toThrow();
    });
  });

  describe('test delete', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/projects/project/members/member/nam/asperiores?project=repellendus')
        .reply(200, { data: {} });
      return sdk.projectMembers
        .delete('nam', 'asperiores', 'repellendus')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/projects/project/members/member/eos/eos?project=incidunt')
        .reply(200, { data: {} });
      return expect(async () => await sdk.projectMembers.delete()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/projects/project/members/member/necessitatibus/eveniet?project=doloremque')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.projectMembers.delete('necessitatibus', 'eveniet', 'doloremque'),
      ).rejects.toThrow();
    });
  });

  describe('test update', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .patch('/v3/projects/project/members/member/vero/quibusdam?project=itaque')
        .reply(200, { data: {} });
      return sdk.projectMembers
        .update({}, 'vero', 'quibusdam', 'itaque')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .patch('/v3/projects/project/members/member/quia/ullam?project=magnam')
        .reply(200, { data: {} });
      return expect(async () => await sdk.projectMembers.update()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .patch('/v3/projects/project/members/member/iste/expedita?project=quo')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.projectMembers.update({}, 'iste', 'expedita', 'quo'),
      ).rejects.toThrow();
    });
  });
});
