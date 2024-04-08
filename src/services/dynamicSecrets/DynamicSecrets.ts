import BaseService from '../../BaseService';

import { RevokeLeaseResponse } from './models/RevokeLeaseResponse';
import { RevokeLeaseRequest } from './models/RevokeLeaseRequest';
import { IssueLeaseResponse } from './models/IssueLeaseResponse';
import { IssueLeaseRequest } from './models/IssueLeaseRequest';

export class DynamicSecretsService extends BaseService {
  /**
   * @summary Revoke Lease

   * @returns {Promise<RevokeLeaseResponse>} - The promise with the result
   */
  async revokeLease(input: RevokeLeaseRequest): Promise<RevokeLeaseResponse> {
    const headers: { [key: string]: string } = { 'Content-Type': 'application/json' };
    const urlEndpoint = '/v3/configs/config/dynamic_secrets/dynamic_secret/leases/lease';
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
    const responseModel = response.data as RevokeLeaseResponse;
    return responseModel;
  }

  /**
   * @summary Issue Lease
   * @description Issue a lease for a dynamic secret

   * @returns {Promise<IssueLeaseResponse>} - The promise with the result
   */
  async issueLease(input: IssueLeaseRequest): Promise<IssueLeaseResponse> {
    const headers: { [key: string]: string } = { 'Content-Type': 'application/json' };
    const urlEndpoint = '/v3/configs/config/dynamic_secrets/dynamic_secret/leases';
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
    const responseModel = response.data as IssueLeaseResponse;
    return responseModel;
  }
}
