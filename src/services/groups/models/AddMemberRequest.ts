type Type_ = 'workplace_user';

export interface AddMemberRequest {
  /**
   * The member's slug
   */
  slug: string;
  type_: Type_;
}
