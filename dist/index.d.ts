export declare const Resplit: {
    Root: import("react").ForwardRefExoticComponent<import("./Root").ResplitOptions & import("react").HTMLAttributes<HTMLDivElement> & {
        children: import("react").ReactNode;
        asChild?: boolean | undefined;
    } & import("react").RefAttributes<HTMLDivElement>>;
    Pane: import("react").ForwardRefExoticComponent<Omit<import("react").HTMLAttributes<HTMLDivElement>, "onResize" | "onResizeEnd" | "onResizeStart" | "onExpand" | "onCollapse"> & import("./Pane").ResplitPaneOptions & {
        order: number;
        children?: import("react").ReactNode;
        asChild?: boolean | undefined;
    } & import("react").RefAttributes<HTMLDivElement>>;
    Splitter: import("react").ForwardRefExoticComponent<import("react").HTMLAttributes<HTMLDivElement> & import("./Splitter").ResplitSplitterOptions & {
        order: number;
        children?: import("react").ReactNode;
        asChild?: boolean | undefined;
    } & import("react").RefAttributes<HTMLDivElement>>;
};
export { ResplitRoot } from './Root';
export { ResplitPane } from './Pane';
export { ResplitSplitter } from './Splitter';
export { useResplitContext } from './ResplitContext';
export * from './types';
export type { ResplitRootProps } from './Root';
export type { ResplitPaneProps } from './Pane';
export type { ResplitSplitterProps } from './Splitter';
