// LICENSE : MIT
"use strict";
import { createTextlintMatcher } from "morpheme-match-textlint"

import path from "path";
import fs from "fs";

import { tokenize } from "kuromojin";
import { TextlintRuleReporter } from "@textlint/types";
import dictionaryList from "./dictionary";
// @ts-ignore
import prh from "textlint-rule-prh";

const reporter: TextlintRuleReporter = (context) => {
    const { Syntax, RuleError, report, fixer, getSource } = context;
    const matcherList = createTextlintMatcher({
        tokenize: tokenize,
        dictionaries: dictionaryList
    });
    const prhLinter = prh.linter;
    const prhStr = prhLinter(context, {
        ruleContents: [
            fs.readFileSync(path.join(__dirname, "..", "dict", "prh.yml"), "utf-8")
        ]
    });
    return {
        [Syntax.Str](node) {
            const text = getSource(node);
            prhStr[Syntax.Str](node);
            return matcherList(text).then(results => {
                results.forEach(result => {
                    if (result.expected) {
                        report(node, new RuleError(result.message, {
                            index: result.index,
                            fix: fixer.replaceTextRange(result.range, result.expected)
                        }));
                    } else {
                        report(node, new RuleError(result.message, {
                            index: result.index
                        }));
                    }

                });
            });
        }
    }
};

export default {
    linter: reporter,
    fixer: reporter
};
