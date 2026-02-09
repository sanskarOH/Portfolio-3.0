import confetti from "canvas-confetti";
import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/ui/terminal";

export default function SkillTerminal() {
  const handleClick = () => {
    const end = Date.now() + 3 * 1000;
    const colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1"];

    const frame = () => {
      if (Date.now() > end) return;

      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        startVelocity: 60,
        origin: { x: 0, y: 0.5 },
        colors,
      });

      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        startVelocity: 60,
        origin: { x: 1, y: 0.5 },
        colors,
      });

      requestAnimationFrame(frame);
    };

    frame();
  };

  return (
    <div className="max-w-6xl mx-auto px-4">
      <Terminal>
        <TypingAnimation delay={300}>Et Voilà!</TypingAnimation>

        <AnimatedSpan delay={300}>Backend Engineer</AnimatedSpan>
        <AnimatedSpan>Learner</AnimatedSpan>

        <TypingAnimation>Huzzah! You discovered me!</TypingAnimation>

        {/* RIGHT-ALIGNED TERMINAL BUTTON */}
        <AnimatedSpan delay={900} className="flex">
          <button
            className="
              
              font-mono text-sm
              text-emerald-500
              hover:underline
              transition
            "
            onClick={handleClick}
          >
            $ click me
          </button>
        </AnimatedSpan>
      </Terminal>
    </div>
  );
}
