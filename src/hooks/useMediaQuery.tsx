import { useMediaQuery as mediaQuery } from 'react-responsive'
const useMediaQuery = (width: string, queryType?: string) => {
  queryType = queryType || "max";

    return mediaQuery({ query: `(${queryType === "max" ? "max-width" : "min-width"}: ${width}px)` })

}

export default useMediaQuery;