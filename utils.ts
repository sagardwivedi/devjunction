export const getCurrentDate = (): string => {
  const date = new Date();
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
};
