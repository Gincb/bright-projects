import { useState, useEffect } from "react"

export const useFetchData = (url: string) => {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const response = await fetch(url)
        const result = await response.json()
        setIsLoading(false)
        setData(result.data)
      } catch (error) {
        console.error(error)
        setIsLoading(false)
      }
    }
    fetchData()
  }, [url])
  return { data, isLoading }
}
