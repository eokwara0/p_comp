import React$1, { ReactNode } from 'react';

type PanelProp = {
    data: Array<{
        data: string;
        icon: ReactNode;
    }>;
    className?: string;
};

declare const SidePanel: React.FC<PanelProp>;

/**
 * React Page prop
 */
type SubProps = {
    title: string;
    children: React$1.ReactNode;
};

declare const Sub: React$1.FC<SubProps>;

export { Sub as Comp, SidePanel as Panel };
