// LICENSE : MIT
"use strict";
const TextLintTester = require("textlint-tester");
const tester = new TextLintTester();
// rule
import rule from "../src/textlint-rule-ja-no-abusage";
// ruleName, rule, { valid, invalid }
tester.run("可変", rule, {
    valid: [
        "長さは可変だ",
    ],
    invalid: [
        {
            text: "ウインドウ幅が可変すると",
            errors: [
                {
                    message: `「可変する」という使い方は適切ではありません。「可逆」と同じ使い方になります。\nhttp://qiita.com/scivola/items/f02589968a4ca27bc52b`,
                    index: 7
                }
            ]
        }
    ]
}),
tester.run("すべからく", rule, {
    invalid: [
        {
            text: "すべからく邁進しなければならない",
            errors: [
                {
                    message: `意味を間違えやすい副詞です。すべからく = 進んですべき、（当然）そうあるべき
        
参考:
- https://web.archive.org/web/20150825091657/http://japanknowledge.com/articles/blognihongo/entry.html?entryid=293`,
                }
            ]
        }
    ]
});