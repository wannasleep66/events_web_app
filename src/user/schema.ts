import { z } from 'zod'

export const userInputSchema = z.object({
    username: z.string().max(20, 'Максимальная длина имени 20 символов'),
    surname: z.string().max(20, 'Максимальная длина имени 20 символов'),
    group: z
        .string()
        .min(5, 'Минимальная длина группы 5 символов')
        .max(12, 'Максимальная длина для группы 12 символов'),
})

export type UserInput = z.infer<typeof userInputSchema>
export type UserResponse = UserInput

export type CreateUserInput = {
    user: UserInput & { id: string; telegram: string }
    queryId: string
}
