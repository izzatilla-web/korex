"use client";

import { Check, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function RequestModal({ open, onClose }) {
  const [isMounted, setIsMounted] = useState(open);
  const [isVisible, setIsVisible] = useState(open);
  const [isAgree, setIsAgree] = useState(true);

  useEffect(() => {
    let timeoutId;
    let frameId;

    if (open) {
      frameId = requestAnimationFrame(() => {
        setIsMounted(true);
        setIsVisible(true);
      });

      return () => cancelAnimationFrame(frameId);
    }

    frameId = requestAnimationFrame(() => setIsVisible(false));
    timeoutId = setTimeout(() => setIsMounted(false), 260);

    return () => {
      cancelAnimationFrame(frameId);
      clearTimeout(timeoutId);
    };
  }, [open]);

  useEffect(() => {
    if (!isMounted) {
      return;
    }

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMounted, onClose]);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[90] flex items-center justify-center p-3 sm:p-5 md:p-7">
      <button
        type="button"
        aria-label="Close modal"
        onClick={onClose}
        className={[
          "absolute inset-0 bg-[#11213a]/58 backdrop-blur-[7px] transition-all duration-400 ease-out",
          isVisible ? "opacity-100" : "opacity-0",
        ].join(" ")}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="request-modal-title"
        className={[
          "relative z-10 w-full max-w-[920px] overflow-hidden rounded-[28px] border border-white/75 bg-white shadow-[0_40px_120px_rgba(12,28,54,0.24)] transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] sm:rounded-[34px]",
          isVisible
            ? "translate-y-0 scale-100 opacity-100"
            : "translate-y-6 scale-[0.975] opacity-0",
        ].join(" ")}
      >
        <div className="max-h-[calc(100vh-24px)] overflow-y-auto px-5 pb-6 pt-5 sm:max-h-[calc(100vh-40px)] sm:px-8 sm:pb-8 sm:pt-7 md:px-14 md:pb-12 md:pt-10">
          <div className="flex items-start justify-between gap-4">
            <h2
              id="request-modal-title"
              className="text-[25px] font-unbounded uppercase leading-[0.95] tracking-[-0.07em] text-[#263f73] md:text-[33px]"
            >
              Заполните форму и мы свяжемся с вами
            </h2>

            <button
              type="button"
              aria-label="Закрыть"
              onClick={onClose}
              className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-[#7f8da7] transition hover:bg-[#f3f7fc] hover:text-[#26406f]"
            >
              <X className="h-8 w-8" strokeWidth={1.8} />
            </button>
          </div>

          <form className="mt-8">
            <div className="grid gap-4 sm:gap-5">
              <input
                type="text"
                placeholder="Ваше имя"
                className={fieldClassName}
              />

              <div className="flex items-center rounded-[18px] border border-[#e0e6ef] bg-white px-4 py-4 text-[18px] text-[#28406f] shadow-[inset_0_0_0_1px_rgba(49,95,174,0.04)] transition focus-within:border-[#315fae] sm:text-[19px]">
                <span className="mr-3 shrink-0">+7</span>
                <input
                  type="tel"
                  placeholder="(___) ___-__-__"
                  className="min-w-0 flex-1 bg-transparent outline-none placeholder:text-[#8a99af]"
                />
              </div>

              <input
                type="text"
                placeholder="Введите город"
                className={fieldClassName}
              />

              <input
                type="text"
                placeholder="Напишите марку и модель авто"
                className={fieldClassName}
              />
            </div>

            <p className="mt-7 text-[15px] leading-8 text-[#9aa7bb] sm:text-[16px]">
              Нажимая кнопку Вы подтверждаете свое согласие на обработку
              персональных данных
            </p>

            <label className="mt-2 flex cursor-pointer items-center gap-4 text-[16px] leading-7 text-[#8d9bb0] sm:text-[17px]">
              <span
                className={[
                  "mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-[8px] transition",
                  isAgree
                    ? "bg-[#1f78d6] text-white"
                    : "border border-[#d7e1ef] bg-white text-transparent",
                ].join(" ")}
              >
                <Check className="h-5 w-5" strokeWidth={3} />
              </span>
              <input
                type="checkbox"
                checked={isAgree}
                onChange={(event) => setIsAgree(event.target.checked)}
                className="sr-only"
              />
              <span className="leading-[20px] sm:leading-[22px]">
                Я согласен на получение{" "}
                <a href="#" className="text-[#1c6fe0]">
                  рекламно-информационных рассылок
                </a>
              </span>
            </label>

            <div className="mt-9 sm:mt-11">
              <button
                type="submit"
                className="inline-flex min-h-[62px] w-full items-center justify-center rounded-[20px] bg-[#2d67c8] px-8 text-[20px] font-semibold tracking-[-0.04em] text-white transition hover:bg-[#245ab3] sm:w-auto sm:min-w-[300px] cursor-pointer"
              >
                Оставить заявку
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

const fieldClassName =
  "w-full rounded-[18px] border border-[#e0e6ef] bg-white px-4 py-4 text-[18px] text-[#28406f] outline-none transition placeholder:text-[#a0acbd] focus:border-[#315fae] sm:text-[19px]";
