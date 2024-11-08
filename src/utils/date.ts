import "moment/locale/ko";

import moment, { Moment } from "moment";

import _ from "lodash";

type DateFormat =
  | "YYYY-MM-DD"
  | "YYYY-MM-DD HH:mm:ss"
  | "YY/MM/DD"
  | "YYYY-MM"
  | "YYYY"
  | "YYYY-MM-DD HH:mm"
  | "YYYY-MM-DDTHH:mm:ss"
  | "YYYY-MM-DDTHH:mm:ss.SSS";

export const toStartOfDayUTC = (
  date: Moment | string,
  format?: string
): string => {
  if (moment(date).isUTC()) return date.toString();
  return moment(date).startOf("day").utc().format(format);
};

export const toEndOfDayUTC = (
  date: Moment | string,
  format?: string
): string => {
  if (moment(date).isUTC()) return date.toString();
  return moment(date).endOf("day").utc().format(format);
};

export const convertDefaultDateFormat = (
  date: string | Date | null | undefined | Moment,
  format: DateFormat = "YYYY-MM-DD HH:mm:ss"
) => {
  if (_.isEmpty(date)) return "-";
  if (moment(date).isValid()) return moment(date).format(format);
  else return String(date);
};

export const convertDateFormatByPeriod = (
  date: string | Date | null | undefined | Moment,
  period: "day" | "month" | "year"
) => {
  const format =
    period === "day" ? "YYYY-MM-DD" : period === "month" ? "YYYY-MM" : "YYYY";
  if (_.isEmpty(date)) return "";
  if (moment(date).isValid()) return moment(date).format(format);
  else return String(date);
};

export const convertDateFormatByTenMinutes = (
  date: string | Date | null | undefined | Moment,
  format: string = "YYYY-MM-DD HH:mm"
): string => {
  const originalDate = moment(date);

  const roundedMinutes = Math.ceil(originalDate.minutes() / 10) * 10;
  const adjustedDate = moment(originalDate).minutes(roundedMinutes).utc();

  const koreaTime = adjustedDate.local().format(format);

  return koreaTime;
};

export const dateFormatByPeriod = (
  date: string | Date | null | undefined | Moment,
  period: "day" | "month" | "year"
) => {
  const format =
    period === "day" ? "YYYY-MM-DD" : period === "month" ? "YYYY-MM" : "YYYY";
  if (_.isEmpty(date)) return "";
  if (moment(date).isValid()) return moment(date).format(format);
  else return String(date);
};
