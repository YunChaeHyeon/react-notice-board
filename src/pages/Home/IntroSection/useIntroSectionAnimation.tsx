import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function useIntroSectionAnimation() {
  const bgRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const cleanupRef = useRef<(() => void) | null>(null);

  const img1Ref = useRef<HTMLImageElement | null>(null);
  const img1CtxRef = useRef<gsap.Context | null>(null);
  const img2Ref = useRef<HTMLImageElement | null>(null);
  const img2CtxRef = useRef<gsap.Context | null>(null);

  useEffect(() => {
    // 마운트 시, play
    tryPlaySectionAnimation();

    // 언마운트 시, 이벤트 지움
    return () => {
      cleanupRef.current?.();
    };
  }, []);

  const handleSection = (el: HTMLElement | null) => {
    // ref 연결 안 됌 || 이미 실행함
    if (!el || sectionRef.current) return;

    sectionRef.current = el;
    tryPlaySectionAnimation();
  };

  const handleBg = (el: HTMLDivElement | null) => {
    // ref 연결 안 됌 || 이미 실행함
    if (!el || bgRef.current) return;

    bgRef.current = el;
    tryPlaySectionAnimation();
  };

  const handleMouseMove = (e: MouseEvent) => {
    const bg = bgRef.current;
    if (!bg) return; // ref 연결 안 됌

    const x = (e.clientX / window.innerWidth - 0.5) * 30;
    const y = (e.clientY / window.innerHeight - 0.5) * 30;

    bg.style.transform = `translate(${x}px, ${y}px) scale(1.1)`;
  };

  const tryPlaySectionAnimation = () => {
    const section = sectionRef.current;
    const bg = bgRef.current;

    if (!section || !bg) return; // ref 연결 안 됌

    if (cleanupRef.current) return; // 이미 실행됨

    section.addEventListener('mousemove', handleMouseMove);
    cleanupRef.current = () => {
      section.removeEventListener('mousemove', handleMouseMove);
      cleanupRef.current = null;
    };
  };

  const handleImg1 = (el: HTMLImageElement | null) => {
    // ref 연결 안 됌 || 이미 실행함
    if (!el || img1Ref.current) {
      return;
    }

    img1Ref.current = el;

    img1CtxRef.current = gsap.context(() => {
      gsap.to(el, {
        y: -20,
        duration: 3,
        ease: 'power1.inOut',
        yoyo: true,
        repeat: -1,
      });
    }, el);
  };

  const handleImg2 = (el: HTMLImageElement | null) => {
    // ref 연결 안 됌 || 이미 실행함
    if (!el || img2Ref.current) {
      return;
    }

    img2Ref.current = el;

    img2CtxRef.current = gsap.context(() => {
      gsap.to(el, {
        y: -30,
        duration: 4,
        ease: 'power1.inOut',
        yoyo: true,
        repeat: -1,
        delay: 0.5,
      });
    }, el);
  };

  return { handleSection, handleBg, handleImg1, handleImg2 };
}
