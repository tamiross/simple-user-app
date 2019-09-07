const texts = {
    viewOnGithub: 'View on github',
    allUsers: 'All users'
}

export function loc(textKey, ...args) {
    let text = texts[textKey] || textKey;
    if (args) {
      for (let arg of args)
        text = text.replace('%s', arg);
    }
    return text;
  }
