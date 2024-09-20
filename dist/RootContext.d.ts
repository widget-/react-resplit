import type { Direction } from './types';
import type { ResplitPaneOptions } from './Pane';
import type { ResplitSplitterOptions } from './Splitter';
export declare const RootContext: import("react").Context<{
    id: string;
    direction: Direction;
    registerPane: (order: string, options: ResplitPaneOptions) => void;
    registerSplitter: (order: string, options: ResplitSplitterOptions) => void;
    handleSplitterMouseDown: (order: number) => () => void;
    handleSplitterKeyDown: (splitterOrder: number) => (e: React.KeyboardEvent<HTMLDivElement>) => void;
} | undefined>;
export declare const useRootContext: () => {
    id: string;
    direction: Direction;
    registerPane: (order: string, options: ResplitPaneOptions) => void;
    registerSplitter: (order: string, options: ResplitSplitterOptions) => void;
    handleSplitterMouseDown: (order: number) => () => void;
    handleSplitterKeyDown: (splitterOrder: number) => (e: React.KeyboardEvent<HTMLDivElement>) => void;
};
