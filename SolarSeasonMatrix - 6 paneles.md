# SolarSeasonMatrix.md

## 🧭 Загальний опис
Конфігурація з 6 Ecoflow-панелей (100Вт, 23% ККД), встановлених на фермі з можливістю ручного коригування кута нахилу в вертикальній площині відповідно до сезонної висоти сонця. Мета — мінімізувати втрати продуктивності і забезпечити стабільний вихід ампер-годин.

## 🔋 Панельна структура

| Панелі | Потужність | Режим орієнтації                |
|--------|------------|----------------------------------|
| 6      | 600 Вт     | Ручне вертикальне позиціювання   |

## 🔧 Manual Angle Profile (рекомендовані кути)

| Сезон              | Кут нахилу | Примітка                        |
|--------------------|-------------|----------------------------------|
| Зима               | 70–80°      | Максимальний ухил до горизонту  |
| Весна / Осінь      | 50–60°      | Баланс між висотою і тривалістю |
| Літо               | 25–35°      | Менший кут через високе сонце   |

> 📌 Рекомендується налаштовувати кут кожні 1–2 місяці

## 📈 Орієнтовна продуктивність

| Показник                     | Значення                         |
|-----------------------------|----------------------------------|
| Теоретичний максимум         | ~722.7 кВт⋅год/рік               |
| З урахуванням ручної адаптації | ~650–680 кВт⋅год/рік            |
| Очікуваний середній ток      | ~18–20А                          |
| Зменшення сезонної амплітуди | ~20–30%                          |

## 💡 Ідеологія конструкції

- 🌿 Автономна система без автоматики, з елементом **контрольованої участі**
- 🧠 Ручне регулювання як **активна стратегія адаптації**
- 🔋 Вихід стабілізується в пікових і критичних сезонних умовах

## 📐 Можливості розширення

- `AngleSetter.js`: простий інтерфейс зміни кута в Horizon UI
- `SeasonalPlanner.md`: календар рекомендацій по кутах і прогнозах
- `EnergyGainReport.js`: оцінка виграшу продуктивності від ручного регулювання


## ☁️ Cloud Performance Block

### 🎯 Мета
Порівняння ефективності двох конфігурацій Horizon Solar в умовах розсіяного світла (хмарна погода), коли вплив кута мінімальний, а ключовими факторами стають площа, загальна потужність і розкиданість орієнтацій.

### 🛠️ Конфігурації

| Тип                 | Панелі | Потужність | Орієнтація                  |
|---------------------|--------|------------|-----------------------------|
| Фіксовані           | 8      | 800 Вт     | 10°, 30°, 50°, 70° (пари)   |
| Ручне регулювання   | 6      | 600 Вт     | Єдиний кут, адаптований вручну |

---

### 📊 Ефективність у хмарну погоду

| Конфігурація        | Ефективність (%) | Потужність (Вт) | Причини переваги                       |
|---------------------|------------------|------------------|----------------------------------------|
| 8 фіксованих         | 100%             | ~500–600 Вт      | Різні кути → краще вловлюють дифузне світло |
| 6 адаптивних         | ~75–80%          | ~400–480 Вт      | Менша площа + односпрямованість       |

---

### 📌 Висновок

- У хмарну погоду, **8 панелей мають перевагу на ~20–25% по вихідній потужності**, особливо в похмурі дні з розсіяною освітленістю.
- Проте, **6 панелей із ручним регулюванням мають перевагу в гнучкості й мобільності**, і показують майже ту саму продуктивність у сонячні дні.

---

## 🌿 Рекомендація

- Для максимізації **річного балансу енергії** — фіксована розкидана орієнтація.
- Для автономного контролю + економії місця — вертикальна регульована ферма.

---

👨‍🏭 Готовий продовжити з `SeasonalPlanner.md`, якщо хочеш прописати рекомендовані кути по місяцях? Або створити `SolarInsights.md`, щоб візуалізувати ці дані у вигляді графіків — під LinkedIn-допис 😎