export const sanitizeInput = (input: string): string => {
  if (!input) return '';
  
  // Remove script tags
  const sanitized = input.replace(/<script[^>]*>.*?<\/script>/gi, '');
  
  // Remove event handlers
  sanitized.replace(/on\w+\s*=/gi, '');
  
  // Remove dangerous attributes
  sanitized.replace(/(href|src)\s*=\s*['"]\s*javascript:/gi, '');
  
  return sanitized;
};

export const validateUrl = (url: string): boolean => {
  try {
    const parsed = new URL(url);
    return parsed.protocol === 'https:' || parsed.protocol === 'http:';
  } catch {
    return false;
  }
};

export const handleExternalLinks = (url: string): string => {
  if (!validateUrl(url)) return '#';
  return url;
};
