"use client"

import { Modal } from "antd-mobile";

import { ModalItemProps, ADD_TYPE } from "../types";
import { ModalContent } from "./content";
import { ADD_TYPE_VALUE } from "@/types";
import { useCallback } from "react";

export const ModalItem: React.FC<ModalItemProps> = ({
    showModal,
    setShowModal,
    addType,
}) => {
    const getTitle = useCallback(() => {
        switch (addType) {
            case ADD_TYPE_VALUE.ADD_INCOME: return ADD_TYPE.ADD_INCOME;
            case ADD_TYPE_VALUE.ADD_EXPENSE: return ADD_TYPE.ADD_EXPENSE;
            case ADD_TYPE_VALUE.ADD_INSIGHT: return ADD_TYPE.ADD_INSIGHT;
            default: return "";
        }
    }, [addType])
    return (
        <Modal
            visible={showModal}
            onClose={() => setShowModal(false)}
            closeOnMaskClick
            title={<div className="text-sm font-semibold">{getTitle()}</div>}
            content={<ModalContent setShowModal={setShowModal} addType={addType} />}
        />
    )
}