export interface UpdateNoteRequest {
  /**
   * Unique identifier for the project object.
   */
  project: string;
  /**
   * Deprecated: Config is no longer required as notes have always been set at the project level.
   */
  config?: string;
  /**
   * The name of the secret
   */
  secret: string;
  /**
   * The note you want to set on the secret. This note will be applied to the specified secret in all environments.
   */
  note: string;
}
