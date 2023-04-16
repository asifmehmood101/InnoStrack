const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth();
const currentDay = currentDate.getDate();

// format YY-MM-DD
export const DateFormatter = `${currentYear}-${currentMonth}-${currentDay}`;
