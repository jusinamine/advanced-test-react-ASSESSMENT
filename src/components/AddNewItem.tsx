import React from "react";
import { Modal } from "./modal";
import { Input } from "./input";

interface AddItemModalProps {
  show: boolean;
  onClose: () => void;
  addItemForm: {
    name: string;
    description: string;
    image: string;
  };
  setAddItemForm: React.Dispatch<
    React.SetStateAction<{
      name: string;
      description: string;
      image: string;
    }>
  >;
  onAction: (formValues: {
    name: string;
    description: string;
    image: string;
  }) => void;
}

const AddItemModal: React.FC<AddItemModalProps> = ({
  show,
  onClose,
  addItemForm,
  setAddItemForm,
  onAction,
}) => {
  return (
    <Modal
      onClose={onClose}
      onAction={onAction}
      actionButtonText="Add"
      show={show}
    >
      <div className="add-item-title">Add new item</div>
      <div className="form-add-item">
        <Input
          label={"Name"}
          onChange={(value) => {
            setAddItemForm((oldValue) => ({ ...oldValue, name: value }));
          }}
          value={addItemForm?.name}
          placeholder="Enter name"
        />
        <div className="vertical-space" />
        <Input
          label={"Image url"}
          onChange={(value) => {
            setAddItemForm((oldValue) => ({ ...oldValue, image: value }));
          }}
          value={addItemForm?.image}
          placeholder="Enter image URL"
        />
        <div className="vertical-space" />
        <Input
          label={"Description"}
          onChange={(value) => {
            setAddItemForm((oldValue) => ({ ...oldValue, description: value }));
          }}
          value={addItemForm?.description}
          placeholder="Enter description"
        />
      </div>
    </Modal>
  );
};

export default AddItemModal;
