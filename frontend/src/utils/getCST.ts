import moment from 'moment-timezone';

const getCST = (upt : string) => {
    let m = moment.utc(upt);

    // convert using the TZDB identifier for US Central time
    m.tz('America/Chicago');
    
    // format output however you desire
    let cst = m.format("YYYY-MM-DD HH:mm:ss A");
    return cst
}

export default getCST;
