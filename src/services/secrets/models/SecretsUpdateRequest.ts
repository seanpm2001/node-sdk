type Type_ =
  | 'string'
  | 'json'
  | 'json5'
  | 'boolean'
  | 'integer'
  | 'decimal'
  | 'email'
  | 'url'
  | 'uuidv4'
  | 'cuid2'
  | 'ulid'
  | 'datetime8601'
  | 'date8601'
  | 'yaml';
type Type_1 =
  | 'string'
  | 'json'
  | 'json5'
  | 'boolean'
  | 'integer'
  | 'decimal'
  | 'email'
  | 'url'
  | 'uuidv4'
  | 'cuid2'
  | 'ulid'
  | 'datetime8601'
  | 'date8601'
  | 'yaml';

export interface SecretsUpdateRequest {
  /**
   * Unique identifier for the project object.
   */
  project: string;
  /**
   * Name of the config object.
   */
  config: string;
  secrets?: Secrets;
  /**
   * Either `secrets` or `change_requests` is required (can't use both). Object of secrets you would like to save to the config. Try it with the sample secrets below.
   */
  change_requests?: {
    /**
     * The name of the secret.
     */
    name: string;
    /**
     * The original name of the secret. Use `null` (an actual `null`, not the string `null`) or omit this parameter for new secrets. If it differs from `name` then a rename is inferred.
     */
    originalName: string;
    /**
     * The value the secret should have. Use `null` (an actual `null`, not the string `null`) to leave the existing secret value unchanged.
     */
    value: string;
    /**
     * The value you expect the secret to have before `name` is applied. If specified, the request will only be processed if the provided value matches what's found in Doppler.
     */
    originalValue?: string;
    /**
     * Must be set to either `masked`, `unmasked`, or `restricted`.
     */
    visibility?: string;
    /**
     * Must be set to either `masked`, `unmasked`, or `restricted`. The visibility you expect the secret to have before `visibility` is applied. If specified, the request will only be processed if the provided visibility matches what's found in Doppler.
     */
    originalVisibility?: string;
    /**
     * Defaults to `false`. Can only be set to `true` if the config being updated is a branch config. If set to `true`, the provided secret will be set in both the branch config as well as the root config in that environment.
     */
    shouldPromote?: boolean;
    /**
     * Defaults to `false`. If set to `true`, will delete the secret matching the `name` field.
     */
    shouldDelete?: boolean;
    /**
     * Defaults to `false`. Can only be set to `true` if the config being updated is a branch config and there is a secret with the same name in the root config. In this case, the branch secret will inherit the value and visibility type from the root secret.
     */
    shouldConverge?: boolean;
    valueType?: ValueType;
    originalValueType?: OriginalValueType;
  }[];
}
/**
 * Either `secrets` or `change_requests` is required (can't use both). Object of secrets you would like to save to the config. Try it with the sample secrets below.
 */
interface Secrets {
  [k: string]: string;
}
/**
 * The default valueType (string) will result in no validations being applied.
 */
interface ValueType {
  type_?: Type_;
}
/**
 * The valueType you expect the secret to have before `valueType` is applied. If specified, the request will only be processed if the provided valueType matches what's found in Doppler.
 */
interface OriginalValueType {
  type_?: Type_1;
}
