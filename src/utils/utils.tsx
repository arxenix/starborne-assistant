export function encodeFormData(data: {[key: string]: string}) {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&');
}

export function getGameProgress(startDate: Date, endDate: Date): [number, number] {
    const toUTC = (d: Date) => Date.UTC(d.getFullYear(), d.getMonth(), d.getDate());
    const dayDiff = (s: Date, e: Date) => Math.floor((toUTC(e) - toUTC(s))/(1000*60*60*24))
    const totalDays = dayDiff(startDate, endDate);
    const daysIn = dayDiff(startDate, new Date());

    return [daysIn, totalDays]
}
