import { Box, Heading } from "@chakra-ui/react"
import { isRouteErrorResponse, useRouteError } from "react-router-dom"
import Navbar from "../Navbar/Navbar"

const ErrorPage = () => {

    const error = useRouteError()
    return (
        <>  
            <Navbar></Navbar>
            <Box padding={5}>
            <Heading>Oops..</Heading>
            { isRouteErrorResponse(error) ? <p>Page Does Not Exist</p> : <p>Sorry an unexpected error occured !!</p> }
            </Box>
        </>
    )
}

export default ErrorPage