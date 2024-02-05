import { toast } from 'react-toastify'

export default class ToastService {
	success(msg: string) {
		toast.success(msg)
	}

	error(msg: string) {
		toast.error(msg)
	}

	warning(msg: string) {
		toast.warning(msg)
	}

	info(msg: string) {
		toast.info(msg)
	}
}
