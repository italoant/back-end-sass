export interface BaseRepositorieInterface {
  findById(id: any): Promise<any>;
  findAll(): Promise<any>;
  create(data: any): Promise<any>;
  delete(id: any): Promise<void>;
  update(data: any): Promise<any>;
}
