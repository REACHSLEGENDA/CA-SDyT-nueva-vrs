const EVENT_START = 'ca:heroVideoStart';
const EVENT_END   = 'ca:heroVideoEnd';

export function heroVideoStart() {
    if (typeof window !== 'undefined')
        window.dispatchEvent(new CustomEvent(EVENT_START));
}

export function heroVideoEnd() {
    if (typeof window !== 'undefined')
        window.dispatchEvent(new CustomEvent(EVENT_END));
}

export function useHeroHiding() {
    if (typeof window === 'undefined') return false;
    return window.location.pathname === '/';
}
