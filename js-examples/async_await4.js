// 1. Це функція-імітатор сервера. Вона чекає 2 секунди і повертає дані.
function fakeFetchFromNetwork() {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Імітуємо, що сервер успішно повернув нам JSON-рядок
      resolve('{"currency": "USD", "rate": 41.50}');
    }, 2000); // 2000 мілісекунд = 2 секунди
  });
}

// 2. А це твоя головна асинхронна функція
async function LocalGetPrice() {
  try {
    console.log("Надсилаємо запит... Зачекайте 2 секунди...");

    // Перший await: чекаємо відповіді від нашого "сервера"
    const textData = await fakeFetchFromNetwork();

    console.log("Дані отримано у вигляді тексту:", textData);

    // Другий крок: безпечно перетворюємо текст на об'єкт
    const data = JSON.parse(textData);

    console.log(`Успіх! Курс ${data.currency} становить: ${data.rate} грн.`);
  } catch (error) {
    console.log("Сталася помилка:", error.message);
  }
}

// Запуск програми
LocalGetPrice();
