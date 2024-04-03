import BaseService from '../../BaseService';

import { WorkplaceRolesListResponse } from './models/WorkplaceRolesListResponse';
import { WorkplaceRolesCreateResponse } from './models/WorkplaceRolesCreateResponse';
import { WorkplaceRolesCreateRequest } from './models/WorkplaceRolesCreateRequest';
import { WorkplaceRolesGetResponse } from './models/WorkplaceRolesGetResponse';
import { WorkplaceRolesUpdateResponse } from './models/WorkplaceRolesUpdateResponse';
import { WorkplaceRolesUpdateRequest } from './models/WorkplaceRolesUpdateRequest';
import { ListPermissionsResponse } from './models/ListPermissionsResponse';

import { serializePath } from '../../http/QuerySerializer';

export class WorkplaceRolesService extends BaseService {
  /**
   * @summary List

   * @returns {Promise<WorkplaceRolesListResponse>} - The promise with the result
   */
  async list(): Promise<WorkplaceRolesListResponse> {
    const urlEndpoint = '/v3/workplace/roles';
    const finalUrl = encodeURI(`${this.baseUrl + urlEndpoint}`);
    const response: any = await this.httpClient.get(
      finalUrl,
      {},
      {
        ...this.getAuthorizationHeader(),
      },
      true,
    );
    const responseModel = response.data as WorkplaceRolesListResponse;
    return responseModel;
  }

  /**
   * @summary Create

   * @returns {Promise<WorkplaceRolesCreateResponse>} - The promise with the result
   */
  async create(input: WorkplaceRolesCreateRequest): Promise<WorkplaceRolesCreateResponse> {
    const headers: { [key: string]: string } = { 'Content-Type': 'application/json' };
    const urlEndpoint = '/v3/workplace/roles';
    const finalUrl = encodeURI(`${this.baseUrl + urlEndpoint}`);
    const response: any = await this.httpClient.post(
      finalUrl,
      input,
      {
        ...headers,
        ...this.getAuthorizationHeader(),
      },
      true,
    );
    const responseModel = response.data as WorkplaceRolesCreateResponse;
    return responseModel;
  }

  /**
   * @summary Retrieve

   * @param role The role's unique identifier
   * @returns {Promise<WorkplaceRolesGetResponse>} - The promise with the result
   */
  async get(role: string): Promise<WorkplaceRolesGetResponse> {
    if (role === undefined) {
      throw new Error('The following parameter is required: role, cannot be empty or blank');
    }
    let urlEndpoint = '/v3/workplace/roles/role/{role}';
    urlEndpoint = urlEndpoint.replace('{role}', serializePath('simple', false, role, undefined));
    const finalUrl = encodeURI(`${this.baseUrl + urlEndpoint}`);
    const response: any = await this.httpClient.get(
      finalUrl,
      {},
      {
        ...this.getAuthorizationHeader(),
      },
      true,
    );
    const responseModel = response.data as WorkplaceRolesGetResponse;
    return responseModel;
  }

  /**
   * @summary Update

   * @param role The role's unique identifier, which is the initial name the role was given
   * @returns {Promise<WorkplaceRolesUpdateResponse>} - The promise with the result
   */
  async update(
    input: WorkplaceRolesUpdateRequest,
    role: string,
  ): Promise<WorkplaceRolesUpdateResponse> {
    if (role === undefined) {
      throw new Error('The following parameter is required: role, cannot be empty or blank');
    }
    const headers: { [key: string]: string } = { 'Content-Type': 'application/json' };
    let urlEndpoint = '/v3/workplace/roles/role/{role}';
    urlEndpoint = urlEndpoint.replace('{role}', serializePath('simple', false, role, undefined));
    const finalUrl = encodeURI(`${this.baseUrl + urlEndpoint}`);
    const response: any = await this.httpClient.patch(
      finalUrl,
      input,
      {
        ...headers,
        ...this.getAuthorizationHeader(),
      },
      true,
    );
    const responseModel = response.data as WorkplaceRolesUpdateResponse;
    return responseModel;
  }

  /**
   * @summary Delete

   * @param role The role's unique identifier
   * @returns {Promise<any>} - The promise with the result
   */
  async delete(role: string): Promise<any> {
    if (role === undefined) {
      throw new Error('The following parameter is required: role, cannot be empty or blank');
    }
    let urlEndpoint = '/v3/workplace/roles/role/{role}';
    urlEndpoint = urlEndpoint.replace('{role}', serializePath('simple', false, role, undefined));
    const finalUrl = encodeURI(`${this.baseUrl + urlEndpoint}`);
    const response: any = await this.httpClient.delete(
      finalUrl,
      {},
      {
        ...this.getAuthorizationHeader(),
      },
      true,
    );
    const responseModel = response.data;
    return responseModel;
  }

  /**
   * @summary List Permissions

   * @returns {Promise<ListPermissionsResponse>} - The promise with the result
   */
  async listPermissions(): Promise<ListPermissionsResponse> {
    const urlEndpoint = '/v3/workplace/permissions';
    const finalUrl = encodeURI(`${this.baseUrl + urlEndpoint}`);
    const response: any = await this.httpClient.get(
      finalUrl,
      {},
      {
        ...this.getAuthorizationHeader(),
      },
      true,
    );
    const responseModel = response.data as ListPermissionsResponse;
    return responseModel;
  }
}
