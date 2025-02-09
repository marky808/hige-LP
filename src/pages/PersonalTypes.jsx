/**
 * Wealth-focused personality types
 * These types are characterized by their financial capability and management style
 */

export const PersonalTypes = {
    // Basic Step-by-Step Type (0000)
    "0000": {
      title: "できることからコツコツタイプ",
      description: "謙虚で現実的なあなたは、小さな努力の積み重ねが将来大きな成果へとつながるはずです。",
      investment: "向いている投資→ライフプランニングの作成、支出の削減、保険の見直し、転職、副業",
      details: [
        "無駄の見直しから始められる",
        "若さがあれば将来に希望あり",
        "基本的な見直しが有効",
        "収入増加の検討も有効"
      ],
      recommendations: [
        "ライフプランニングの作成",
        "支出の削減",
        "保険の見直し",
        "転職",
        "副業"
      ],
      expertise: "low",
      riskTolerance: "low",
      familyFocus: "low",
      wealthLevel: "low"
    },
    // Ultra-Risk Taker Type (0001)
    "0001": {
      title: "超絶危険思想",
      description: "ビジネスや経営者として大成功する可能性を秘めています。",
      investment: "",
      details: [
        "大胆なリスクテイクが可能",
        "まずは基本的な資産形成が必要",
        "自己投資が有効",
        "独身時代は成長のための投資を"
      ],
      recommendations: [
        "自己投資",
        "銀行預金",
        "保険の見直し",
        "支出の削減"
      ],
      expertise: "low",
      riskTolerance: "high",
      familyFocus: "low",
      wealthLevel: "low"
    },
    // Steady Growth Type (0010)
    "0010": {
      title: "コツコツタイプ",
      description: "未来に向けて自己責任で判断したい思いがありますが、現実的な制約があります。",
      investment: "",
      details: [
        "リスク回避的な性格",
        "将来の目標達成には計画が重要",
        "情報収集を継続的に行う必要性",
        "基礎からの資産形成が適している"
      ],
      recommendations: [
        "銀行預金",
        "保険",
        "iDeCo",
        "支出の削減"
      ],
      expertise: "high",
      riskTolerance: "low",
      familyFocus: "low",
      wealthLevel: "low"
    },
    // Curious Adventurer Type (0011)
    "0011": {
      title: "好奇心旺盛な冒険者タイプ",
      description: "勉強や情報収集が得意な一方で、現状分析や適切な手段を取ることが課題です。",
      investment: "",
      details: [
        "若さを活かしたリスクテイクが可能",
        "将来を見据えた目線が必要",
        "趣味の範囲でのリスク投資推奨",
        "家族ができた際の見直しが必要"
      ],
      recommendations: [
        "支出の削減",
        "副業",
        "転職",
        "昇給",
        "個別株や仮想通貨(少額)"
      ],
      expertise: "high",
      riskTolerance: "high",
      familyFocus: "low",
      wealthLevel: "low"
    },
    // Humble Success Type (0100)
    "0100": {
      title: "謙虚な成功者タイプ",
      description: "謙虚で着実、確実な成果を出すことが得意なタイプです。",
      investment: "",
      details: [
        "金銭管理の面で理想的",
        "着実な資産形成が可能",
        "正しい順序での実行が得意",
        "パートナーとの価値観の一致が重要"
      ],
      recommendations: [
        "ライフプランニングを基にした資産設計"
      ],
      expertise: "medium",
      riskTolerance: "low",
      familyFocus: "low",
      wealthLevel: "high"
    },
    // Business Leader Type (0101)
    "0101": {
      title: "仕事のできる司令塔タイプ",
      description: "着実に目の前のことを区別し、リスクを取ることもできるリーダータイプです。",
      investment: "",
      details: [
        "自制心があり成功の可能性が高い",
        "信頼できる情報源の確保が重要",
        "将来に向けたリスク管理が必要",
        "家族ができた際の見直しが必要"
      ],
      recommendations: [
        "NISA",
        "ヘッジファンド",
        "不動産投資"
      ],
      expertise: "medium",
      riskTolerance: "high",
      familyFocus: "low",
      wealthLevel: "high"
    },
    // Studious Professional Type (0110)
    "0110": {
      title: "勉強熱心な秀才タイプ",
      description: "地に足がついた真面目な性格の持ち主です。",
      investment: "",
      details: [
        "リスクを抑えた堅実な資産形成が得意",
        "パートナーから頼られる存在",
        "計画的な実行力がある",
        "情報収集力の向上が重要"
      ],
      recommendations: [
        "NISA",
        "iDeCo",
        "保険の積立"
      ],
      expertise: "high",
      riskTolerance: "low",
      familyFocus: "low",
      wealthLevel: "high"
    },
    // Elite Single Type (0111)
    "0111": {
      title: "独身貴族のエリート",
      description: "あなたは今までしっかり努力をして、自信があり度胸もあるエリートです。",
      investment: "",
      details: [
        "職場で結果を出し続けている",
        "冷静な判断が可能",
        "優れたバランス感覚の持ち主",
        "起業や独立の可能性も"
      ],
      recommendations: [
        "NISA",
        "株式投資",
        "仮想通貨",
        "起業",
        "不動産投資"
      ],
      expertise: "high",
      riskTolerance: "high",
      familyFocus: "low",
      wealthLevel: "high"
    },
    "1000": {
      title: "",
      description: "",
      investment: ""
    },
    "1001": {
      title: "",
      description: "",
      investment: ""
    },
    // Steady Growth Type (1010)
    "1010": {
      title: "努力型堅実タイプ",
      description: "堅実な考え方と地に足がついた判断ができます。",
      investment: "",
      details: [
        "プライドが高く努力家",
        "方向性の見直しが必要な可能性あり",
        "家庭のお金を増やすことへの意識が重要",
        "資金力の向上が課題"
      ],
      recommendations: [
        "支出の見直し",
        "職場での昇給",
        "副業",
        "転職"
      ],
      expertise: "high",
      riskTolerance: "low",
      familyFocus: "high",
      wealthLevel: "low"
    },
    // Adventurous Risk-Taker Type (1011)
    "1011": {
      title: "一発逆転、冒険者タイプ",
      description: "現状の資金面について向き合う必要がありますが、大きな可能性を秘めています。",
      investment: "",
      details: [
        "知識吸収と自己判断が得意",
        "収入を上げる努力が必要",
        "ギャンブル的な投資に注意が必要",
        "家族のために意識を変える必要性あり"
      ],
      recommendations: [
        "支出の見直し",
        "副業",
        "転職",
        "独立"
      ],
      expertise: "high",
      riskTolerance: "high",
      familyFocus: "high",
      wealthLevel: "low"
    },
    // Humble Success Type (1100)
    "1100": {
      title: "謙虚堅実、成功者タイプ",
      description: "あなたはとても謙虚で欲をかかず努力をできるタイプです。",
      investment: "",
      details: [
        "資産形成において非常に成功しやすい性質",
        "やるべきことと任せるべきことの区別が明確",
        "地に足がついた判断が可能",
        "パートナーと担当者の選択が重要"
      ],
      recommendations: [
        "ライフプランニングを基にした総合的な資産設計"
      ],
      expertise: "medium",
      riskTolerance: "low",
      familyFocus: "high",
      wealthLevel: "high"
    },
    // Commander Type (1101)
    "1101": {
      title: "他人を頼れる司令塔タイプ",
      description: "あなたは謙虚さを持ち合わせた優秀なリーダータイプです。",
      investment: "",
      details: [
        "自分にできないことを適切に他者に任せられる",
        "リーダーとしての責任を受け入れることができる",
        "投資において大きな成果を得る可能性がある",
        "会社や担当者の選定が重要なポイント"
      ],
      recommendations: [
        "個別株",
        "不動産投資",
        "ヘッジファンド"
      ],
      expertise: "medium",
      riskTolerance: "high",
      familyFocus: "high",
      wealthLevel: "high"
    },
    // Steady Professional Type (1110)
    "1110": {
      title: "堅実秀才",
      description: "着実に現状を築いてきたあなた。堅実な努力が安定した資産形成を導きます。",
      investment: "向いている投資→NISA、iDeCo、積立保険",
      details: [
        "自分自身のことをしっかりと把握することができる",
        "浮かれることなく冷静な判断が可能",
        "堅実性や真面目さを活かして着実に資産を増やせる"
      ],
      recommendations: [
        "NISA",
        "iDeCo",
        "積立保険"
      ],
      expertise: "high",
      riskTolerance: "low",
      familyFocus: "high",
      wealthLevel: "high"
    },
    "1111": {
      title: "エリート大黒柱タイプ",
      description: "あなたは非常に優秀で、自己責任を持って物事を進められる力があります。どんな困難にも挑戦し、失敗も成長の糧にできるでしょう。",
      investment: "向いている投資→NISA、株式投資、仮想通貨、不動産投資",
      details: [
        "何事も自己責任で判断することができ、今まで結果を出してきた",
        "リスクを取ることも恐れず、失敗も成長の糧に",
        "積極的に新しい知識を取り入れて投資にチャレンジ可能"
      ],
      recommendations: [
        "NISA",
        "株式投資",
        "仮想通貨",
        "不動産投資"
      ],
      expertise: "high",
      riskTolerance: "high",
      familyFocus: "high",
      wealthLevel: "high"
    }
};
