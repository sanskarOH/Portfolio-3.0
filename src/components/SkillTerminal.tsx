"use client"

import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/ui/terminal"

export default function SkillTerminal() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-6xl px-6">
        <Terminal>
          <TypingAnimation>
            Hello, I am Sanskar Diwedi.
          </TypingAnimation>

          <AnimatedSpan delay={300}>
            Developer
          </AnimatedSpan>

          <AnimatedSpan delay={600}>
            Joker
          </AnimatedSpan>

          <TypingAnimation delay={1000}>
            Huzzah! You have successfully discovered me!
          </TypingAnimation>
        </Terminal>
      </div>
    </div>
  )
}
