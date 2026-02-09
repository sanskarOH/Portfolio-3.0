import { useCallback, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

const morphTime = 1.5;
const cooldownTime = 0.5;

const useMorphingText = (texts: string[]) => {
  const textIndexRef = useRef(0);
  const morphRef = useRef(0);
  const cooldownRef = useRef(0);
  const timeRef = useRef(new Date());

  const text1Ref = useRef<HTMLSpanElement>(null);
  const text2Ref = useRef<HTMLSpanElement>(null);

  const setStyles = useCallback(
    (fraction: number) => {
      const text1 = text1Ref.current;
      const text2 = text2Ref.current;
      if (!text1 || !text2) return;

      text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
      text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

      const inv = 1 - fraction;
      text1.style.filter = `blur(${Math.min(8 / inv - 8, 100)}px)`;
      text1.style.opacity = `${Math.pow(inv, 0.4) * 100}%`;

      text1.textContent = texts[textIndexRef.current % texts.length];
      text2.textContent = texts[(textIndexRef.current + 1) % texts.length];
    },
    [texts],
  );

  const doMorph = useCallback(() => {
    morphRef.current -= cooldownRef.current;
    cooldownRef.current = 0;

    let fraction = morphRef.current / morphTime;

    if (fraction > 1) {
      cooldownRef.current = cooldownTime;
      fraction = 1;
    }

    setStyles(fraction);

    if (fraction === 1) {
      textIndexRef.current++;
    }
  }, [setStyles]);

  const doCooldown = useCallback(() => {
    morphRef.current = 0;
    const text1 = text1Ref.current;
    const text2 = text2Ref.current;

    if (!text1 || !text2) return;

    text2.style.filter = "none";
    text2.style.opacity = "100%";
    text1.style.filter = "none";
    text1.style.opacity = "0%";
  }, []);

  useEffect(() => {
    let rafId: number;

    const animate = () => {
      rafId = requestAnimationFrame(animate);

      const now = new Date();
      const dt = (now.getTime() - timeRef.current.getTime()) / 1000;
      timeRef.current = now;

      cooldownRef.current -= dt;

      if (cooldownRef.current <= 0) doMorph();
      else doCooldown();
    };

    animate();
    return () => cancelAnimationFrame(rafId);
  }, [doMorph, doCooldown]);

  return { text1Ref, text2Ref };
};

interface MorphingTextProps {
  texts: string[];
  className?: string;
}

const Texts: React.FC<Pick<MorphingTextProps, "texts">> = ({ texts }) => {
  const { text1Ref, text2Ref } = useMorphingText(texts);

  return (
    <>
      <span
        ref={text1Ref}
        className="absolute inset-x-0 top-0 mx-auto block w-full"
      />
      <span
        ref={text2Ref}
        className="absolute inset-x-0 top-0 mx-auto block w-full"
      />
    </>
  );
};

const SvgFilters = () => (
  <svg className="fixed h-0 w-0">
    <defs>
      <filter id="threshold">
        <feColorMatrix
          in="SourceGraphic"
          type="matrix"
          values="
            1 0 0 0 0
            0 1 0 0 0
            0 0 1 0 0
            0 0 0 255 -140
          "
        />
      </filter>
    </defs>
  </svg>
);

export const MorphingText: React.FC<MorphingTextProps> = ({
  texts,
  className,
}) => {
  return (
    <div
      className={cn(
        "relative mx-auto h-12 w-full max-w-screen-md text-center font-sans font-bold leading-none",
        "text-xl md:text-3xl lg:text-4xl",
        "[filter:url(#threshold)_blur(0.6px)]",
        className,
      )}
    >
      <Texts texts={texts} />
      <SvgFilters />
    </div>
  );
};
