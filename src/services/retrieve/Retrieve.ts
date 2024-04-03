import BaseService from '../../BaseService';

import { MemberType } from './models/MemberType';
import { MemberResponse } from './models/MemberResponse';

import { serializePath } from '../../http/QuerySerializer';

export class RetrieveService extends BaseService {
  /**
   * @summary Retrieve Member

   * @param groupSlug The group's slug
   * @param memberType Needed input variable
   * @param memberSlug The member's slug
   * @returns {Promise<MemberResponse>} - The promise with the result
   */
  async member(
    groupSlug: string,
    memberType: MemberType,
    memberSlug: string,
  ): Promise<MemberResponse> {
    if (groupSlug === undefined || memberType === undefined || memberSlug === undefined) {
      throw new Error(
        'The following are required parameters: groupSlug,memberType,memberSlug, cannot be empty or blank',
      );
    }
    let urlEndpoint = '/v3/workplace/groups/group/{group_slug}/members/{member_type}/{member_slug}';
    urlEndpoint = urlEndpoint.replace(
      '{group_slug}',
      serializePath('simple', false, groupSlug, undefined),
    );
    urlEndpoint = urlEndpoint.replace(
      '{member_type}',
      serializePath('simple', false, memberType, undefined),
    );
    urlEndpoint = urlEndpoint.replace(
      '{member_slug}',
      serializePath('simple', false, memberSlug, undefined),
    );
    const finalUrl = encodeURI(`${this.baseUrl + urlEndpoint}`);
    const response: any = await this.httpClient.get(
      finalUrl,
      {},
      {
        ...this.getAuthorizationHeader(),
      },
      true,
    );
    const responseModel = response.data as MemberResponse;
    return responseModel;
  }
}
