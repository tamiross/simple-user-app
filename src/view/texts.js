const texts = {
    viewOnGithub: 'View on github',
    allUsers: 'All users',
    cannotGetInitial: 'Cannot get initial data',
    pleaseCheckYourConnection: 'Please check your connection to the internet.'
}

export function loc(textKey, ...args) {
    let text = texts[textKey] || textKey;
    if (args) {
      for (let arg of args)
        text = text.replace('%s', arg);
    }
    return text;
  }
