import { Box, Button, Text } from '@chakra-ui/react'
import { useState } from 'react'
import { RxCross1 } from 'react-icons/rx'
import Img1 from '../assets/images/chair/c3.png'
const CartItems = () => {
    const [count, setCount] = useState(1)
    const increment = () => {
        setCount(prevCount => prevCount + 1)
    }
    const decrement = () => {
        setCount(prevCount => (prevCount <= 0 ? 0 : prevCount - 1))
    }
    return (
        <div><Box>
            <Box>
                <Box className=" bg-gray-100  rounded-2xl p-2 flex items-center justify-between">
                    <Box className="w-[692px] h-[120px] flex items-center gap-6">
                        <Button variant='outline' className="" style={{ fontFamily: 'barlow' }}>
                            <p className="me-1" onClick={decrement}>-</p>
                            {count}
                            <p className="ms-1" onClick={increment}>+</p>
                        </Button>
                        <img className="w-[88px] h-[88px] bg-gray-200 rounded-xl" src={Img1} alt="" />
                        <h1 className="font-xl font-semibold" style={{ fontFamily: 'barlow' }}>Recliner Chair Steel</h1>
                    </Box>
                    <Box className="flex justify-center items-center flex-col gap-12" style={{ fontFamily: 'barlow' }}>
                        <Button colorScheme='red'><RxCross1 className="" /></Button>
                        <Text fontSize='xl'>€299.00</Text>
                    </Box>
                </Box>
                <hr className='w-[590px] mx-auto' />
            </Box>
        </Box></div>
    )
}

export default CartItems