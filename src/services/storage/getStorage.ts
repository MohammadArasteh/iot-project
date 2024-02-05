import { LocalStorage } from '.'

export const getStorage = () => {
	const storage = new LocalStorage()
	return storage
}
