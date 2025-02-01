import { Modal } from "react-native";
import {
  useModalActions,
  useModalContent,
} from "../hooks/globalSessionStorage/modal";

export default function () {
  const content = useModalContent();
  const { hide } = useModalActions();

  console.log(content);

  return (
    <Modal
      visible={content != null}
      transparent={true}
      animationType="fade"
      onRequestClose={hide}
    >
      {content}
    </Modal>
  );
}
