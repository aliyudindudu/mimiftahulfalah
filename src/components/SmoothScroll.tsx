'use client';

import { useEffect, useRef, ReactNode } from 'react';
import Lenis from '@studio-freight/lenis';

interface SmoothScrollProps {
    children: ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
    const lenisRef = useRef<Lenis | null>(null);

    useEffect(() => {
        // Initialize Lenis smooth scroll
        lenisRef.current = new Lenis({
            duration: 1.2, // Durasi scroll animation
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing function untuk smooth effect
            orientation: 'vertical', // Scroll direction
            gestureOrientation: 'vertical', // Gesture direction
            smoothWheel: true, // Enable smooth wheel scrolling
            touchMultiplier: 2, // Touch scroll multiplier
        });

        // Animation frame loop
        function raf(time: number) {
            lenisRef.current?.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // Cleanup on unmount
        return () => {
            lenisRef.current?.destroy();
        };
    }, []);

    return <>{children}</>;
}
