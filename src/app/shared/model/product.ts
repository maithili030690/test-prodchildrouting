export interface Iproducts{
    pname: string;
    pid: string;
    pstatus: Pstatus;
    canReturn: number;
}

export type Pstatus ="In-Progress"|"Dispatched"|"Delivered"