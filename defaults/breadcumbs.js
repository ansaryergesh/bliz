export const breadcumbs = 
    {
       'Личный информация':'/cabinet',
       'Изменить пароль' : '/cabinet/password',
       'Объявления': '/cabinet/posts',
       'Сотрудники' : '/cabinet/workers',
       'Заявки' : '/cabinet/requests',
       'Баланс': '/cabinet/balance',
       'Избранное' : '/cabinet/favourites',
       'Удалить аккаунт' : '/cabinet/delete',
       'Уведомления' : '/cabinet/notification',
       'Документы' : '/cabinet/documents',
       'Грузы' : '/cargo',
       'Транспорт': '/cargo/transport',
       'Аукцион': '/cargo/auction',
       'Расчет расстояний': '/cargo/distance',
       'Проверка компаний': '/cargo/check',
       'Склады' : '/cargo',
       'Добавить обьявление' : '/cargo/add',
       
    }

export const getBreadCumpActive = (object, value) => {
    object = breadcumbs;
    return Object.keys(object).find(key => object[key] === value);
}
    




