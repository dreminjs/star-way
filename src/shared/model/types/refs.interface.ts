




export interface IRef {
    name: string;
    powder: number;
}


export interface IGetRefsResponse {
    referrals: IRef[];
    boost: number
}

export interface IBoostRefsResponse {
    response: boolean
}