export function formatDate(date: Date) {
  const monthLookup = [
    "January", "February", "March", "April", 
    "May", "June", "July", "August", 
    "September", "October", "November", "December"
  ];
  const dayOfMonth = date.getUTCDate();
  const monthAlpha = monthLookup[date.getUTCMonth()];
  const year = date.getUTCFullYear();

  return `${dayOfMonth} ${monthAlpha.slice(0, 3)} ${year}`;
}