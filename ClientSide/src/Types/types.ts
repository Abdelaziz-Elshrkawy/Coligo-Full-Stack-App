import { ElementType } from 'react';


export interface unit_props extends toggle_type {
    itemText: string | number;
    Icon: ElementType;
}

export interface toggle_type {
    toggleSidebar?: boolean;
    handleToggleSideBar?: () => void;
    toggleLogin?: boolean;
    handleToggleLogin?: () => void;
}

export interface general_text_prop {
    text: string;
    width?: string;
    fontSize?: number | string;
}

export interface announcement {
    name: string;
    subject: string;
    message: string;
    imageLink: string
}

export interface Lower_part_head_porps {
    text: string;
    subText: string;
}

export interface lower_right_unit_props extends unit_props {
    course: string;
    topic: string;
    due: string;
    btnText: string
}
