import React from "react";

type Props = { who: string };

export default function LocalreactdemoTest({ who }: Props) {
    return (
        <div>
            <strong>Hello from local_reactdemo 👋</strong>
            <div>User: {who}</div>
        </div>
    );
}
