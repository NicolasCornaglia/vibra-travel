/**
 * Smoothly scrolls the viewport to the element with id="contact".
 */
export function scrollToContact(): void {
  const target = document.getElementById('contact');
  if (!target) return;

  const start: number = window.pageYOffset;
  const end: number = target.getBoundingClientRect().top + start;
  const change: number = end - start;
  const duration: number = 600; // ms

  let startTime: number | null = null;

  function animateScroll(timestamp: number): void {
    if (startTime === null) {
      startTime = timestamp;
    }
    const elapsed: number = timestamp - startTime;
    const next: number = easeInOutQuad(elapsed, start, change, duration);

    window.scrollTo(0, next);

    if (elapsed < duration) {
      requestAnimationFrame(animateScroll);
    }
  }

  requestAnimationFrame(animateScroll);
}

/**
 * Easing function: easeInOutQuad
 * @param t current time (ms)
 * @param b start value
 * @param c change in value
 * @param d duration (ms)
 * @returns the current eased value
 */
function easeInOutQuad(t: number, b: number, c: number, d: number): number {
  t /= d / 2;
  if (t < 1) {
    return (c / 2) * t * t + b;
  }
  t--;
  return (-c / 2) * (t * (t - 2) - 1) + b;
}

export default scrollToContact;