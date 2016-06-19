module.exports = [
    {
        // http://azu.github.io/morpheme-match/?text=今朝起きた事件に法律(を適応)する
        message: `"適用"の誤用である可能性があります。適応 => 適用`,
        expected: "を適用",
        tokens: [
            {
                "surface_form": "を",
                "pos": "助詞",
                "pos_detail_1": "格助詞",
                "pos_detail_2": "一般",
                "pos_detail_3": "*",
                "conjugated_type": "*",
                "conjugated_form": "*",
                "basic_form": "を",
                "reading": "ヲ",
                "pronunciation": "ヲ"
            },
            {
                "surface_form": "適応",
                "pos": "名詞",
                "pos_detail_1": "サ変接続",
                "pos_detail_2": "*",
                "pos_detail_3": "*",
                "conjugated_type": "*",
                "conjugated_form": "*",
                "basic_form": "適応",
                "reading": "テキオウ",
                "pronunciation": "テキオー"
            }
        ]
    },
    {
        // http://azu.github.io/morpheme-match/?text=長さを(可変する)
        message: `「可変する」という使い方は適切ではありません。「可逆」と同じ使い方になります。\nhttp://qiita.com/scivola/items/f02589968a4ca27bc52b`,
        tokens: [
            {
                "surface_form": "可変",
                "pos": "名詞",
                "pos_detail_1": "一般",
                "pos_detail_2": "*",
                "pos_detail_3": "*",
                "conjugated_type": "*",
                "conjugated_form": "*",
                "basic_form": "可変",
                "reading": "カヘン",
                "pronunciation": "カヘン"
            },
            {
                "pos": "動詞",
                "pos_detail_1": "自立"
            }
        ]

    }
];