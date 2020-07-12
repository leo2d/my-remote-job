import { SERVER_PORT } from './config/config';

import createApp from './app';

const startServer = async () => {
    const app = await createApp();

    app.listen(SERVER_PORT, () =>
        console.log(`Server listening on port ${SERVER_PORT}!`)
    );
};

startServer();
