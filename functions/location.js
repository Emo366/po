exports.handler = async (event, context) => {
  if (event.httpMethod === 'POST') {
    const { latitude, longitude } = JSON.parse(event.body);
    console.log(`Местоположение: широта ${latitude}, долгота ${longitude}`);

    // Возвращаем успешный ответ
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Местоположение получено.' }),
    };
  } else {
    // Возвращаем ошибку, если метод не поддерживается
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Метод не поддерживается.' }),
    };
  }
};