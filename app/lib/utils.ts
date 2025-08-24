import {twMerge} from 'tailwind-merge';
import type {ClassValue} from 'clsx';
import clsx from 'clsx';

export const cn = (...inputs: ClassValue[]) => {
    return twMerge(clsx(inputs))
}

export const formatSize = (bytes: number): string => {
    if (bytes === 0) return "0 Bytes";
  
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
  
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  export const generateUUID = () => crypto.randomUUID();