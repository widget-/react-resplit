import { HTMLAttributes, ReactNode } from 'react';
import type { FrValue, Order, PxValue, Direction } from './types';
import type { ResplitPaneOptions } from './Pane';
import type { ResplitSplitterOptions } from './Splitter';
/**
 * The state of an individual pane.
 *
 * @internal For internal use only.
 *
 * @see {@link PaneOptions} for the public API.
 */
export interface PaneChild extends ResplitPaneOptions {
    type: 'pane';
    minSize: PxValue | FrValue;
    collapsedSize: PxValue | FrValue;
}
/**
 * The state of an individual splitter.
 *
 * @internal For internal use only.
 *
 * @see {@link SplitterOptions} for the public API.
 */
export interface SplitterChild extends ResplitSplitterOptions {
    type: 'splitter';
    size: PxValue;
}
/**
 * An object containing panes and splitters. Indexed by order.
 *
 * @internal For internal use only.
 */
export interface ChildrenState {
    [order: Order]: PaneChild | SplitterChild;
}
export interface ResplitOptions {
    /**
     * Direction of the panes.
     *
     * @defaultValue 'horizontal'
     *
     */
    direction?: Direction;
}
export declare type ResplitRootProps = ResplitOptions & HTMLAttributes<HTMLDivElement> & {
    /**
     * The children of the ResplitRoot component.
     */
    children: ReactNode;
    /**
     * Merges props onto the immediate child.
     *
     * @defaultValue false
     *
     * @example
     *
     * ```tsx
     * <ResplitRoot asChild>
     *   <main style={{ backgroundColor: 'red' }}>
     *     ...
     *   </main>
     * </ResplitRoot>
     * ```
     */
    asChild?: boolean;
};
/**
 * The root component of a resplit layout. Provides context to all child components.
 *
 * @example
 * ```tsx
 * <ResplitRoot direction="horizontal">
 *   <ResplitPane order={0} />
 *   <ResplitSplitter order={1} />
 *   <ResplitPane order={2} />
 * </ResplitRoot>
 * ```
 */
export declare const ResplitRoot: import("react").ForwardRefExoticComponent<ResplitOptions & HTMLAttributes<HTMLDivElement> & {
    /**
     * The children of the ResplitRoot component.
     */
    children: ReactNode;
    /**
     * Merges props onto the immediate child.
     *
     * @defaultValue false
     *
     * @example
     *
     * ```tsx
     * <ResplitRoot asChild>
     *   <main style={{ backgroundColor: 'red' }}>
     *     ...
     *   </main>
     * </ResplitRoot>
     * ```
     */
    asChild?: boolean | undefined;
} & import("react").RefAttributes<HTMLDivElement>>;
