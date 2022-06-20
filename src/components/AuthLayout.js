import {
  Box,
  Flex,
  Heading,
  ButtonGroup,
  Button,
  Spacer,
} from "@chakra-ui/react"
import { Outlet } from "react-router-dom"

export default function AuthLayout() {
  return (
    <div className="auth--layout">
      <Flex
        minWidth="max-content"
        alignItems="center"
        gap="2"
        p="4"
        boxShadow="base"
      >
        <Box>
          <Heading size="md">Comepair Signup</Heading>
        </Box>
        <Spacer />
        <ButtonGroup gap="2">
          <Button colorScheme="teal">Sign Up</Button>
          <Button colorScheme="teal">Log in</Button>
        </ButtonGroup>
      </Flex>

      <Outlet />
    </div>
  )
}
