const whitelabelConfig = {
  light: {
    brand: 'Light Theme',
    scssVariables: './src/styles/whitelabel-variables/light',
    homeURL: 'https://www.example.com/light',
    logoURL: 'https://www.example.com/imgs/light.jpg',
    contactEmail: 'light@example.co.uk'
  },
  dark: {
    brand: 'Dark Theme',
    scssVariables: './src/styles/whitelabel-variables/dark',
    homeURL: 'https://www.example.com/dark',
    logoURL: 'https://www.example.com/imgs/dark.jpg',
    contactEmail: 'dark@example.co.uk',
    color: '#fff',
    background: '#444'
  }
}

module.exports = whitelabelConfig
