export const formatDateHebrew = (date: Date): string => {
  const newDate = new Date(date);
  return newDate.toLocaleDateString("he-IL", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export const formatDateHebrewShort = (date: Date): string => {
  const newDate = new Date(date);
  return newDate.toLocaleDateString("he-IL", {
    month: "short",
    day: "numeric",
  });
};
