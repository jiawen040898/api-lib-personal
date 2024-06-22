import { Moment } from 'moment';
export declare const dateTimeUtil: {
    now: () => Date;
    getUtcDateOnly: (value: Date) => Moment;
    getUtcDateOnlyIsoString: (value: Date) => string;
    getUtcDateIsoString: (value: Date) => string;
    addDays: (amount: number, value?: Date) => Date;
    isBeforeNow: (value: Date) => boolean;
    isAfterNow: (value: Date) => boolean;
    isBefore: (date: Date, compareDateOnly?: boolean, dateToCompare?: Date) => boolean;
    isAfter: (date: Date, compareDateOnly?: boolean, dateToCompare?: Date) => boolean;
    compareDate: (date1: Date, date2: Date) => number;
    getEpochNumberUntilMinute: () => number;
    getEpochNumber: () => number;
    formatByLocale: (date: Date, locale: string, format?: string) => string;
};
