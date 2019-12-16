interface IAddress {
  number: string;
  street: string;
  city: string;
  country: string;
}

interface ICompany {
  companyId: string;
  companyName: string;
}

export class User {
  public id: number;
  public name: string;
  public username: string;
  public address: IAddress;
  public phone: string;
  public website: string;
  public company: ICompany;

  constructor(
    name: string,
    company: ICompany,
    phone?: string,
    address?: IAddress,
    website?: string
  ) {
    this.id = Math.round(Math.random() * 10);
    this.name = name;
    this.phone = phone;
    this.username = name + company.companyId;
    this.address = address;
    this.website = website;
  }
}
