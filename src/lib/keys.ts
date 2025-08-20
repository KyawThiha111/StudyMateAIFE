export const GEMINI_KEY_STORAGE = "GEMINI_API_KEY";

export function getGeminiApiKey(): string | null {
  try {
    return localStorage.getItem(GEMINI_KEY_STORAGE);
  } catch {
    return null;
  }
}

export function setGeminiApiKey(key: string) {
  try {
    localStorage.setItem(GEMINI_KEY_STORAGE, key);
  } catch {
    // ignore
  }
}

export function clearGeminiApiKey() {
  try {
    localStorage.removeItem(GEMINI_KEY_STORAGE);
  } catch {
    // ignore
  }
}
