import { Deserializable } from './deserializable.model';


export class Company implements Deserializable {
    companyId: string;
    company: string;
    address:string;
    description: string;
    image: string;
  
  
    deserialize(input: any): this {
      Object.assign(this, input);
      return this;
    }
  }
  export default new Company();
  