const useLocalstorage = () => {
  const PREFIX = 'brunomoisao_dev_'
  const set = (key, value) => localStorage.setItem(PREFIX + key, value)
  const get = (key) => localStorage.getItem(PREFIX + key)
  const remove = (key) => localStorage.removeItem(PREFIX + key)
  const reset = () => localStorage.clear()
  return { set, get, remove, reset }
}

export default useLocalstorage
