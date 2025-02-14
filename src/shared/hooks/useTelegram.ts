// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
const tg = window.Telegram.WebApp;

const useTelegram = () => {
    const onClose = () => {
        tg.close();
    };

    return {
        tg,
        onClose,
        user: tg.initDataUnsafe?.user,
        query_id: tg.initDataUnsafe?.query_id,
    };
};

export default useTelegram;
