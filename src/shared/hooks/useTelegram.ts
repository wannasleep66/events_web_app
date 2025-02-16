import { useEffect } from 'react'

interface ITelegramUser {
    id: string
    is_bot: boolean
    first_name: string
    last_name: string
    username: string
    language_code: string
    is_premium: boolean
}

interface IWebAppInitData {
    query_id: string
    user: ITelegramUser
}

interface IWebApp {
    initDataUnsafe: IWebAppInitData
    close: () => void
    ready: () => void
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
const tg: IWebApp = window.Telegram.WebApp

const useTelegram = () => {
    useEffect(() => {
        tg.ready()
    }, [])

    const onClose = () => {
        tg.close()
    }

    return {
        tg,
        onClose,
        user: tg.initDataUnsafe?.user,
        query_id: tg.initDataUnsafe?.query_id,
    }
}

export default useTelegram
