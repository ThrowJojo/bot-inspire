// @flow

import FBBotFramework from 'fb-bot-framework';
import Strings from '../language/strings.json';
import Constants from '../Constants';
import Functions from '../Functions';

export default class BotHelper {

    botInstance: FBBotFramework;

    constructor(botInstance: FBBotFramework) {
        this.botInstance = botInstance;
        this.setup();
    }

    setup() {
        this.botInstance.setGreetingText(Strings.greeting);
        this.botInstance.setGetStartedButton(Constants.PAYLOAD_GET_STARTED);
        let menuButtons = [
            {
                type: 'postback',
                title: Strings.inspire,
                payload: Constants.PAYLOAD_INSPIRE
            }
        ];
        this.botInstance.setPersistentMenu(menuButtons);
    }

    // Sends standard quick replies with specified message
    sendQuickReplies(userId: string, message: string) {
        let quickReplies = [
            {
                content_type: 'text',
                title: Strings.inspire,
                payload: Constants.PAYLOAD_INSPIRE
            }
        ];
        this.botInstance.sendQuickReplies(userId, message, quickReplies);
    }

    // Handles the 'Get Started' button interaction
    handleGetStarted(userId: string) {
        this.sendQuickReplies(userId, Strings.explanation);
    }

    // Handles a message from the user
    handleMessage(userId: string) {
        this.sendQuickReplies(userId, Strings.help);
    }

    // Sends an inspirational message to the specified user
    sendInspirationalMessage(userId: string) {
        let randomQuote = Functions.getRandomQuote();
        this.sendQuickReplies(userId, `${randomQuote.quoteText} - ${randomQuote.quoteAuthor}`);
    }

}