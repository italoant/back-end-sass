export interface BaseRepositorieInterface<T> {
  findById(id: any): Promise<T>;
  findAll(): Promise<T[]>;
  create(data: any): Promise<T>;
  delete(id: any): Promise<void>;
  update(data: any): Promise<void>;
}
