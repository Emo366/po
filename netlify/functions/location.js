exports.handler = async (event, context) => {
  if (event.httpMethod === 'POST') {
    const { latitude, longitude } = JSON.parse(event.body);

    if (latitude && longitude) {
      console.log(`Получена геолокация: Широта - ${latitude}, Долгота - ${longitude}`);

      return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Геолокация успешно получена!' })
      };
    } else {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: 'Ошибка: не удалось получить геолокацию.' })
      };
    }
  } else {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Метод не поддерживается.' })
    };
  }
};
