import { useDisclosure } from "@mantine/hooks";
import { Modal, Button, Group, Text } from "@mantine/core";
import Form from "./Form";

export default function MyModal(props) {
  const { setPerson } = props;
  const [opened, { close }] = useDisclosure(true);
  // const [opened, { open, close }] = useDisclosure(true);
  // open();
  return (
    <>
      {/* <Modal opened onClose={close} title="Authentication"> */}
      <Modal opened={opened} onClose={close}>
        {/* <Modal opened={opened} onClose={close} title="Your Info"> */}
        {/* Modal content */}
        <Text style={{ fontFamily: "Arial, sans-serif" }}>
          <Form close={close} setPerson={setPerson}></Form>
        </Text>
      </Modal>

      {/* <Group position="center">
        <Button onClick={open}>Open modal</Button>
      </Group> */}
    </>
  );
}
