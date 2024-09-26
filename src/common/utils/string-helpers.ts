export function truncateString(str: string | unknown, limit: number = 2000): string {
  if (typeof str !== 'string') {
    return '';
  }
  if (str.length > limit) {
    return str.substring(0, limit - 1) + '...';
  }

  return str;
}
