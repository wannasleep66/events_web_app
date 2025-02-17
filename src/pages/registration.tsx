import {
    Container,
    Typography,
    Box,
    TextField,
    Button,
    FormControl,
    FormLabel,
    Stack,
} from '@mui/material'
import * as React from 'react'
import { AutoAwesome } from '@mui/icons-material'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import useTelegram from '../shared/hooks/useTelegram.ts'
import { UserInput, userInputSchema } from '../user/schema.ts'
import { useUserMutation } from '../user/mutations.ts'

const Registration: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<UserInput>({
        reValidateMode: 'onChange',
        resolver: zodResolver(userInputSchema),
    })
    const { user, query_id } = useTelegram()
    const userMutation = useUserMutation()

    const onSubmit: SubmitHandler<UserInput> = (data: UserInput): void => {
        userMutation.mutate({
            user: { ...data, id: user.id, telegram: user.username },
            queryId: query_id,
        })
    }

    return (
        <Container
            maxWidth="sm"
            sx={{
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Box sx={{ padding: 4, borderRadius: 3, width: '100%' }}>
                <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                    <Typography variant={'h5'} gutterBottom>
                        Привет, {user?.username}
                    </Typography>
                    <AutoAwesome color={'secondary'} fontSize={'large'} />
                </Box>
                <Stack
                    onSubmit={handleSubmit(onSubmit)}
                    component="form"
                    spacing={4}
                    py={2}
                >
                    <FormControl>
                        <FormLabel>Имя</FormLabel>
                        <TextField
                            placeholder={'Введите ваше имя'}
                            color={'primary'}
                            variant="outlined"
                            fullWidth
                            {...register('username')}
                            error={!!errors.username}
                            helperText={errors.username?.message}
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Фамилия</FormLabel>
                        <TextField
                            placeholder="Введите вашу фамилию"
                            variant="outlined"
                            fullWidth
                            {...register('surname')}
                            error={!!errors.surname}
                            helperText={errors.surname?.message}
                        />
                    </FormControl>
                    <FormControl fullWidth={true}>
                        <FormLabel>Группа</FormLabel>
                        <TextField
                            placeholder="Введите группу"
                            variant="outlined"
                            fullWidth
                            {...register('group')}
                            error={!!errors.group}
                            helperText={errors.group?.message}
                        />
                    </FormControl>
                    <Button
                        sx={{ mt: 2, paddingY: '12px', justifySelf: 'end' }}
                        variant={'contained'}
                        color={'secondary'}
                        type="submit"
                        size={'large'}
                        loading={userMutation.isPending}
                    >
                        <Typography variant={'body1'} sx={{ color: 'white' }}>
                            Зарегистрироваться
                        </Typography>
                    </Button>
                    {userMutation.isError && (
                        <Typography color={'error'}>
                            Произошла ошибка
                        </Typography>
                    )}
                </Stack>
            </Box>
        </Container>
    )
}

export default Registration
