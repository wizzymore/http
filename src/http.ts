import fetch, {Request} from "cross-fetch"

const formatURL = (url: string, params: Record<string, any> | undefined) => {
    if (!params || !Object.entries(params).length) return url

    const query = new URLSearchParams(params)
    return `${url}?${query.toString()}`
}

interface IRequest {
    cache?: RequestCache
    credentials?: RequestCredentials
    headers?: HeadersInit
    integrity?: string
    keepalive?: boolean
    mode?: RequestMode
    redirect?: RequestRedirect
    referrer?: string
    referrerPolicy?: ReferrerPolicy
    signal?: AbortSignal | null
    params?: Record<string, number | string>
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const get = async (url: string, options: IRequest = {}): Promise<any> => {
    url = formatURL(url, options?.params)
    const req = new Request(url)

    options.headers = {
        "content-type": "application/json",
        ...options?.headers,
    }

    const response = await fetch(req, {
        method: "GET",
        ...options,
    })

    const json = await response.json()
    return json
}

interface IRequestPost {
    method?: "POST" | "PUT" | "DELETE" | "PATCH"
    body?: Record<string, any>
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const post = async (
    url: string,
    options: IRequest & IRequestPost = {},
): Promise<any> => {
    url = formatURL(url, options?.params)
    const req = new Request(url)

    options.headers = {
        "content-type": "application/json",
        ...options?.headers,
    }

    if (!options.method) {
        options.method = "POST"
    }

    const response = await fetch(req, {
        ...options,
        body: JSON.stringify(options?.body),
    })

    const json = await response.json()
    return json
}

export {get, post}
