export const countries = [
  {
    "id": 1,
    "name": "Казахстан",
  },
  {
    "id": 2,
    "name": "Россия",
  },
  {
    "id": 3,
    "name": "Украина",
  },
  {
    "id": 4,
    "name": "Армения",
  },
  {
    "id": 5,
    "name": "Азербайджан",
  },
  {
    "id": 6,
    "name": "Армения",
  },
  {
    "id": 7,
    "name": "Беларусь",
  },
  {
    "id": 8,
    "name": "Кыргызстан",
  },
  {
    "id": 9,
    "name": "Узбекистан",
  }
]
export const gorods = [
  {
    "id": 3,
    "name": "Нур-Султан(Астана)"
  }, {
    "id": 4,
    "name": "Актобе"
  }, {
    "id": 1,
    "name": "Алматы"
  }, {
    "id": 6,
    "name": "Атырау"
  }, {
    "id": 7,
    "name": "Усть-Каменогорск"
  }, {
    "id": 8,
    "name": "Тараз"
  }, {
    "id": 9,
    "name": "Уральск"
  }, {
    "id": 10,
    "name": "Караганды"
  }, {
    "id": 11,
    "name": "Костанай"
  }, {
    "id": 12,
    "name": "Кызылорда"
  }, {
    "id": 13,
    "name": "Актау"
  }, {
    "id": 14,
    "name": "Павлодар"
  }, {
    "id": 15,
    "name": "Петропавл"
  }, {
    "id": 16,
    "name": "Туркестан"
  }, {
    "id": 17,
    "name": "Шымкент"
  }
]

export const type = [
  {
    'id': 1,
    'name': 'Заказчик'
  }, {
    'id': 2,
    'name': 'Исполнитель'
  }, {
    'id': 3,
    'name': 'Заказчик и Исполнитель'
  }
]

export const user_type = [
  {
    'id': 1,
    'name': 'Физ. лицо'
  }, {
    'id': 2,
    'name': 'Юр. лицо'
  }
]


export const company_type = [
  {
    'id': 1,
    'name': 'TOO'
  }, {
    'id': 2,
    'name': 'ИП'
  }, {
    'id': 3,
    'name': 'АО'
  }
]


export const category = [
  {
    'id': 1,
    'name': 'Грузы'
  },
  {
    'id': 2,
    'name': 'Транспорт'
  }
]

export const subCategories = [
  {
    'id': 0,
    'name': 'Все'
  }, {
    'id': 1,
    'name': 'Авто'
  }, {
    'id': 2,
    'name': 'Авиа'
  }, {
    'id': 3,
    'name': 'ЖД'
  }, {
    'id': 4,
    'name': 'Морской'
  }, {
    'id': 5,
    'name': 'Мультимодальный'
  }
]

export const rentalType = [
  {
    'id': 1,
    'name': "час"
  },
  {
    'id': 2,
    'name': "день"
  },
  {
    'id': 3,
    'name': "месяц"
  },
  {
    'id': 4,
    'name': "год"
  }
]

export const todaysDate = () => {
  var today = new Date();

  return today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + today.getDate()).slice(-2)
}

export const paymentType=[
  {
    'id': 1,
    'value': '1',
    'name': "Безналичный"
  },
  {
    'id': 2,
    'value': '2',
    'name': "Наличный"
  },
  {
    'id': 3,
    'value': '3',
    'name': "На карту"
  }
]

export const currencies=[
  {
    'id': 1,
    'value': '1',
    'name': "Тенге, KZ"
  },
  {
    'id': 2,
    'value': '2',
    'name': "Рубль, RUB"
  },
  {
    'id': 3,
    'value': '3',
    'name': "Доллар, $"
  }
]