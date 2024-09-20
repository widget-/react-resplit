import { useEffect } from 'react';
import { FrValue, PxValue } from './types';
export declare const convertFrToNumber: (val: FrValue) => number;
export declare const convertPxToNumber: (val: PxValue) => number;
export declare const convertPxToFr: (px: number, containerSize: number) => FrValue;
export declare const isPx: (val: FrValue | PxValue) => val is `${number}px`;
export declare const convertSizeToFr: (size: FrValue | PxValue, rootSize: number) => `${number}fr`;
export declare const useIsomorphicLayoutEffect: typeof useEffect;
export declare function mergeRefs<T>(refs: Array<React.MutableRefObject<T> | React.LegacyRef<T> | undefined | null>): React.RefCallback<T>;
export declare function isFractionvalue(val: string): boolean;
export declare function isPixelvalue(val: string): boolean;
export declare function extractValueAndUnit(input: string): {
    value: number;
    unit: string;
} | null;
