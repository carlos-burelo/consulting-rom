export interface ConfigInterface {
  activeHours: TimeFormat
  activeDays: TimeFormat
  minTimePerAppointment: TimeFormat
  startHour: RelativeTimeFormat
  // endHour: RelativeTimeFormat
}

export const CONFIG: ConfigInterface = {
  activeHours: '5h', // 8 hours per day
  activeDays: '6d', // 5 days per week (Monday to Saturday)
  minTimePerAppointment: '30m', // 30 minutes per appointment
  startHour: '5am', // 5am
  // endHour: '5pm', // 5pm
}