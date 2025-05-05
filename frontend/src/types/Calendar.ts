export type Calendar = {
    object: string;
    id: string;
    subject: string;
    host: string;
    name: string;
    published: boolean,
    duration_minutes: number
    hub_id? : number | null 
}
