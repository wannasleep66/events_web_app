import { useQuery } from '@tanstack/react-query'
import { getUserById } from '../http/userService.ts'

export function useUserQuery(userId: string) {
    return useQuery({
        queryKey: ['user', userId],
        queryFn: () => getUserById(userId),
    })
}
