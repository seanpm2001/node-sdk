import nock from 'nock';

import { DopplerSDK } from '../../../src';

import { WorkplaceRolesService } from '../../../src/services/workplaceRoles/WorkplaceRoles';

describe('test WorkplaceRolesService object', () => {
  it('should be an object', () => {
    expect(typeof WorkplaceRolesService).toBe('function');
  });
});

describe('test WorkplaceRoles', () => {
  let sdk: any;

  beforeEach(() => {
    sdk = new DopplerSDK({});

    nock.cleanAll();
  });

  describe('test list', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/workplace/roles')
        .reply(200, { data: {} });
      return sdk.workplaceRoles.list().then((r: any) => expect(r.data).toEqual({}));
    });
  });

  describe('test create', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .post('/v3/workplace/roles')
        .reply(200, { data: {} });
      return sdk.workplaceRoles.create({}).then((r: any) => expect(r.data).toEqual({}));
    });
  });

  describe('test get', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/workplace/roles/role/illum')
        .reply(200, { data: {} });
      return sdk.workplaceRoles.get('illum').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/workplace/roles/role/adipisci')
        .reply(200, { data: {} });
      return expect(async () => await sdk.workplaceRoles.get()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/workplace/roles/role/officiis')
        .reply(404, { data: {} });
      return expect(async () => await sdk.workplaceRoles.get('officiis')).rejects.toThrow();
    });
  });

  describe('test delete', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/workplace/roles/role/architecto')
        .reply(200, { data: {} });
      return sdk.workplaceRoles.delete('architecto').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/workplace/roles/role/itaque')
        .reply(200, { data: {} });
      return expect(async () => await sdk.workplaceRoles.delete()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .delete('/v3/workplace/roles/role/enim')
        .reply(404, { data: {} });
      return expect(async () => await sdk.workplaceRoles.delete('enim')).rejects.toThrow();
    });
  });

  describe('test update', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .patch('/v3/workplace/roles/role/nesciunt')
        .reply(200, { data: {} });
      return sdk.workplaceRoles.update({}, 'nesciunt').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.doppler.com')
        .patch('/v3/workplace/roles/role/qui')
        .reply(200, { data: {} });
      return expect(async () => await sdk.workplaceRoles.update()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.doppler.com')
        .patch('/v3/workplace/roles/role/inventore')
        .reply(404, { data: {} });
      return expect(async () => await sdk.workplaceRoles.update({}, 'inventore')).rejects.toThrow();
    });
  });

  describe('test listPermissions', () => {
    test('test api call', () => {
      const scope = nock('https://api.doppler.com')
        .get('/v3/workplace/permissions')
        .reply(200, { data: {} });
      return sdk.workplaceRoles.listPermissions().then((r: any) => expect(r.data).toEqual({}));
    });
  });
});
