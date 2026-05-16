/**
 * Smoothly scrolls to an element by ID with an optional offset
 */
export const scrollToElement = (id: string, offset: number = 100) => {
  const target = document.querySelector(id);
  if (!target) return;

  const top = target.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: 'smooth' });
};

/**
 * Validates email format
 */
export const isValidEmail = (email: string): boolean => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};
