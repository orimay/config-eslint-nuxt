import type { Linter } from 'eslint';
import type { FlatConfigComposer, ResolvableFlatConfig } from 'eslint-flat-config-utils';
export declare function fromNuxtConfigComposer(withNuxt: (...configs: ResolvableFlatConfig[]) => FlatConfigComposer): FlatConfigComposer<Linter.Config<Linter.RulesRecord>, never>;
