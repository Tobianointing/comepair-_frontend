import { Outlet } from "react-router-dom"
import { Box, HStack, VStack } from "@chakra-ui/react"
import Navbar from "./Navbar"

export default function Layout() {
  return (
    <>
      <HStack spacing="24px">
        <Box w="40px" h="40px" bg="yellow.200">
          <Navbar />
        </Box>
        <Box w="40px" h="40px" bg="tomato">
          2
        </Box>
        <Box w="40px" h="40px" bg="pink.100">
          3
        </Box>
      </HStack>
      <Outlet />
    </>
  )
}
