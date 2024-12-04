import { Button, Flex, Heading, useDisclosure } from "@chakra-ui/react"
import { useContext, useEffect } from "react"
import { GlobalContext } from "../context/context"
import ExpenseView from "../expense-view/expenseview"
import Summary from "../summary/summary"



function Main() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { totalExpense, setTotalExpense, totalIncome, setTotalIncome, allTransactions, } = useContext(GlobalContext)

    useEffect(() => {
        let income = 0
        let expense = 0

        allTransactions.forEach(a => {
            a.type === 'income' ?
                income = income + parseFloat(a.amount) :
                expense = expense + parseFloat(a.amount)

        }, [allTransactions])

        setTotalExpense(expense)
        setTotalIncome(income)
    }, [allTransactions, setTotalExpense, setTotalIncome])


    return (



        <Flex textAlign="center" flexDirection={'column'} pr={'5'} pl={'5'}>
            <Flex alignItems={'center'} justifyContent={'space-between'} mt={'12'}>
                <Heading
                    color={'blue.400'}
                    display={['none', 'block', 'block', 'block', 'block']}>
                    Main

                </Heading>
                <Flex alignItems={'center'}>
                    <Button
                        onClick={onOpen}
                        bg={'blue.300'}
                        color={'black'}
                        ml={'4'}
                    >Add new Transaction
                    </Button>
                </Flex>
            </Flex>

            <Summary totalExpense={totalExpense} totalIncome={totalIncome} isOpen={isOpen} onClose={onClose} />

            <Flex w="full" alignItems={"flex-start"} justifyContent={'space-evenly'} flexDirection={['column', 'column', 'column', 'row', 'row']}>
                <ExpenseView
                    data={allTransactions.filter(item => item.type === 'expense')}
                    type={'expense'}
                />
                <ExpenseView
                    data={allTransactions.filter(item => item.type === 'income')}
                    type={'income'}
                />
            </Flex>

        </Flex>
    )
}

export default Main
