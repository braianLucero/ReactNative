// en esta plantilla lo queremos hacer es hacer que el paquete json pueda ser visualizado en el browser 


// Generated by https://quicktype.io

export interface ReqResListado {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: Usuario[];
    support: Support;
}

export interface Usuario {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}

export interface Support {
    url: string;
    text: string;
}
