export function formatDate(dateString: string, locale: string): string {
  if (!dateString) {
    return "";
  }
  
  const date = new Date(dateString);
  
  // Check if date is valid
  if (isNaN(date.getTime())) {
    console.warn(`Invalid date string: ${dateString}`);
    return dateString; // Return original string if invalid
  }
  
  try {
    return date.toLocaleDateString(locale, {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch (error) {
    console.warn(`Error formatting date with locale ${locale}:`, error);
    // Fallback to default locale
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }
}