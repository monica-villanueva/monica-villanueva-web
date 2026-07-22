const CAREER_START = new Date(2008, 3); // April 2008 (month is 0-indexed)

export function getYearsOfExperience() {
  const now = new Date();
  let years = now.getFullYear() - CAREER_START.getFullYear();

  // If we haven't reached the anniversary month yet this year, subtract one
  if (
    now.getMonth() < CAREER_START.getMonth() ||
    (now.getMonth() === CAREER_START.getMonth() && now.getDate() < CAREER_START.getDate())
  ) {
    years -= 1;
  }

  return years;
}
