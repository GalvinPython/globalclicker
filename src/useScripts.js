import { useEffect } from 'react'

const useScript = url => {
    useEffect(() => {
        const script = document.createElement('script')
        script.src = url
        // script.async = true
        document.body.appendChild(script)
        return () => {
            document.body.removeChild(script)
        }
    }, 'https://raw.githubusercontent.com/HubSpot/odometer/v0.4.6/odometer.min.js')
}

export default useScript