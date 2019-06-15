// LICENSE : MIT
"use strict";
import {createTextlintMatcher} from "morpheme-match-textlint"

const tokenize = require("kuromojin").tokenize;
const fs = require("fs");
const path = require("path");
const prh = require("textlint-rule-prh");
const dictionaryList = require("./dictionary");

const reporter = (context) => {
    const {Syntax, RuleError, report, fixer, getSource} = context;
    const matcherList = createTextlintMatcher({
        tokenize: tokenize,
        dictionaries: dictionaryList
    });
    const prhLinter = prh.linter;
    const prhStr = prhLinter(context, {
        ruleContents: [
            fs.readFileSync(path.join(__dirname, "..", "dict", "prh.yml"))
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
module.exports = {
    linter: reporter,
    fixer: reporter
};
