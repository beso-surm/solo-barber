"use client";

import { useSyncExternalStore } from "react";

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";
const FINE_POINTER_QUERY = "(pointer: fine)";

function subscribe(query: string) {
  return (onChange: () => void) => {
    const mq = window.matchMedia(query);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  };
}

const subscribeReducedMotion = subscribe(REDUCED_MOTION_QUERY);
const subscribeFinePointer = subscribe(FINE_POINTER_QUERY);

const getReducedMotionSnapshot = () => window.matchMedia(REDUCED_MOTION_QUERY).matches;
const getFinePointerSnapshot = () => window.matchMedia(FINE_POINTER_QUERY).matches;
const getServerSnapshot = () => false;

export function useReducedMotion(): boolean {
  return useSyncExternalStore(subscribeReducedMotion, getReducedMotionSnapshot, getServerSnapshot);
}

export function useFinePointer(): boolean {
  return useSyncExternalStore(subscribeFinePointer, getFinePointerSnapshot, getServerSnapshot);
}
