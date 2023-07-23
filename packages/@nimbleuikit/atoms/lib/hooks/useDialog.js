import { useState, useCallback } from "react";
export const useDialog = (initialState = false) => {
    const [isOpen, setIsOpen] = useState(initialState);
    const openDialog = useCallback(() => {
        setIsOpen(true);
    }, []);
    const closeDialog = useCallback(() => {
        setIsOpen(false);
    }, []);
    return {
        isOpen,
        openDialog,
        closeDialog,
    };
};
