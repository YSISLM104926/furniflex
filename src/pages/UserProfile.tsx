import { useState } from 'react'
import {
    Box,
    Flex,
    Avatar,
    Text,
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    Card,
    CardHeader,
    CardBody,
    Heading,
    Stack,
    StackDivider,
    Input,
    Button,
    VStack,
} from '@chakra-ui/react'
import { FaBox, FaUser, FaCreditCard, FaCog } from 'react-icons/fa'
import { Navbar } from '../shared/Navbar'
import { Footer } from '../shared/Footer'

export default function UserProfile() {
    const [user, setUser] = useState({
        name: 'Jane Doe',
        email: 'jane.doe@example.com',
        avatar: '/placeholder.svg'
    })

    const orders = [
        { id: '1234', date: '2023-05-01', total: '€120.00', status: 'Delivered' },
        { id: '5678', date: '2023-06-15', total: '€85.50', status: 'Processing' },
    ]

    return (
        <Box maxWidth="container.lg" margin="auto" padding={6} style={{ fontFamily: 'barlow' }}>
            <Navbar />
            <Flex alignItems="center" marginBottom={6} className='mt-12'>
                <Avatar size="xl" name={user.name} src={user.avatar} marginRight={4} />
                <Box>
                    <Heading as="h1" size="xl">{user.name}</Heading>
                    <Text color="gray.500">{user.email}</Text>
                </Box>
            </Flex>

            <Tabs className='mb-12'>
                <TabList>
                    <Tab><Box as={FaBox} marginRight={2} />Orders</Tab>
                    <Tab><Box as={FaUser} marginRight={2} />Account</Tab>
                    <Tab><Box as={FaCreditCard} marginRight={2} />Payment</Tab>
                    <Tab><Box as={FaCog} marginRight={2} />Settings</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                        <Card>
                            <CardHeader>
                                <Heading size="md">Order History</Heading>
                            </CardHeader>
                            <CardBody>
                                <Stack divider={<StackDivider />} spacing="4">
                                    {orders.map(order => (
                                        <Flex key={order.id} justify="space-between">
                                            <Box>
                                                <Heading size="xs" textTransform="uppercase">
                                                    Order #{order.id}
                                                </Heading>
                                                <Text pt="2" fontSize="sm">
                                                    {order.date}
                                                </Text>
                                            </Box>
                                            <Box textAlign="right">
                                                <Text fontWeight="bold">{order.total}</Text>
                                                <Text fontSize="sm">{order.status}</Text>
                                            </Box>
                                        </Flex>
                                    ))}
                                </Stack>
                            </CardBody>
                        </Card>
                    </TabPanel>

                    <TabPanel>
                        <Card>
                            <CardHeader>
                                <Heading size="md">Account Information</Heading>
                            </CardHeader>
                            <CardBody>
                                <VStack spacing={4} align="stretch">
                                    <Box>
                                        <Text mb={1}>Name</Text>
                                        <Input
                                            value={user.name}
                                            onChange={(e) => setUser({ ...user, name: e.target.value })}
                                        />
                                    </Box>
                                    <Box>
                                        <Text mb={1}>Email</Text>
                                        <Input
                                            type="email"
                                            value={user.email}
                                            onChange={(e) => setUser({ ...user, email: e.target.value })}
                                        />
                                    </Box>
                                    <Button colorScheme="blue">Update Account</Button>
                                </VStack>
                            </CardBody>
                        </Card>
                    </TabPanel>

                    <TabPanel>
                        <Card>
                            <CardHeader>
                                <Heading size="md">Payment Methods</Heading>
                            </CardHeader>
                            <CardBody>
                                <Text>Your payment methods will be displayed here.</Text>
                            </CardBody>
                        </Card>
                    </TabPanel>

                    <TabPanel>
                        <Card>
                            <CardHeader>
                                <Heading size="md">Account Settings</Heading>
                            </CardHeader>
                            <CardBody>
                                <Text>Manage your account settings and preferences here.</Text>
                            </CardBody>
                        </Card>
                    </TabPanel>
                </TabPanels>
            </Tabs>
            <Footer />
        </Box>
    )
}