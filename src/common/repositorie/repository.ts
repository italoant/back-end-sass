export interface DefaultRepositorieInterface<T> {
  findById(id: string): Promise<T>;
  findAll(): Promise<T[]>;
  create(data: any): Promise<void>;
  delete(id: string): Promise<void>;
  update(data: any): Promise<void>;
}
