import ToastService from './toastService'

const service = new ToastService()

export default function getToastInstance() {
	return service
}
