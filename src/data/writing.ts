export interface Article {
  title: string;
  excerpt: string;
  date: string;
  lang: "en" | "tr";
  url: string;
}

export const writing: readonly Article[] = [
  {
    title: "AI Writes My Code, But My Job Didn’t Shrink",
    excerpt:
      "Field notes from an AI-assisted sprint where I completed every task through agents and barely touched a keyboard.",
    date: "2026-02-15",
    lang: "en",
    url: "https://medium.com/@receperdogan/ai-writes-my-code-but-my-job-didnt-shrink-field-notes-from-an-ai-assisted-sprint-f580c0231e50",
  },
  {
    title: "Yapay Zekâ ile Kodlarken Beynimize Ne Oluyor?",
    excerpt:
      'Üretkenlik sarhoşluğunun bedelini azalan öğrenme ile mi ödüyoruz? Kişisel bir deneyim ve MIT’nin "bilişsel borç" araştırması.',
    date: "2025-07-12",
    lang: "tr",
    url: "https://medium.com/@receperdogan/yapay-zeka-ile-kodlarken-beynimize-ne-oluyor-bir-yaz%C4%B1l%C4%B1m-m%C3%BChendisinin-bili%C5%9Fsel-bor%C3%A7-deneyimi-f1c0957866d5",
  },
  {
    title: "Yazılım Mühendisliğinde AI Yanılsaması",
    excerpt:
      "Daha çok kod yazıyoruz. Daha iyi yazılım geliştirmiyoruz. Hız illüzyonu neden mühendisliği törpülüyor?",
    date: "2025-04-05",
    lang: "tr",
    url: "https://medium.com/@receperdogan/yaz%C4%B1l%C4%B1m-m%C3%BChendisli%C4%9Finde-ai-yan%C4%B1lsamas%C4%B1-ee988fe260c9",
  },
  {
    title: "Kodlanmamış Potansiyel",
    excerpt:
      'Bir yazılımcının potansiyel üzerine düşünceleri — "There is no heavier burden than an unfulfilled potential."',
    date: "2025-01-30",
    lang: "tr",
    url: "https://medium.com/@receperdogan/kodlanmam%C4%B1%C5%9F-potansiyel-bir-yaz%C4%B1l%C4%B1mc%C4%B1n%C4%B1n-potansiyel-%C3%BCzerine-d%C3%BC%C5%9F%C3%BCnceleri-e61209c222e5",
  },
] as const;
