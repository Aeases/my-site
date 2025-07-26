import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export function isDate(object: unknown): object is Date {
  if (object instanceof Date) {
    return true
  } else {
    return false
  }
}
