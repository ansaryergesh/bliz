export const closeMessage = () => ({type: 'CLOSE_MESSAGE'})
export const successMessage = (msg) => ({type: 'SUCCESS_MESSAGE', payload: msg})
export const errorMessage = (msg) => ({type: 'ERROR_MESSAGE', payload: msg})
export const infoMessage = (msg) => ({type: 'INFO_MESSAGE', payload: msg})