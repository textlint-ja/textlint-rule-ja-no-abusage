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
                    index: 8
                }
            ]
        }
    ]
});