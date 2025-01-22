import { faker } from "@faker-js/faker";
import { memo } from "react";

const firstNames = [
  "علیرضا",
  "محمد",
  "زهرا",
  "امیر",
  "فاطمه",
  "رضا",
  "سارا",
  "نیلوفر",
  "منصور",
  "نرگس",
  "مهسا",
  "پریسا",
  "کامران",
  "شهرزاد",
  "حسین",
  "سینا",
  "الناز",
  "سهیل",
  "شبنم",
  "رها",
  "نادر",
  "راحله",
  "محسن",
  "مریم",
  "آرش",
  "مونا",
  "فرزاد",
  "مرجان",
  "نوشین",
  "بهرام",
  "پگاه",
  "شقایق",
  "وحید",
  "الهام",
  "بهنام",
  "صدیقه",
  "علی",
  "فرناز",
  "مجید",
  "آتنا",
  "کوروش",
  "میترا",
  "پارسا",
  "نوشین",
  "هومن",
  "فرزانه",
  "پویان",
  "سیمین",
  "شایان",
  "پروانه",
];

const lastNames = [
  "رضایی",
  "کریمی",
  "حسینی",
  "موسوی",
  "احمدی",
  "کاظمی",
  "جعفری",
  "صادقی",
  "نوری",
  "اکبری",
  "شریفی",
  "قاسمی",
  "هاشمی",
  "عابدی",
  "صمدی",
  "پورمحمدی",
  "عاشوری",
  "نوروزی",
  "یزدانی",
  "طاهری",
  "بیاتی",
  "آذری",
  "شفیعی",
  "پیرزاده",
  "دولت‌آبادی",
  "زارع",
  "عبدی",
  "سلیمانی",
  "امینی",
  "ابراهیمی",
  "کریمیان",
  "رستمی",
  "دشتی",
  "مقدم",
  "پناهی",
  "هادیان",
  "باقری",
  "عزیزی",
  "نادری",
  "قربانی",
  "رجبی",
  "توکلی",
  "فرهادی",
  "کمالی",
  "اسدی",
  "رادفر",
  "شفیق",
  "علوی",
  "خسروی",
];

const defaultComments = [
  "حجم {name_fa} قشنگ دو نفرست و با بهترین {ingredients} تهیه شده. پر از گوشت و مخلفات. واقعاً راضی بودم.",
  "{name_fa} کمی سرد به دست ما رسید اما کیفیت {ingredients} عالی بود.",
  "حجم {name_fa} خیلی خوبه، قشنگ ۲ نفره. تنها ایرادش کم بودن {ingredients} بود.",
  "{name_fa} از لحاظ طعم عالی بود و {ingredients} به‌خوبی استفاده شده بود. حجم غذا هم فوق‌العاده بود.",
  "کیفیت {ingredients} در {name_fa} بسیار مناسب بود، ولی مقدارش به نسبت حجم غذا کم بود.",
  "خیلی از {name_fa} راضی بودم، طعم {ingredients} عالی و بسته‌بندی مناسب بود.",
  "{name_fa} واقعاً خوشمزه و خوش‌طعم بود. حجمش عالی و {ingredients} به‌اندازه بود.",
  "{name_fa} عالی بود، مخصوصاً {ingredients} که کیفیت فوق‌العاده‌ای داشت.",
  "طعم {name_fa} شگفت‌انگیز بود! {ingredients} هم به‌خوبی تهیه شده بود.",
  "{name_fa} نسبت به قیمتش ارزش خرید داشت و {ingredients} به مقدار کافی در آن بود.",
  "مزه {name_fa} واقعاً عالی بود. {ingredients} تازه و خوش‌طعم بود.",
  "از بسته‌بندی و کیفیت {name_fa} کاملاً راضی بودم. {ingredients} هم به اندازه و مناسب بود.",
  "زمان تحویل {name_fa} کمی طولانی بود، اما {ingredients} تازه و خوش‌طعم بود.",
  "{name_fa} طعم بی‌نظیری داشت. مقدار {ingredients} خیلی خوب و کاملاً راضی‌کننده بود.",
  "بسته‌بندی {name_fa} خیلی زیبا و تمیز بود. {ingredients} هم فوق‌العاده با کیفیت بود.",
  "کیفیت {name_fa} با توجه به قیمت خیلی خوب بود. مقدار {ingredients} هم مناسب بود.",
  "{name_fa} کاملاً گرم به دستم رسید و {ingredients} هم به‌خوبی آماده شده بود.",
  "مقدار {name_fa} خیلی زیاد بود و با {ingredients} عالی طعم بهتری پیدا کرده بود.",
  "طعم {name_fa} خاص و عالی بود. {ingredients} به غذا حس متفاوتی می‌داد.",
  "{name_fa} یکی از بهترین غذاهایی بود که سفارش دادم. {ingredients} هم خیلی با کیفیت بود.",
];

// انتخاب یک جمله پیش‌فرض و جایگزینی placeholderها
const getRandomComment = (name_fa, ingredients) => {
  const randomTemplate =
    defaultComments[Math.floor(Math.random() * defaultComments.length)];
  return randomTemplate
    .replace("{name_fa}", name_fa)
    .replace("{ingredients}", ingredients);
};

const generateComments = (number_of_reviews, name_fa, extras) => {
  return Array.from({ length: number_of_reviews }).map(() => {
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    const comment = getRandomComment(name_fa, extras);

    return {
      name: firstName,
      lastName: lastName,
      date: faker.date.past().toLocaleDateString("fa-IR"),
      comment: comment,
      avatar: faker.image.avatar(),
    };
  });
};

const MenuDetailsFakeComment = memo(
  ({ number_of_reviews, name_fa, ingredients }) => {
    const fakeComments = generateComments(
      number_of_reviews,
      name_fa,
      ingredients,
    );
    return (
      <div className="flex flex-col">
        {fakeComments.map((comment, index) => (
          <div
            key={index}
            className="my-1 flex flex-col items-start space-y-2 rounded-lg bg-gray-200 p-2"
          >
            <div className="flex items-center gap-2">
              <img
                src={comment.avatar}
                alt={`${comment.name} ${comment.lastName}`}
                className="h-8 w-8 rounded-full"
              />
              <div className="ml-2 flex flex-col text-xs">
                <h4 className="text-sm font-bold">
                  {comment.name} {comment.lastName}
                </h4>
                <span>{comment.date}</span>
              </div>
            </div>
            <p className="text-xs">{comment.comment}</p>
          </div>
        ))}
      </div>
    );
  },
);

MenuDetailsFakeComment.displayName = "MenuDetailsFakeComment";

export default MenuDetailsFakeComment;
