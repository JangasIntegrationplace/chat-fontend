export default function useSession(key) {
  const storedValue = sessionStorage.getItem(key);
  function set(key, value) {
    sessionStorage.setItem(key, value);
  }
  return [storedValue, set];
}
