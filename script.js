document.getElementById('sendLocationBtn').addEventListener('click', () => {
  // Проверяем поддержку геолокации
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;

      // Отправляем данные на сервер
      fetch('http://localhost:3000/api/location', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ latitude, longitude }),
      })
      .then(response => response.json())
      .then(data => {
        alert('Геолокация отправлена успешно!');
      })
      .catch(error => {
        alert('Ошибка при отправке геолокации: ' + error);
      });
    }, (error) => {
      alert('Не удалось получить местоположение: ' + error.message);
    });
  } else {
    alert('Геолокация не поддерживается этим браузером.');
  }
});
