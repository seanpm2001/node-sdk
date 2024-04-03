export interface ServiceAccountTokensCreateResponse {
  api_token?: ApiToken;
  api_key?: string;
  success?: boolean;
}
interface ApiToken {
  name?: string;
  slug?: string;
  created_at?: string;
  last_seen_at?: LastSeenAt;
  expires_at?: string;
}
interface LastSeenAt {
  [k: string]: unknown;
}
