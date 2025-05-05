export type Booking =    {
    object: string;
    id: string;
    tracking_id: string;
    subject: string,
    status: string;
    in_trash: false;
    creation_time: string;
    starting_time: string;
    last_updated_time: string;
    attendees: string[],
    owner: string,
    duration_minutes: number,
    virtual_conferencing: null | string | object,
    location_description: null | string | object,
    rescheduled_booking_id: null,
    external_calendar: any,
    conversation: string,
    contact: string;
    booking_calendar: string,
}