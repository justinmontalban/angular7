import { Deserializable } from './deserializable.model';

export class Profile implements Deserializable {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  position: string;
  companyId: string;
  address: string;
  description: string;
  image: string;


  deserialize(input: any): this {
    Object.assign(this, input);
    return this;
  }
}
export default new Profile();
