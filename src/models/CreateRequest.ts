import BaseModel from './base';

export namespace CreateRequest {
  export interface Model extends BaseModel {
    name: string;
    /**
     * Identifier of the project role
     */
    default_project_role?: string;
  }
}