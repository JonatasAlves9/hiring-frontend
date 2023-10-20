export function formatDateToCustomString(originalDate: string): string {
  // Split the original string
  const [year, month, day] = originalDate.split('-');

  // Convert the numeric month to its abbreviated English name
  const months: string[] = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const monthName = months[parseInt(month, 10) - 1];

  // Format the date
  const formattedDate = `${monthName}%20${day}%20${year}%20GMT-0300`;

  return formattedDate;
}
