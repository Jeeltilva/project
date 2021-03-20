export interface Client {
      firstname: string;
      lastname: string;
      email: string;
      phnno: string;
      city: string;
      gender: string; 
      birthdate: Date; 
      password?: string;
      confirmpassword?: string;
      _id?:string;
      _v?:string;
      createdAt?:string;
      updatedAt?:string;
      cases?:any;
      userId?:string;
}