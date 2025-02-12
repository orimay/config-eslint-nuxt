# orimay-config-eslint-nuxt

A complete ESLint configuration for Vue projects with seamless Nuxt integration.
This package builds on the robust
[orimay-config-eslint](https://www.npmjs.com/package/orimay-config-eslint) setup
by extending it with Vue-specific rules and providing a helper to integrate with
Nuxt's ESLint config composer.

## Features

- **Vue-Specific Rules:**  
  Configures Vue rules like block order, HTML self-closing, operator linebreaks,
  and more to enforce best practices in Vue components.

- **Nuxt Integration:**  
  Provides the `fromNuxtConfigComposer` function to easily merge your Nuxt
  ESLint configuration with our extended rules.

- **Base Config Merge:**  
  Leverages the solid foundation from
  [orimay-config-eslint](https://www.npmjs.com/package/orimay-config-eslint) and
  enhances it with additional rules for Vue, Typescript, and more.

- **Readonly Rule Cleanup:**  
  Automatically removes a list of ESLint rules deemed read-only to prevent
  accidental overrides.

## Installation

Install the package and its required peer dependencies:

```bash
npm install --save-dev eslint orimay-config-eslint-nuxt
```

Or with pnpm:

```bash
pnpm add -D eslint orimay-config-eslint-nuxt
```

**Note**: Ensure you have ESLint version `^9.15.0` installed as it is required
by this configuration.

## Usage

### Standard ESLint Setup

If you're using ESLint's flat config system, create or update your configuration
file (for example, `eslint.config.mts`) as follows:

```typescript
import { fromNuxtConfigComposer } from 'orimay-config-eslint-nuxt';
import nuxtConfigComposer from './.nuxt/eslint.config.mjs';

export default fromNuxtConfigComposer(nuxtConfigComposer);
```

## How It Works

- **Base Configuration:**: It starts by importing the base ESLint configuration
  from
  [orimay-config-eslint](https://www.npmjs.com/package/orimay-config-eslint)
  along with the TypeScript ESLint setup.
- **Vue Rules Extension**: Vue-specific rules are merged in to handle aspects
  like component order, HTML indentation, self-closing tags, and more.
- **Nuxt Integration**: The helper function `fromNuxtConfigComposer` loops
  through the merged configuration, combining files, ignores, plugins, and
  rules. It then cleans up any read-only fields before integrating with your
  Nuxt ESLint composer.
- **Final Composition**: The final configuration is appended and rules are
  overridden using your Nuxt config composer, ensuring a smooth setup for Vue
  projects using Nuxt.

## Contributing

Contributions, bug reports, and feature requests are welcome. If you have
suggestions or improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use and
contribute!

For issues or suggestions, please
[open an issue](https://github.com/orimay/config-eslint-nuxt/issues).

## Authors

- Dmitrii Baranov dmitrii.a.baranov@gmail.com
