'use client';

import { useEffect, useRef, useState, RefObject } from 'react';

interface UseScrollAnimationOptions {
    threshold?: number;
    rootMargin?: string;
    triggerOnce?: boolean; // If false, re-triggers on scroll up/down
}

export function useScrollAnimation<T extends HTMLElement>(
    options: UseScrollAnimationOptions = {}
): [RefObject<T | null>, boolean] {
    const { threshold = 0.15, rootMargin = '0px', triggerOnce = false } = options;
    const elementRef = useRef<T>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Only enable on tablet/desktop (768px+)
        const mediaQuery = window.matchMedia('(min-width: 768px)');

        if (!mediaQuery.matches) {
            setIsVisible(true); // Always visible on mobile
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                // Update visibility based on intersection
                if (triggerOnce) {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    }
                } else {
                    // Re-trigger animation on scroll up/down
                    setIsVisible(entry.isIntersecting);
                }
            },
            {
                root: null,
                rootMargin,
                threshold,
            }
        );

        const element = elementRef.current;
        if (element) {
            observer.observe(element);
        }

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, [threshold, rootMargin, triggerOnce]);

    return [elementRef, isVisible];
}
