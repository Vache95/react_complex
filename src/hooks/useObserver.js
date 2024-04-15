import { useEffect, useState } from 'react';

export const useOnViewPort = (ref, rootMargin = '0px') => {
    const [isIntersecting, setIsIntersecting] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsIntersecting(entry.isIntersecting)
            },
            {
                rootMargin,
							  threshold: 0.1
            }
        )

        if(ref.current) {
            observer.observe(ref.current)
        }

        return () => {
            if(ref.current) {
                observer.unobserve(ref.current)
            }
        }
    },[ref, rootMargin]) 

    return isIntersecting
}