export interface Case {
        stampNo: string ;
        fillingDate: Date ;
        status: string ;
        bench: string ;
        petitioner: string ;
        respondent: string ;
        forum :string;
        district: string ;
        postalCode: string;
        act?: string ;
        RegNo?: string ;
        RegDate?: Date ;
        stage?:string ;
        description?: string ;
        _id: string;
        lawyer: string;
        __v: number;
        details: string;
        orders?:any;
        notes?:any;
        client?:string;
        docs?: any;
}