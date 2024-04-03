import BaseService from '../../BaseService';

import { ListResponse } from './models/ListResponse';
import { CreateResponse } from './models/CreateResponse';
import { CreateRequest } from './models/CreateRequest';
import { GetResponse } from './models/GetResponse';
import { UpdateResponse } from './models/UpdateResponse';
import { UpdateRequest } from './models/UpdateRequest';
import { DeleteRequest } from './models/DeleteRequest';

import { serializeQuery } from '../../http/QuerySerializer';

export class ProjectsService extends BaseService {
  /**
   * @summary List
   * @description Projects

   * @param optionalParams - Optional parameters
   * @param optionalParams.page - Page number
   * @param optionalParams.perPage - Items per page
   * @returns {Promise<ListResponse>} - The promise with the result
   */
  async list(optionalParams: { page?: number; perPage?: number } = {}): Promise<ListResponse> {
    const { page, perPage } = optionalParams;

    const queryParams: string[] = [];
    if (page) {
      queryParams.push(serializeQuery('form', true, 'page', page));
    }
    if (perPage) {
      queryParams.push(serializeQuery('form', true, 'per_page', perPage));
    }
    const urlEndpoint = '/v3/projects';
    const urlParams = queryParams.length > 0 ? `?${queryParams.join('&')}` : '';
    const finalUrl = encodeURI(`${this.baseUrl + urlEndpoint}${urlParams}`);
    const response: any = await this.httpClient.get(
      finalUrl,
      {},
      {
        ...this.getAuthorizationHeader(),
      },
      true,
    );
    const responseModel = response.data as ListResponse;
    return responseModel;
  }

  /**
   * @summary Create
   * @description Project

   * @returns {Promise<CreateResponse>} - The promise with the result
   */
  async create(input: CreateRequest): Promise<CreateResponse> {
    const headers: { [key: string]: string } = { 'Content-Type': 'application/json' };
    const urlEndpoint = '/v3/projects';
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
    const responseModel = response.data as CreateResponse;
    return responseModel;
  }

  /**
   * @summary Retrieve
   * @description Project

   * @param project Unique identifier for the project object.
   * @returns {Promise<GetResponse>} - The promise with the result
   */
  async get(project: string): Promise<GetResponse> {
    if (project === undefined) {
      throw new Error('The following parameter is required: project, cannot be empty or blank');
    }
    const queryParams: string[] = [];
    if (project) {
      queryParams.push(serializeQuery('form', true, 'project', project));
    }
    const urlEndpoint = '/v3/projects/project';
    const finalUrl = encodeURI(`${this.baseUrl + urlEndpoint}?${queryParams.join('&')}`);
    const response: any = await this.httpClient.get(
      finalUrl,
      {},
      {
        ...this.getAuthorizationHeader(),
      },
      true,
    );
    const responseModel = response.data as GetResponse;
    return responseModel;
  }

  /**
   * @summary Update
   * @description Project

   * @returns {Promise<UpdateResponse>} - The promise with the result
   */
  async update(input: UpdateRequest): Promise<UpdateResponse> {
    const headers: { [key: string]: string } = { 'Content-Type': 'application/json' };
    const urlEndpoint = '/v3/projects/project';
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
    const responseModel = response.data as UpdateResponse;
    return responseModel;
  }

  /**
   * @summary Delete
   * @description Project

   * @returns {Promise<any>} - The promise with the result
   */
  async delete(input: DeleteRequest): Promise<any> {
    const headers: { [key: string]: string } = { 'Content-Type': 'application/json' };
    const urlEndpoint = '/v3/projects/project';
    const finalUrl = encodeURI(`${this.baseUrl + urlEndpoint}`);
    const response: any = await this.httpClient.delete(
      finalUrl,
      input,
      {
        ...headers,
        ...this.getAuthorizationHeader(),
      },
      true,
    );
    const responseModel = response.data;
    return responseModel;
  }
}
