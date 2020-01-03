import moment from 'moment'


export function timeFix () {
  const time = new Date()
  const hour = time.getHours()
  return hour < 9 ? '早上好' : hour <= 11 ? '上午好' : hour <= 13 ? '中午好' : hour < 20 ? '下午好' : '晚上好'
}

export function dateDeal(time) {
  let times = moment(time);
  let now = moment();
  let mistiming = now.diff(times, "days");
  let mistimingHour = now.diff(times, "hours");
  let mistimingMinutes = now.diff(times, "minutes");
  if (mistimingMinutes <= 60) {
    return mistimingMinutes + "分钟前";
  } else if (mistimingHour <= 24) {
    return mistimingHour + "小时前";
  } else if (mistiming <= 7) {
    return mistiming + "天前";
  } else {
    return times.format("YYYY-MM-DD HH:mm:ss");
  }
}

