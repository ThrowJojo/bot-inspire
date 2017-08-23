// @flow

import Quotes from './quotes.json';

export default class Functions {

    // Pulls a random quote
    static getRandomQuote(): { quoteText: string, quoteAuthor: string} {
        return Quotes.quotes[Math.floor(Math.random() * Quotes.quotes.length)];
    }

}