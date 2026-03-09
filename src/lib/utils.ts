// Converts USD to INR using a fixed rate
export function convertUsdToInr(usd: number): number {
  return usd * 83;
}
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
