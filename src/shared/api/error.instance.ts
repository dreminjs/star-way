interface Error {
	response?: {
		data?: {
			message?: string
		}
	}
	message: string
}

export const errorCatch = (error: Error): string => {
	const message = error?.response?.data?.message

	return message
		? typeof error?.response?.data?.message === 'object'
			? message[0]
			: message
		: error.message
}
