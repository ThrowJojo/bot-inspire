// @flow

import Functions from '../src/Functions';

test('Grab random quote', () => {
    let randomQuote = Functions.getRandomQuote();
    expect(randomQuote.quoteText.length > 0).toBeTruthy();
    expect(randomQuote.quoteAuthor.length > 0).toBeTruthy();
});