// @flow

import express from 'express';
import BotHelper from './bot/BotHelper';
import FBBotFramework from 'fb-bot-framework';
import Config from './config.json';
import Constants from './Constants';

let botInstance: FBBotFramework = new FBBotFramework({
    page_token: Config.page_token,
    // TODO: Change verify token
    verify_token: Config.verify_token
});

let botHelper: BotHelper = new BotHelper(botInstance);
let app = express();

botInstance.on('postback', (userId: string, payload: string) => {
    if (payload == Constants.PAYLOAD_GET_STARTED) {
        botHelper.handleGetStarted(userId);
    }
});

botInstance.on('message', (userId: string, message: string) => {
    botHelper.handleMessage(userId);
});

botInstance.on('quickreply', (userId: string, payload: string) => {
    if (payload == Constants.PAYLOAD_INSPIRE) {
        botHelper.sendInspirationalMessage(userId);
    }
});

app.use('/webhook', botInstance.middleware());
app.get('/', (request: any, response: any) => {
   response.send("A bot lives here...");
});
app.listen(3000);



