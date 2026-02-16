import React from "react";
import requireAmd from './helper';

type Props = {
    label: string;
    message?: string;
};

async function showMoodlePopup(message: string) {
    const Notification = await requireAmd("core/notification");
    // Moodle notification popup.
    Notification.alert(message);
}

export default function Button({
    label,
    message = "Hello from local_reactdemo!",
}: Props) {
    const handleClick = () => {
        showMoodlePopup(message).catch((e) => {
            window.console.error("Failed to show Moodle popup", e);
            window.alert(message); // Fallback
        });
    };

    return (
        <button type="button" onClick={handleClick}>
            {label}
        </button>
    );
}
