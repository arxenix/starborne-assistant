import {DynamicResource, ResourceHandler} from "../models/Station";

export const toUTC = (d: Date) => Date.UTC(d.getFullYear(), d.getMonth(), d.getDate(), d.getHours(), d.getMinutes(), d.getSeconds(), d.getMilliseconds());

export const datesInRange = (d1: Date, d2: Date, millis: number) => Math.abs(toUTC(d1) - toUTC(d2)) <= millis;

export function encodeFormData(data: {[key: string]: string}) {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&');
}

export function getGameProgress(startDate: Date, endDate: Date): [number, number] {
    const dayDiff = (s: Date, e: Date) => Math.floor((toUTC(e) - toUTC(s))/(1000*60*60*24))
    const totalDays = dayDiff(startDate, endDate);
    const daysIn = dayDiff(startDate, new Date());

    return [daysIn, totalDays]
}

export function formatResourceAmount(x: number): string {
    const rounded = Math.round(x);
    if (rounded >= 10000)
        return `${(rounded/1000).toFixed(1)}k`;
    else
        return rounded.toString();
}

export function extrapolateResources(resourceHandler: ResourceHandler): DynamicResource {
    const {
        r: lastResources,
        p: production,
        t: lastUpdatedStr,
        c: capacity
    } = resourceHandler;

    const lastUpdated = new Date(lastUpdatedStr);

    const now = new Date();
    const hours = (toUTC(now) - toUTC(lastUpdated))/(1000*60*60)
    const extrapolate = (last: number, prod: number) => Math.min(last + hours*prod, capacity);
    return {
        Metals: extrapolate(lastResources.Metals, production.Metals),
        Gases: extrapolate(lastResources.Gases, production.Gases),
        Crystals: extrapolate(lastResources.Crystals, production.Crystals),
        Deuterium: lastResources.Deuterium
    }
}
