import { Center, FormControl, FormLabel, Input, Stack } from "@chakra-ui/react"

export default function Login() {
  return (
    <Center h={"100px"}>
      <Stack>
        <FormControl isRequired>
          <FormLabel htmlFor="first-name">Email</FormLabel>
          <Input id="email" placeholder="Email" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor="first-name">Email</FormLabel>
          <Input id="email" placeholder="Email" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor="first-name">Email</FormLabel>
          <Input id="email" placeholder="Email" />
        </FormControl>
      </Stack>
    </Center>
  )
}
