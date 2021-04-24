# textlint-rule-ja-no-abusage [![Actions Status: test](https://github.com/textlint-ja/textlint-rule-ja-no-abusage/workflows/test/badge.svg)](https://github.com/textlint-ja/textlint-rule-ja-no-abusage/actions?query=workflow%3A"test")

よくある誤用をチェックするtextlintルール

- 「適応」と「適用」
    - [適用 vs 適応 - Qiita](http://qiita.com/magicant/items/229424403fee643b7075)
    - [設定は「適用」するものです。 - Qiita](http://qiita.com/yama-t/items/4f84ed6940682f62827f)
- 「値を返却する」の誤用
    - [「値を返却する」って言うな - Qiita](http://qiita.com/scivola/items/d9f26ea13691f8c5e6a4 "「値を返却する」って言うな - Qiita")
- 「可変する」の誤用
    - [「可変する」という言葉](http://qiita.com/scivola/items/f02589968a4ca27bc52b#%E5%8F%AF%E5%A4%89%E3%81%99%E3%82%8B%E3%81%A8%E3%81%84%E3%81%86%E8%A8%80%E8%91%89 "「可変する」という言葉")
- 「例外を補足する」の誤用
    - [「例外を補足する」](http://qiita.com/scivola/items/f02589968a4ca27bc52b#%E4%BE%8B%E5%A4%96%E3%82%92%E8%A3%9C%E8%B6%B3%E3%81%99%E3%82%8B "「例外を補足する」")

など。詳細は辞書の定義を参照

- [dict/prh.yml](dict/prh.yml)
- [src/dictionary.ts](src/dictionary.ts)

## Install

Install with [npm](https://www.npmjs.com/):

    npm install textlint-rule-ja-no-abusage

## Usage

Via `.textlintrc`(Recommended)

```json
{
    "rules": {
        "ja-no-abusage": true
    }
}
```

Via CLI

```
textlint --rule ja-no-abusage README.md
```

## 仕組み

2種類の辞書ベースを持っています。

- 形態素解析結果をベースにした[morpheme-match](http://azu.github.io/morpheme-match/ "morpheme-match")
    - 誤爆しそうなものなど品詞レベルで限定したいものはこちら
- 正規表現をベースにした[textlint-rule-prh](https://github.com/azu/textlint-rule-prh "textlint-rule-prh")
    - 単純なマッチで問題ないものはこちら

の2種類を使い分けています。

## Changelog

See [Releases page](https://github.com/textlint-ja/textlint-rule-ja-no-abusage/releases).

## Running tests

Install devDependencies and Run `npm test`:

    npm i -d && npm test

## Contributing

Pull requests and stars are always welcome.

For bugs and feature requests, [please create an issue](https://github.com/textlint-ja/textlint-rule-ja-no-abusage/issues).

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Author

- [github/azu](https://github.com/azu)
- [twitter/azu_re](https://twitter.com/azu_re)

## License

MIT © azu
