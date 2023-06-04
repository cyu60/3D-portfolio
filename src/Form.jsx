import { TextInput, Button, Group, Box } from "@mantine/core";
import { useForm } from "@mantine/form";

export default function Form(props) {
  const { close, setPerson } = props;
  const form = useForm({
    initialValues: {
      name: "",
      portfolioURL: "",
    },
    validate: {
      portfolioURL: (value) => {
        if (!/^https?:\/\/.*/i.test(value)) {
          return "Invalid URL format";
        }
        return null;
      },
    },
  });

  const handleSubmit = (values) => {
    console.log("Form values:", values, values.name, values.portfolioURL);
    // values.name
    setPerson(values);
    close();
  };

  return (
    <Box maxWidth={300} mx="auto">
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <TextInput
          required
          label="Name"
          placeholder="Enter your name"
          {...form.getInputProps("name")}
        />

        <TextInput
          required
          label="URL to Portfolio Website"
          placeholder="Enter the URL"
          {...form.getInputProps("portfolioURL")}
        />

        {form.errors.portfolioURL && (
          <div style={{ color: "red", marginTop: "0.5rem" }}>
            {form.errors.portfolioURL}
          </div>
        )}

        <Group position="right" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Box>
  );
}
