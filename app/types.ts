

type ResultType<T = any> = {
    success: boolean,
    message: string,
    data?: T
}