# textlint-rule-ja-no-abusage

よくある誤用をチェックするtextlintルール

- 「適応」と「適用」
    - [適用 vs 適応 - Qiita](http://qiita.com/magicant/items/229424403fee643b7075)
    - [設定は「適用」するものです。 - Qiita](http://qiita.com/yama-t/items/4f84ed6940682f62827f)


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
