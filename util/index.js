import moment from 'moment'


export function dateDeal(time) {
  let times = moment(time);
  let now = moment();
  let mistimingHour = now.diff(times, "hours");
  let mistimingMinutes = now.diff(times, "minutes");
  if (mistimingMinutes <= 60) {
    return mistimingMinutes + "分钟前";
  } else if (mistimingHour <= 24) {
    return mistimingHour + "小时前";
  } else if (mistiming <= 7) {
    return mistiming + "天前";
  } else {
    return times.format("YYYY-MM-DD");
  }
}

