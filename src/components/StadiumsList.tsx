import {
  Button,
  Image,
  SimpleGrid,
  Box,
  Editable,
  EditablePreview,
  Input,
  useEditableControls,
  EditableInput,
  ButtonGroup,
  Flex,
  useToast,
} from "@chakra-ui/react";

const StadiumsList = (props: any) => {
  const { stadiums = [] } = props;
  const toast = useToast();
  function EditableControls() {
    const {
      isEditing,
      getSubmitButtonProps,
      getCancelButtonProps,
      getEditButtonProps,
    } = useEditableControls();

    return isEditing ? (
      <ButtonGroup justifyContent="center" size="sm">
        <Button {...getSubmitButtonProps()}>Ok</Button>
        <Button {...getCancelButtonProps()}>Cancel</Button>
      </ButtonGroup>
    ) : (
      <Flex justifyContent="center">
        <Button variant="outline" size="sm" {...getEditButtonProps()}>
          Edit
        </Button>
      </Flex>
    );
  }
  return (
    <SimpleGrid columns={[1, 1, 1, 2, 3]} spacing={[4, 6]}>
      {stadiums.map((stadium: any) => (
        <Box key={stadium.id} p={2}>
          <Image
            h="300px"
            src={stadium.image}
            alt={stadium.name}
            onClick={() =>
              toast({
                title: `${stadium.name}`,
                description: `${stadium.city}`,
                status: "success",
                duration: 5000,
                isClosable: true,
              })
            }
          />

          <Editable
            textAlign="center"
            fontSize="2xl"
            isPreviewFocusable={false}
          >
            <EditablePreview />
            <Input as={EditableInput} />
            <EditableControls />
          </Editable>
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default StadiumsList;
