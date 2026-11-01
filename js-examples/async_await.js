// Слово 'async' робить функцію асинхронною
async function getQuote() {
  try {
    // 1. Робимо запит до сервера та чекаємо (await) на відповідь
    const response = await fetch("https://quotable.io");

    // 2. Перетворюємо "сиру" відповідь сервера у зручний формат об'єкта (JSON)
    const data = await response.json();

    // 3. Виводимо результат у консоль
    console.log(`Цитата: "${data.content}" — Автор: ${data.author}`);
  } catch (error) {
    // Якщо щось пішло не так (немає інтернету тощо), спрацює цей блок
    console.log("Ой, сталася помилка при завантаженні даних:", error);
  }
}

// Викликаємо нашу функцію
getQuote();
