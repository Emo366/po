exports.handler = async (event, context) => {
  if (event.httpMethod === 'POST') {
    const { latitude, longitude } = JSON.parse(event.body);
    console.log(`Местоположение: широта ${latitude}, долгота ${longitude}`);

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*', // Разрешить запросы с любых источников
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: 'Местоположение получено.' }),
    };
  } else {
    return {
      statusCode: 405,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ message: 'Метод не поддерживается.' }),
    };
  }
};
