import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTop = () => {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname]) // Chạy mỗi khi đường dẫn thay đổi

  return null
}

export default ScrollToTop
