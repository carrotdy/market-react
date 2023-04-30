import { Layout as AntdLayout } from "antd";
import React, { FunctionComponent, ReactNode } from "react";

interface IProps {
    children: ReactNode;
}

export const Layout: FunctionComponent<IProps> = (props: IProps) => {
    return (
        <AntdLayout.Content>
            {props.children}
        </AntdLayout.Content>
    );
};
