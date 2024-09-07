import { Box } from "@chakra-ui/react"
import { Footer } from "../shared/Footer"
import { Navbar } from "../shared/Navbar"
import CartItems from "../components/CartItems"
import OrderDetails from "../components/OrderDetails"
const Cart = () => {

    return (
        <div>
            <Navbar />
            <Box className="mt-8 mb-8">
                <h1 className="text-2xl font-medium text-start">An overview of your order</h1>
                <Box className="grid grid-cols-2">
                    <Box>
                        <CartItems />
                        <CartItems />
                        <CartItems />
                        <CartItems />
                    </Box>
                    <Box className="w-1/2 mx-auto">
                        <h1 className="text-2xl font-medium text-start" style={{ fontFamily: 'barlow' }}>Order details</h1>
                        <Box>
                            <OrderDetails />
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Footer />
        </div>
    )
}

export default Cart