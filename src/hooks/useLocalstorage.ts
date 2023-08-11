const useLocalstorage = () => {
  const KEY = 'brunomoisao.dev';

  const get = (key: string) => {
    const json = localStorage.getItem(KEY) ?? '{}';
    const currentData = new Map(Object.entries(JSON.parse(json)));
    if (currentData.get(key)) {
      return currentData.get(key);
    }
    return undefined;
  };

  const set = (key: string, value: string) => {
    const json = localStorage.getItem(KEY) ?? '{}';
    const currentData = new Map(Object.entries(JSON.parse(json)));
    currentData.set(key, value);
    localStorage.setItem(KEY, JSON.stringify(Object.fromEntries(currentData)));
  };

  return { get, set };
};

export default useLocalstorage;
