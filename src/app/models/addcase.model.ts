export class Addcase {
        constructor(
            public stampNo: string,
            public fillingDate: Date,
            public status: string,
            public bench: string,
            public petitioner: string,
            public respondent: string,
            public forum : string,
            public district: string,
            public postalCode: string,
            public act?: string,
            public RegNo?: string,
            public RegDate?: Date,
            public stage?:string,
            public description?: string
          ) {  }
}