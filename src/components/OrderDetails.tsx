import { Box, Button, Card, CardFooter } from '@chakra-ui/react'

const OrderDetails = () => {
    return (
        <div>
            <Card className="w-full max-w-sm mt-6">
                <Box className="p-6">
                    <div className="space-y-2">
                        <div className="flex justify-between" style={{ fontFamily: 'barlow' }}>
                            <span className="text-sm text-muted-foreground">Subtotal</span>
                            <span className="text-sm font-medium">€ 1071.00</span>
                        </div>
                        <div className="flex justify-between" style={{ fontFamily: 'barlow' }}>
                            <span className="text-sm text-muted-foreground">Shipping</span>
                            <span className="text-sm font-medium">Free</span>
                        </div>
                        <div className="flex justify-between" style={{ fontFamily: 'barlow' }}>
                            <span className="text-sm text-muted-foreground">Estimated Tax</span>
                            <span className="text-sm font-medium">€ -</span>
                        </div>
                        <div className="flex justify-between pt-4" style={{ fontFamily: 'barlow' }}>
                            <span className="text-base font-semibold">Total</span>
                            <span className="text-base font-semibold">€ 1071.00</span>
                        </div>
                    </div>
                </Box>
                <CardFooter className="px-6 pb-6 pt-0">
                    <Button style={{ backgroundColor: 'black', color: 'white', fontFamily: 'barlow', fontWeight: '300' }} className="w-full font-thin bg-black">
                        GO TO CHECKOUT
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )
}

export default OrderDetails