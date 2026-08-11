export const menuData = {
  header: {
    title: {
      ar: "قائمة فشافيشو",
      he: "תפריט פאשאפישו",
      en: "Fashafesho Menu"
    }
  },
  categories: [
    {
      id: "fashafesh",
      title: { ar: "فشافيش", he: "פאשאפש", en: "Fashafesh" },
      subtitle: { ar: "عيش الألوان... ذوق السعادة!", he: "לחיות את הצבעים... לטעום את האושר!", en: "Live the colors... taste the happiness!" },
      items: [
        { id: "fashafesh_1", name: { ar: "قطعة واحدة", he: "יחידה אחת", en: "1 Piece" }, price: 2, color: "bg-pink-100", tagColor: "bg-pink-500", image: "fashafesh_1.jpg" },
        { id: "fashafesh_box", name: { ar: "بوكس (15 قطعة)", he: "מארז (15 יחידות)", en: "Box (15 pieces)" }, price: 25, color: "bg-purple-100", tagColor: "bg-purple-500", image: "fashafesh_box.jpg" }
      ]
    },
    {
      id: "sweets",
      title: { ar: "الحلويات", he: "קינוחים", en: "Sweets" },
      subtitle: { ar: "", he: "", en: "" },
      items: [
        { id: "donut", name: { ar: "دونات", he: "דונאטס", en: "Donut" }, price: 4, color: "bg-teal-100", tagColor: "bg-teal-500", image: "donut.jpg" },
        { id: "fish", name: { ar: "سمكة مع بوظة", he: "דג עם גלידה", en: "Fish with ice cream" }, price: 25, color: "bg-blue-100", tagColor: "bg-blue-500", image: "fish.jpg" },
        { id: "churros_6", name: { ar: "تشوروز (6 قطع)", he: "צ'ורוס (6 חתיכות)", en: "Churros (6 pieces)" }, price: 30, color: "bg-yellow-100", tagColor: "bg-yellow-500", image: "churros_6.jpg" },
        { id: "churros_balls", name: { ar: "تشوروز طابات (10 حبات)", he: "כדורי צ'ורוס (10 יחידות)", en: "Churros Balls (10 pieces)" }, price: 35, color: "bg-purple-100", tagColor: "bg-purple-500", image: "churros_balls.jpg" },
        { id: "churros_tear", name: { ar: "تشوروز دمعة", he: "טיפת צ'ורוס", en: "Churros Tear" }, price: 7, color: "bg-pink-200", tagColor: "bg-pink-600", image: "churros_tear.jpg" }
      ]
    },
    {
      id: "crepes",
      title: { ar: "الكريب", he: "קרפ", en: "Crepes" },
      subtitle: { ar: "", he: "", en: "" },
      items: [
        { id: "crepe_regular", name: { ar: "كريب", he: "קרפ", en: "Crepe" }, price: 20, color: "bg-purple-200", tagColor: "bg-purple-600", image: "crepe_regular.jpg" },
        { id: "crepe_sushi", name: { ar: "كريب سوشي", he: "קרפ סושי", en: "Sushi Crepe" }, price: 25, color: "bg-teal-200", tagColor: "bg-teal-600", image: "crepe_sushi.jpg" },
        { id: "crepe_fettuccine", name: { ar: "كريب فوتتشيني", he: "קרפ פטוצ'יני", en: "Fettuccine Crepe" }, price: 35, color: "bg-blue-200", tagColor: "bg-blue-600", image: "crepe_fettuccine.jpg" }
      ]
    },
    {
      id: "waffles",
      title: { ar: "البافل", he: "וופל", en: "Waffles" },
      subtitle: { ar: "", he: "", en: "" },
      items: [
        { id: "waffle_regular", name: { ar: "بافل", he: "וופל", en: "Waffle" }, price: 20, color: "bg-yellow-200", tagColor: "bg-yellow-600", image: "waffle_regular.jpg" },
        { id: "waffle_sticks", name: { ar: "بافل أصابع", he: "אצבעות וופל", en: "Waffle sticks" }, price: 10, color: "bg-pink-100", tagColor: "bg-pink-500", image: "waffle_fingers.jpg" },
        { id: "bubble_waffle", name: { ar: "بابل وافل", he: "באבל וופל", en: "Bubble Waffle" }, price: 35, color: "bg-purple-100", tagColor: "bg-purple-500", image: "bubble_waffle.jpg" }
      ]
    },
    {
      id: "american_ice_cream",
      title: { ar: "البوظة الأمريكية", he: "גלידה אמריקאית", en: "American Ice Cream" },
      subtitle: { ar: "", he: "", en: "" },
      items: [
        { id: "american_biscuit", name: { ar: "مع بسكويت", he: "עם ביסקוויט", en: "With Biscuit" }, price: 7, color: "bg-teal-100", tagColor: "bg-teal-500", image: "american_biscuit.jpg" },
        { id: "american_small", name: { ar: "علبة صغيرة", he: "בכוס קטנה", en: "Small Cup" }, price: 5, color: "bg-blue-100", tagColor: "bg-blue-500", image: "american_small.jpg" },
        { id: "american_medium", name: { ar: "علبة وسط", he: "בינוני", en: "Medium" }, price: 8, color: "bg-yellow-100", tagColor: "bg-yellow-500", image: "american_medium.jpg" },
        { id: "american_large", name: { ar: "علبة كبيرة", he: "גדול", en: "Large" }, price: 12, color: "bg-pink-200", tagColor: "bg-pink-600", image: "american_large.jpg" }
      ]
    },
    {
      id: "ice_cream_cup",
      title: { ar: "آيس كريم بالعلبة", he: "גלידה בכוס", en: "Ice Cream Cup" },
      subtitle: { ar: "", he: "", en: "" },
      items: [
        { id: "snow_thread", name: { ar: "بوظة خيوط الثلج", he: "גלידת חוטי שלג", en: "Snow Thread Ice Cream" }, price: 10, color: "bg-pink-200", tagColor: "bg-pink-600", image: "snow_thread.jpg" },
        { id: "cup_small_1", name: { ar: "صغير - طابة واحدة", he: "קטן - כדור אחד", en: "Small - 1 Scoop" }, price: 5, color: "bg-purple-200", tagColor: "bg-purple-600", image: "cup_small_1.jpg" },
        { id: "cup_small_2", name: { ar: "صغير - طابتين", he: "קטן - 2 כדורים", en: "Small - 2 Scoops" }, price: 8, color: "bg-teal-200", tagColor: "bg-teal-600", image: "cup_small_2.jpg" },
        { id: "cup_med_2", name: { ar: "وسط - طابتين", he: "בינוני - 2 כדורים", en: "Medium - 2 Scoops" }, price: 10, color: "bg-blue-200", tagColor: "bg-blue-600", image: "cup_med_2.jpg" },
        { id: "cup_med_3", name: { ar: "وسط - 3 طابات", he: "בינוני - 3 כדורים", en: "Medium - 3 Scoops" }, price: 12, color: "bg-yellow-200", tagColor: "bg-yellow-600", image: "cup_med_3.jpg" },
        { id: "cup_large_3", name: { ar: "كبير - 3 طابات", he: "גדול - 3 כדורים", en: "Large - 3 Scoops" }, price: 12, color: "bg-pink-100", tagColor: "bg-pink-500", image: "cup_large_3.jpg" },
        { id: "cup_large_4", name: { ar: "كبير - 4 طابات", he: "גדול - 4 כדורים", en: "Large - 4 Scoops" }, price: 15, color: "bg-purple-100", tagColor: "bg-purple-500", image: "cup_large_4.jpg" }
      ]
    },
    {
      id: "ice_cream_biscuit",
      title: { ar: "آيس كريم بالبسكويت", he: "גלידה בגביע", en: "Ice Cream Biscuit" },
      subtitle: { ar: "", he: "", en: "" },
      items: [
        { id: "cone_small_1", name: { ar: "صغير - طابة واحدة", he: "קטן - כדור אחד", en: "Small - 1 Scoop" }, price: 5, color: "bg-teal-100", tagColor: "bg-teal-500", image: "cone_small_1.jpg" },
        { id: "cone_small_2", name: { ar: "صغير - طابتين", he: "קטן - 2 כדורים", en: "Small - 2 Scoops" }, price: 8, color: "bg-blue-100", tagColor: "bg-blue-500", image: "cone_small_2.jpg" },
        { id: "cone_large_2", name: { ar: "كبير - طابتين", he: "גדול - 2 כדורים", en: "Large - 2 Scoops" }, price: 10, color: "bg-yellow-100", tagColor: "bg-yellow-500", image: "cone_large_2.jpg" },
        { id: "cone_large_3", name: { ar: "كبير - 3 طابات", he: "גדול - 3 כדורים", en: "Large - 3 Scoops" }, price: 13, color: "bg-pink-200", tagColor: "bg-pink-600", image: "cone_large_3.jpg" },
        { id: "cone_large_4", name: { ar: "كبير - 4 طابات", he: "גדול - 4 כדורים", en: "Large - 4 Scoops" }, price: 16, color: "bg-purple-200", tagColor: "bg-purple-600", image: "cone_large_4.jpg" }
      ]
    },
    {
      id: "beverages",
      title: { ar: "المشروبات", he: "משקאות", en: "Beverages" },
      subtitle: { ar: "", he: "", en: "" },
      items: [
        { id: "shake_pretzel", name: { ar: "ميلك شيك بيجلا", he: "מילקשייק בייגלה", en: "Pretzel Milkshake" }, price: 30, color: "bg-yellow-100", tagColor: "bg-yellow-500", image: "shake_pretzel.jpg" },
        { id: "shake_kinder", name: { ar: "ميلك شيك كيندر", he: "מילקשייק קינדר", en: "Kinder Milkshake" }, price: 30, color: "bg-yellow-200", tagColor: "bg-yellow-600", image: "shake_kinder.jpg" },
        { id: "shake_vanilla", name: { ar: "ميلك شيك فانيل", he: "מילקשייק וניל", en: "Vanilla Milkshake" }, price: 25, color: "bg-blue-100", tagColor: "bg-blue-500", image: "shake_vanilla.jpg" },
        { id: "shake_pistachio", name: { ar: "ميلك شيك فستق حلبي", he: "מילקשייק פיסטוק חלבי", en: "Pistachio Milkshake" }, price: 35, color: "bg-pink-100", tagColor: "bg-pink-500", image: "shake_pistachio.jpg" },
        { id: "shake_chocolate", name: { ar: "ميلك شيك شوكولاتة", he: "מילקשייק שוקולד", en: "Chocolate Milkshake" }, price: 25, color: "bg-purple-100", tagColor: "bg-purple-500", image: "shake_chocolate.jpg" },
        { id: "shake_lotus", name: { ar: "ميلك شيك لوتس", he: "מילקשייק לוטוס", en: "Lotus Milkshake" }, price: 30, color: "bg-teal-100", tagColor: "bg-teal-500", image: "shake_lotus.jpg" },
        { id: "fakhfakhina", name: { ar: "فخفخينا", he: "פחפחינא", en: "Fakhfakhina" }, price: 25, color: "bg-teal-100", tagColor: "bg-teal-500", image: "fakhfakhina.jpg" },
        { id: "mojito", name: { ar: "موخيتو", he: "מוחיטו", en: "Mojito" }, price: 27, color: "bg-blue-200", tagColor: "bg-blue-600", image: "mojito.jpg" },
        { id: "passiflora_small", name: { ar: "بسفلورا (صغير)", he: "פסיפלורה (קטן)", en: "Passiflora (Small)" }, price: 8, color: "bg-blue-100", tagColor: "bg-blue-500", image: "passiflora_small.jpg" },
        { id: "passiflora_large", name: { ar: "بسفلورا (كبير)", he: "פסיפלורה (גדול)", en: "Passiflora (Large)" }, price: 10, color: "bg-yellow-100", tagColor: "bg-yellow-500", image: "passiflora_large.jpg" },
        { id: "ice_cafe_small", name: { ar: "آيس كوفي (صغير)", he: "אייס קפה (קטן)", en: "Ice Cafe (Small)" }, price: 8, color: "bg-pink-200", tagColor: "bg-pink-600", image: "ice_cafe_small.jpg" },
        { id: "ice_cafe_large", name: { ar: "آيس كوفي (كبير)", he: "אייס קפה (גדול)", en: "Ice Cafe (Large)" }, price: 10, color: "bg-purple-200", tagColor: "bg-purple-600", image: "ice_cafe_large.jpg" }
      ]
    }
  ],
  options: {
    ice_cream: {
      title: { ar: "نكهات الآيس كريم", he: "טעמי גלידה", en: "Ice Cream Flavors" },
      items: [
        { id: "ic_lotus", name: { ar: "لوتس", he: "לוטוס", en: "Lotus" }, image: "ic_lotus.jpg" },
        { id: "ic_kinder", name: { ar: "كيندر", he: "קינדר", en: "Kinder" }, image: "ic_kinder.jpg" },
        { id: "ic_pretzel", name: { ar: "بيچلا", he: "בייגלה", en: "Pretzel" }, image: "ic_pretzel.jpg" },
        { id: "ic_halva", name: { ar: "حلاوة", he: "חלווה", en: "Halva" }, image: "ic_halva.jpg" },
        { id: "ic_chocolate", name: { ar: "شوكلاتة", he: "שוקולד", en: "Chocolate" }, image: "ic_chocolate.jpg" },
        { id: "ic_vanilla", name: { ar: "ڤانيل", he: "וניל", en: "Vanilla" }, image: "ic_vanilla.jpg" },
        { id: "ic_pistachio", name: { ar: "بستاشيو", he: "פיסטוק", en: "Pistachio" }, image: "ic_pistachio.jpg" },
        { id: "ic_oreo", name: { ar: "اوريو", he: "אוראו", en: "Oreo" }, image: "ic_oreo.jpg" },
        { id: "ic_sweet_berries", name: { ar: "توت بري حلو", he: "פירות יער מתוק", en: "Sweet Wild Berries" }, image: "ic_sweet_berries.jpg" },
        { id: "ic_wild_berries", name: { ar: "توت بري", he: "פירות יער", en: "Wild Berries" }, image: "ic_wild_berries.jpg" },
        { id: "ic_blue_marshmellow", name: { ar: "مارشميلو", he: "מרשמלו", en: "Blue Marshmellow" }, image: "ic_blue_marshmellow.jpg" }
      ]
    },
    additions: {
      title: { ar: "إضافات مميزة", he: "תוספות מיוחדות", en: "Special Additions" },
      items: [
        { id: "add_mm", name: { ar: "M&M", he: "M&M", en: "M&M" }, image: "add_mm.jpg" },
        { id: "add_marshmallow_pink_white", name: { ar: "مارشميلو", he: "מרשמלו", en: "Marshmellow" }, image: "add_marshmallow_pink_white.jpg" },
        { id: "add_white_choc_balls", name: { ar: "كرات شوكلاتة بيضاء", he: "כדורי שוקולד לבן", en: "White Chocolate Balls" }, image: "add_white_choc_balls.jpg" },
        { id: "add_oreo", name: { ar: "أوريو", he: "אוראו", en: "Oreo" }, image: "add_oreo.jpg" },
        { id: "add_lotus", name: { ar: "لوتس", he: "לוטוס", en: "Lotus" }, image: "add_lotus.jpg" },
        { id: "add_crushed_pistachio", name: { ar: "فستق مطحون", he: "פיסטוק גרוס", en: "Crushed Pistachio" }, image: "add_crushed_pistachio.jpg" },
        { id: "add_walnuts", name: { ar: "جوز", he: "אגוזים", en: "Walnuts" }, image: "add_walnuts.jpg" },
        { id: "add_sprinkles", name: { ar: "سبرينكلز", he: "סוכריות צבעוניות", en: "Sprinkles" }, image: "add_sprinkles.jpg" },
        { id: "add_peanuts", name: { ar: "مكسرات", he: "בוטנים", en: "Peanuts" }, image: "add_peanuts.jpg" }
      ]
    },
    fruits: {
      title: { ar: "فواكه", he: "פירות", en: "Fruits" },
      items: [
        { id: "fruit_pineapple", name: { ar: "اناناس", he: "אננס", en: "Pineapple" }, image: "fruit_pineapple.jpg" },
        { id: "fruit_watermelon", name: { ar: "بطيخ", he: "אבטיח", en: "Watermelon" }, image: "fruit_watermelon.jpg" },
        { id: "fruit_melon", name: { ar: "شُمام", he: "מלון", en: "Melon" }, image: "fruit_melon.jpg" },
        { id: "fruit_mango", name: { ar: "مانچا", he: "מנגו", en: "Mango" }, image: "fruit_mango.jpg" },
      ]
    },
    sauces: {
      title: { ar: "صوصات مميزة", he: "רטבים מיוחדים", en: "Special Sauces" },
      items: [
        { id: "sauce_white_chocolate", name: { ar: "شوكلاتة بيضاء", he: "שוקולד לבן", en: "White Chocolate" }, image: "sauce_white_chocolate.jpg" },
        { id: "sauce_chocolate", name: { ar: "نوتيلا", he: "נותילא", en: "nutella" }, image: "sauce_chocolate.jpg" },
        { id: "sauce_pistachio", name: { ar: "بستاشيو", he: "פיסטוק", en: "Pistachio" }, image: "sauce_pistachio.jpg" },
        { id: "sauce_crunchy_white_choc", name: { ar: "شوكلاتة بيضاء كرنشي", he: "שוקולד לבן קראנצ'י", en: "Crunchy White Chocolate" }, image: "sauce_crunchy_white_choc.jpg" },
        { id: "sauce_lotus", name: { ar: "لوتس", he: "לוטוס", en: "Lotus" }, image: "sauce_lotus.jpg" },
        { id: "sauce_marshmallow", name: { ar: "مارشميلو", he: "מרשמלו", en: "Marshmellow" }, image: "sauce_marshmallow.jpg" },
        { id: "sauce_kinder", name: { ar: "كيندر", he: "קינדר", en: "Kinder" }, image: "sauce_kinder.jpg" },
        { id: "sauce_caramel", name: { ar: "كراميل", he: "קרמל", en: "Caramel" }, image: "sauce_caramel.jpg" }
      ]
    }
  }
};
