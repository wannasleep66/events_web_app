import { http } from './http.ts'
import { CreateUserInput, UserResponse } from '../user/schema.ts'

export async function createUser(
    inputData: CreateUserInput
): Promise<UserResponse> {
    const response = await http.post<UserResponse>('/user/', {
        user: inputData.user,
        queryId: inputData.queryId,
    })
    return response.data
}

export async function getUserById(userId: string) {
    const response = await http.get<UserResponse>(`/users/${userId}`)
    return response.data
}
