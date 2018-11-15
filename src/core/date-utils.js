// @flow

export const monthDiff = (date1: Date, date2: Date) => {
  // diff ms
  const diff = Math.floor(date2.getTime() - date1.getTime())
  // 1 day dalam 1ms
  const day = 1000 * 60 * 60 * 24

  const dayInMonth = 31

  // hitung jumlah hari
  const days = Math.floor(diff / day)

  // hitung jumlah bulah
  const months = Math.floor(days / dayInMonth)

  return months === 0 ? `${days}h` : `${months}b`
}
