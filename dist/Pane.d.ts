import { ReactNode, HTMLAttributes } from 'react';
import type { FrValue, Order, PxValue } from './types';
export declare type ResplitPaneOptions = {
    /**
     * Set the initial size of the pane as a fractional unit (fr).
     *
     * @example '0.5fr'
     *
     * @defaultValue By default, the initial size is calculated as the available space divided by the number of panes.
     */
    initialSize?: FrValue;
    /**
     * Set the minimum size of the pane as a pixel unit (px) or fractional unit (fr).
     *
     * @example '0.1fr'
     *
     * @defaultValue '0fr'
     */
    minSize?: PxValue | FrValue;
    /**
     * Whether the pane can be collapsed below its minimum size.
     *
     * The pane will be collapsed if the user drags the splitter past 50% of the minimum size.
     *
     * @defaultValue false
     */
    collapsible?: boolean;
    /**
     * Whether the pane collapsed by default.
     *
     * The pane will be collapsed on the first render despite of the initialSize Provided.
     *
     * @defaultValue false
     */
    defaultCollapsed?: boolean;
    /**
     * Set the collapsed size of the pane as a pixel unit (px) or fractional unit (fr).
     *
     * @example '50px'
     *
     * @defaultValue '0fr'
     */
    collapsedSize?: PxValue | FrValue;
    /**
     * Callback function that is called when the pane starts being resized.
     */
    onResizeStart?: () => void;
    /**
     * Callback function that is called when the pane is finished being resized.
     *
     * @param size - The new size of the pane. {@link FrValue}
     */
    onResizeEnd?: (size: FrValue) => void;
    /**
     * Callback function that is called when the pane is actively being resized.
     *
     * @param size - The new size of the pane. {@link FrValue}
     */
    onResize?: (size: FrValue) => void;
    /**
     * Callback function that is called when the pane is collapsed.
     *
     * @param size - The new size of the pane. {@link FrValue}
     */
    onCollapse?: (size: FrValue) => void;
    /**
     * Callback function that is called when the pane is expanded.
     *
     * @param size - The new size of the pane. {@link FrValue}
     */
    onExpand?: (size: FrValue) => void;
};
export declare type ResplitPaneProps = Omit<HTMLAttributes<HTMLDivElement>, 'onResize' | 'onResizeEnd' | 'onResizeStart' | 'onExpand' | 'onCollapse'> & ResplitPaneOptions & {
    /**
     * The order of the pane in the layout. {@link Order}
     */
    order: Order;
    /**
     * The content of the pane.
     */
    children?: ReactNode;
    /**
     * Merges props onto the immediate child.
     *
     * @defaultValue false
     *
     * @example
     *
     * ```tsx
     * <ResplitPane order={0} asChild>
     *   <aside style={{ backgroundColor: 'red' }}>
     *     ...
     *   </aside>
     * </ResplitPane>
     * ```
     */
    asChild?: boolean;
};
/**
 * A pane is a container that can be resized.
 *
 * It must be a direct child of a {@link ResplitRoot} component.
 *
 * @example
 * ```tsx
 * <ResplitPane order={0} minSize="0.1fr" initialSize="0.5fr">
 *   <div>Pane 1</div>
 * </ResplitPane>
 * ```
 */
export declare const ResplitPane: import("react").ForwardRefExoticComponent<Omit<HTMLAttributes<HTMLDivElement>, "onResize" | "onResizeEnd" | "onResizeStart" | "onExpand" | "onCollapse"> & ResplitPaneOptions & {
    /**
     * The order of the pane in the layout. {@link Order}
     */
    order: Order;
    /**
     * The content of the pane.
     */
    children?: ReactNode;
    /**
     * Merges props onto the immediate child.
     *
     * @defaultValue false
     *
     * @example
     *
     * ```tsx
     * <ResplitPane order={0} asChild>
     *   <aside style={{ backgroundColor: 'red' }}>
     *     ...
     *   </aside>
     * </ResplitPane>
     * ```
     */
    asChild?: boolean | undefined;
} & import("react").RefAttributes<HTMLDivElement>>;
