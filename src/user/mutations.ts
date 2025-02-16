import { useMutation } from '@tanstack/react-query'
import { CreateUserInput } from './schema.ts'
import { createUser } from '../http/userService.ts'
import useTelegram from '../shared/hooks/useTelegram.ts'

export function useUserMutation() {
    const { onClose } = useTelegram()

    return useMutation({
        mutationKey: ['createUser'],
        mutationFn: (inputData: CreateUserInput) => createUser(inputData),
        onSuccess: () => onClose(),
    })
}
