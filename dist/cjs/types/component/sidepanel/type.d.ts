import { ReactNode } from "react";
export type PanelProp = {
    data: Array<{
        data: string;
        icon: ReactNode;
    }>;
    className?: string;
};
