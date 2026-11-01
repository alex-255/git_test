async function getCryptoPrice() {
  try {
    // Міняємо URL на Binance API
    const response = await fetch("https://binance.com");

    // ПЕРЕВІРКА: Якщо сервер повернув помилку (наприклад, 403 чи 404), зупиняємо процес
    if (!response.ok) {
      throw new Error(
        `Сервер повернув помилку зі статусом: ${response.status}`,
      );
    }

    const data = await response.json();

    // У Binance структура даних трохи інша, тому виводимо data.price
    console.log(`Поточний курс Bitcoin: $${parseFloat(data.price).toFixed(2)}`);
  } catch (error) {
    console.log("Помилка отримання курсу:", error.message);
  }
}

getCryptoPrice();
