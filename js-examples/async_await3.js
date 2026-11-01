async function getUSDPrice() {
  try {
    // Запит до НБУ (отримаємо курс долара в гривнях)
    const response = await fetch("https://bank.gov.ua");

    // 1. Перевірка на помилки сервера (404, 403, 500 тощо)
    if (!response.ok) {
      throw new Error(`Сервер повернув статус: ${response.status}`);
    }

    // 2. Отримуємо відповідь як чистий ТЕКСТ (це безпечно, навіть якщо там пусто)
    const textData = await response.text();

    // 3. ПЕРЕВІРКА: Якщо текст пустий, зупиняємо роботу
    if (!textData || textData.trim() === "") {
      throw new Error("Сервер прислав пусту відповідь (порожній рядок)!");
    }

    // 4. Тільки тепер перетворюємо перевірений текст на об'єкт JavaScript
    const data = JSON.parse(textData);

    // НБУ повертає масив об'єктів, беремо перший елемент [0]
    console.log(
      `Офіційний курс Долара в Україні: ${data[0].rate.toFixed(2)} грн`,
    );
  } catch (error) {
    // Будь-яка помилка з блоку try (мережа, пустий JSON, помилка сервера) потрапить сюди
    console.log("Помилка отримання курсу:", error.message);
  }
}

getUSDPrice();
