// LICENSE : MIT
"use strict";
const tokenize = require("kuromojin").tokenize;
const fs = require("fs");
const path = require("path");
const prh = require("textlint-rule-prh");
const dictionaryList = require("./dictionary");
const createTokenMatcher = require("morpheme-match");
const reporter = (context) => {
    const {Syntax, RuleError, report, fixer, getSource} = context;
    const matcherList = dictionaryList.map(dict => {
        return {
            matcher: createTokenMatcher(dict["tokens"]),
            message: dict["message"],
            expected: dict["expected"]
        };
    });
    const prhLinter = prh.linter;
    const prhStr = prhLinter(context, {
        ruleContents: [
            fs.readFileSync(path.join(__dirname, "..", "dict", "prh.yml"))
        ]
    });
    return {
        [Syntax.Str](node){
            const text = getSource(node);
            prhStr[Syntax.Str](node);
            return tokenize(text).then(currentTokens => {
                currentTokens.forEach(token => {
                    matcherList.forEach(({matcher, message, expected}) => {
                        const {match, tokens} = matcher(token);
                        if (!match) {
                            return;
                        }
                        const firstToken = tokens[0];
                        const index = Math.max(firstToken.word_position - 1, 0);
                        if (expected) {
                            report(node, new RuleError(message, {
                                index: index,
                                fix: fixer.replaceTextRange([index, index + expected.length], expected)
                            }));
                        } else {
                            report(node, new RuleError(message, {
                                index: index
                            }));
                        }
                    });
                });
            });
        }
    }
};
module.exports = {
    linter: reporter,
    fixer: reporter
};