import {
    Container,
    Typography,
    Box,
    TextField,
    Button,
    FormControl,
    FormLabel, Stack,
} from "@mui/material";
import * as React from "react";
import {AutoAwesome} from "@mui/icons-material";

const Registration: React.FC = () => {
    return (
        <Container maxWidth="sm">
            <Box sx={{padding: 4, borderRadius: 3, maxWidth: 600}}>
                <Box sx={{display: "flex", gap: 2, mb: 2}}>
                    <Typography variant={"h5"} gutterBottom>
                        Привет, Wannasleep
                    </Typography>
                    <AutoAwesome color={"secondary"} fontSize={"large"}/>
                </Box>
                <Stack
                    component="form"
                    spacing={4}
                >
                    <FormControl>
                        <FormLabel>Имя</FormLabel>
                        <TextField
                            name={"name"}
                            placeholder={"Введите ваше имя"}
                            color={"primary"}
                            variant="outlined"
                            fullWidth
                            required
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Фамилия</FormLabel>
                        <TextField
                            name={"surname"}
                            placeholder="Введите вашу фамилию"
                            variant="outlined"
                            fullWidth
                            required
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Группа</FormLabel>
                        <TextField
                            name={"group"}
                            placeholder="Введите группу"
                            variant="outlined"
                            fullWidth
                            required
                        />
                    </FormControl>
                    <Button
                        sx={{mt: 2, paddingY: '12px'}}
                        variant={"contained"}
                        color={"secondary"}
                        type="submit"
                        size={"large"}
                    >
                        <Typography variant={'body1'} sx={{color: 'white'}}>
                            Зарегистрироваться
                        </Typography>
                    </Button>
                </Stack>
            </Box>
        </Container>
    );
};

export default Registration;
