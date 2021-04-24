import rule from "../src/textlint-rule-ja-no-abusage";
import TextLintTester from "textlint-tester";

const tester = new TextLintTester();
// ruleName, rule, { valid, invalid }
tester.run("textlint-rule-no-confusing-adjust-and-apply", rule, {
    valid: [
        // correct 適応
        "新料金プランが新たに適応される",
        "沖縄の暑い気候に体が適応する",
        "企業が市場の変化に適応するために事業戦略を変更する",
        "海から陸に上がった生物が地上の環境に適応する",
        "挿入ソートアルゴリズムは予めある程度ソートされたデータに適応する",
        "花粉症に適応する薬",
        "変化に適応する",
        // correct 適用
        "不具合への対応として、データパッチを適用する",
        "HTML 文書にスタイルシートを適用する",
        "関数を値に適用する",
        "クイックソートアルゴリズムを乱数列に適用する",
        "修正パッチをプログラムに適用する",
        "経営に失敗した企業に会社更生法を適用する",
        "厚生年金の適用",
        "規定を適用",
        "法律を適用",
        "読みづらい"
    ],
    invalid: [
        {
            text: "`logger`と`crashReporter`のmiddlewareを適応した`createStore`関数を作る",
            output: "`logger`と`crashReporter`のmiddlewareを適用した`createStore`関数を作る",
            errors: [
                {
                    message: `"適用"の誤用である可能性があります。適応 => 適用`,
                    index: 35
                }
            ]
        }, {
            text: "次に、 _middleware_ を適応する処理となる `applyMiddleware`を実装していきます。",
            output: "次に、 _middleware_ を適用する処理となる `applyMiddleware`を実装していきます。",
            errors: [
                {
                    message: `"適用"の誤用である可能性があります。適応 => 適用`
                }
            ]
        }, {
            text: "_middleware_ に対しても扱える機能の制限を適応しやすい",
            output: "_middleware_ に対しても扱える機能の制限を適用しやすい",
            errors: [
                {
                    message: `"適用"の誤用である可能性があります。適応 => 適用`
                }
            ]
        }, {
            text: "今朝起きた事件に法律を適応する",
            output: "今朝起きた事件に法律を適用する",
            errors: [
                {
                    message: `"適用"の誤用である可能性があります。適応 => 適用`
                }
            ]
        }, {
            text: "入院費用に保険を適応する",
            output: "入院費用に保険を適用する",
            errors: [
                {
                    message: `"適用"の誤用である可能性があります。適応 => 適用`
                }
            ]
        }, {
            text: "このやり方を適応する",
            output: "このやり方を適用する",
            errors: [
                {
                    message: `"適用"の誤用である可能性があります。適応 => 適用`
                }
            ]
        },
        {
            text: "この本は読みずらい",
            output: "この本は読みづらい",
            errors: [
                {
                    message: `動詞の連用形+辛い（つらい）の場合は、「ずらい」ではなく「づらい」が適切です。
        
参考: 
- https://www.nhk.or.jp/bunken/summary/kotoba/uraomote/023.html
- https://ameblo.jp/writer-yama/entry-10522384501.html`
                }
            ]
        },
        {
            text: "この本は書きずらい",
            output: "この本は書きづらい",
            errors: [
                {
                    message: `動詞の連用形+辛い（つらい）の場合は、「ずらい」ではなく「づらい」が適切です。
        
参考: 
- https://www.nhk.or.jp/bunken/summary/kotoba/uraomote/023.html
- https://ameblo.jp/writer-yama/entry-10522384501.html`
                }
            ]
        }
    ]
});
