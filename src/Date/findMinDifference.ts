import { expect } from "../expect";

export const findMinDifference = (timePoints: string[]): number => {
  const times = timePoints.map((time) => {
    const [hour, minute] = time.split(":");
    return parseInt(hour) * 60 + parseInt(minute);
  });
  times.sort((a, b) => a - b);
  let minDiff = Infinity;
  for (let i = 1; i < times.length; i++) {
    minDiff = Math.min(minDiff, times[i] - times[i - 1]);
  }
  minDiff = Math.min(minDiff, 1440 - times[times.length - 1] + times[0]);
  return minDiff;
};

type time = `${hour}:${minute}`;
export const findMinDifferencePractice = (timePoints: time[]): number => {
  const times = timePoints.map((time) => {
    const [hour, minute] = time.split(":");
    return parseInt(hour) * 60 + parseInt(minute);
  });
  times.sort((a, b) => a - b);
  let minDiff = Infinity;
  for (let i = 1; i < times.length; i++) {
    minDiff = Math.min(minDiff, times[i] - times[i - 1]);
  }
  return Math.min(minDiff, 1440 - times[times.length - 1] + times[0]);
};

export const findMinDifferenceTest = (
  testFunc: (timePoints: time[]) => number
) => {
  expect(testFunc(["23:59", "00:00"]), 1);
  expect(testFunc(["00:00", "23:59", "00:00"]), 0);
  expect(testFunc(["05:31", "22:08", "00:35"]), 147);
};

type hour =
  | "01"
  | "02"
  | "03"
  | "04"
  | "05"
  | "06"
  | "07"
  | "08"
  | "09"
  | "10"
  | "11"
  | "12"
  | "13"
  | "14"
  | "15"
  | "16"
  | "17"
  | "18"
  | "19"
  | "20"
  | "21"
  | "22"
  | "23"
  | "00";

type minute =
  | "00"
  | "01"
  | "02"
  | "03"
  | "04"
  | "05"
  | "06"
  | "07"
  | "08"
  | "09"
  | "10"
  | "11"
  | "12"
  | "13"
  | "14"
  | "15"
  | "16"
  | "17"
  | "18"
  | "19"
  | "20"
  | "21"
  | "22"
  | "23"
  | "24"
  | "25"
  | "26"
  | "27"
  | "28"
  | "29"
  | "30"
  | "31"
  | "32"
  | "33"
  | "34"
  | "35"
  | "36"
  | "37"
  | "38"
  | "39"
  | "40"
  | "41"
  | "42"
  | "43"
  | "44"
  | "45"
  | "46"
  | "47"
  | "48"
  | "49"
  | "50"
  | "51"
  | "52"
  | "53"
  | "54"
  | "55"
  | "56"
  | "57"
  | "58"
  | "59";
