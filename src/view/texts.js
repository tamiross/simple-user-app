const links = {
  linkToGithub: 'https://github.com/tamiross/simple-user-app'
}

const texts = {
  ...links,
  viewOnGithub: 'View on github',
  allUsers: 'All users',
  cannotGetInitial: 'Cannot get initial data',
  pleaseCheckYourConnection: 'Please check your connection to the internet.',
  somethingWentWrong: 'Something went wrong',
  weAreCurrentlyWorking: 'We are currently working on fixing the problem',
  blogPage: 'Blog Page',
  share: 'Share',
  learnMore: 'Learn more',
  contact: 'Contact',
  readMore: 'Read more >',
  demoText: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'
}


export function loc(textKey, ...args) {
  let text = texts[textKey] || textKey;
  if (args) {
    for (let arg of args)
      text = text.replace('%s', arg);
  }
  return text;
}
