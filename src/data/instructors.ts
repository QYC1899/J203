export interface Instructor {
  subject: string;
  name: string;
  ig: string | null; // null means unknown
}

export const instructors: Instructor[] = [
  { subject: "华文", name: "陈凯颖", ig: "kaiyintan__" },
  { subject: "国文", name: "Cikgu Munawwarah Rahim", ig: "munawwarahrahim_" },
  { subject: "英文", name: "蔡昊", ig: null },
  { subject: "数学", name: "李佩清", ig: "peiching2226" },
  { subject: "科学", name: "韩詠欣", ig: "catherine.g.z.w" },
  { subject: "历史", name: "曾月婷", ig: "y.ting_513" },
  { subject: "地理", name: "赵玮康", ig: "xiao_daizz" },
  { subject: "品德与素养", name: "李佩清", ig: "peiching2226" },
  { subject: "电脑", name: "曹子豪", ig: null },
];
