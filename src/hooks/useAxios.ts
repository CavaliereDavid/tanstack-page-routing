import { useEffect, useState } from "react"
import API from "../utils/axios"

const useAxios = <T>(path: string = "", autoFetch: boolean = true) => {
    const [pending, setPending] = useState(false)
    const [data, setData] = useState<T | undefined>()
    const [error, setError] = useState()

    if(autoFetch) {
        useEffect(() => {
            fetch()
        }, [])
    }

    const fetch = (filters: string = "") => {
        setPending(true)

        API.get<T>(path + filters).then((res) => {
            setData(res.data)
        }).catch(e => {
            setError(e)
        }).finally(() => {
            setPending(false)
        })
    }

    return {
        pending,
        data,
        error,
        fetch
    }
}

export default useAxios