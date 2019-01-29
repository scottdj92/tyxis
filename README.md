# tyxis

**pyxis**: _noun_, box for storage

tyxis is an ever-growing collection of common types that can be useful in TypeScript projects

## Installation
`npm install tyxis` or `yarn add tyxis`

## Usage
Using tyxis is as simple as importing the type you'd like to use:

```typescript
import { IsNullable } from "tyxis";

type YourType = {
    yourValue: IsNullable<{ someValue: string; }>;
};
```

## Caveats
Due to the nature of this library, there will be no built types. These types will be imported into a project. It will make no assumptions as to how a project's build chain may work.

## Contributing
This project accepts all issues and pull requests after review. Feel free to submit them!

### Running tests
WIP
