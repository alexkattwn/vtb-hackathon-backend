# VTB Hackathon

This project was generated with [React JS]

## Development server

Run `npm run dev` for a dev server. Navigate to `http://localhost:5000/api`. The application will automatically reload if you change any of the source files.
## API Documentation

[![N|Solid](https://img.freepik.com/premium-vector/flat-design-jesus-silhouette-illustration_23-2150329500.jpg)](https://nodesource.com/products/nsolid)

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

BackEnd Development on Express JS

# Roles

http://localhost:5000/api/roles

Описание:Отправляет запрос с записью данных о роли
Параметры: строка

#### - Post request

Запрос:

    {
        "name_role":"Юр. Лицо"
    }

Пример ожидаемого ответа :

    {
        "id_role": 4,
        "name_role": "Юр. Лицо"
    }

Если такая роль уже есть:

    {
        "message": "Такая роль уже существует: Юр. Лицо",
        "errors": []
    }

#### - Get request
##### getAll()
http://localhost:5000/api/roles

Получаем массив всех ролей:

    [
        {
            "id_role": 1,
            "name_role": "Клиент"
        },
        {
            "id_role": 2,
            "name_role": "Юридическое лицо"
        }
    ]


# Users

Описание:Отправляет запрос на регистрацию нового пользователя

#### - Post request
http://localhost:5000/api/auth/registration

Запрос:


    {
        "first_name":"first_name",
        "last_name":"last_name",
        "patronymic":"patronymic",
        "name_role":"пользователь",
        "phone":"89512377767",
        "email":"emai332l@mail.ru",
        "login":"loginapanina",
        "password":"loginapanina",
        "description":"description"
    }

Пример ожидаемого ответа :

    {
        "id_user": 1,
        "first_name": "first_name",
        "last_name": "last_name",
        "patronymic": "patronymic",
        "phone": "89512377767",
        "email": "emai332l@mail.ru",
        "login": "loginapanina",
        "password": "$2a$07$37w.HdkJ9/PQSRLkGeQ2BesJZkKsD4buNdolTSkTOXjwi7eFFkqOC",
        "description": "description",
        "id_role": 1,
        "image": null
    }

Если валидация номера телефона и почты не проходит:

    {
        "message": "Ошибка при валидации",
        "errors": [
            {
                "value": "emai332l@.ru",
                "msg": "Invalid value",
                "param": "email",
                "location": "body"
            }
        ]
    }

# Open Hours

http://localhost:5000/api/hours

Описание: Отправляет запрос с записью данных о времени работы банков и терминалов


#### - Post request

Запрос:

    {
        "monday_time": "09:00-18:00",
        "tuesday_time": "09:00-18:00",
        "wednesday_time": "09:00-18:00",
        "thursday_time": "09:00-18:00",
        "friday_time": "09:00-18:00",
        "saturday_time": "10:00-17:00",
        "sunday_time": "выходной"
    }

Пример ожидаемого ответа :

    {
        "id_open_hours": 2,
        "monday_time": "09:00-18:00",
        "tuesday_time": "09:00-18:00",
        "wednesday_time": "09:00-18:00",
        "thursday_time": "09:00-18:00",
        "friday_time": "09:00-18:00",
        "saturday_time": "10:00-17:00",
        "sunday_time": "выходной"
    }



#### - Get request

##### getAll()
http://localhost:5000/api/hours

Получаем массив всех ролей:

    [
        {
            "id_open_hours": 1,
            "monday_time": "09:00-18:00",
            "tuesday_time": "09:00-18:00",
            "wednesday_time": "09:00-18:00",
            "thursday_time": "09:00-18:00",
            "friday_time": "09:00-17:00",
            "saturday_time": "выходной",
            "sunday_time": "выходной"
        },
        {
            "id_open_hours": 2,
            "monday_time": "09:00-20:00",
            "tuesday_time": "09:00-20:00",
            "wednesday_time": "09:00-20:00",
            "thursday_time": "09:00-20:00",
            "friday_time": "09:00-20:00",
            "saturday_time": "10:00-17:00",
            "sunday_time": "выходной"
        },
        {
            "id_open_hours": 3,
            "monday_time": "10:00-18:00",
            "tuesday_time": "10:00-18:00",
            "wednesday_time": "10:00-18:00",
            "thursday_time": "10:00-18:00",
            "friday_time": "10:00-17:00",
            "saturday_time": "выходной",
            "sunday_time": "выходной"
        },
        {
            "id_open_hours": 4,
            "monday_time": "10:00-20:00",
            "tuesday_time": "10:00-20:00",
            "wednesday_time": "10:00-20:00",
            "thursday_time": "10:00-20:00",
            "friday_time": "10:00-20:00",
            "saturday_time": "10:00-17:00",
            "sunday_time": "выходной"
        },
        {
            "id_open_hours": 5,
            "monday_time": "10:00-19:00",
            "tuesday_time": "10:00-19:00",
            "wednesday_time": "10:00-19:00",
            "thursday_time": "10:00-19:00",
            "friday_time": "10:00-17:00",
            "saturday_time": "выходной",
            "sunday_time": "выходной"
        },
        {
            "id_open_hours": 6,
            "monday_time": "09:00-19:00",
            "tuesday_time": "09:00-19:00",
            "wednesday_time": "09:00-19:00",
            "thursday_time": "09:00-19:00",
            "friday_time": "09:00-19:00",
            "saturday_time": "10:00-17:00",
            "sunday_time": "выходной"
        }
    ]


##### getOneId()

http://localhost:5000/api/hours/1

Получаем запрашиваемый объект:

    {
        "id_open_hours": 1,
        "monday_time": "09:00-18:00",
        "tuesday_time": "09:00-18:00",
        "wednesday_time": "09:00-18:00",
        "thursday_time": "09:00-18:00",
        "friday_time": "09:00-17:00",
        "saturday_time": "выходной",
        "sunday_time": "выходной"
    }

# Data Office

http://localhost:5000/api/offices

Описание:Отправляет запрос с  данными о банках

#### - Post request

Запрос:

    {
        "sale_point_name": "ДО «Фрязино» Филиала № 7701 Банка ВТБ (ПАО)",
        "address": "141196, Московская область, г. Фрязино, пр-т Мира, д. 17, пом. 13",
        "status": "открытая",
        "id_open_hours": 1,
        "rko": null,
        "id_open_hours_individual": 2,
        "office_type": "да",
        "sale_point_format": "Розничный (РБ)",
        "suo_availability": "Y",
        "has_ramp": "N",
        "latitude": 55.956615,
        "longitude": 38.058323,
        "metroStation": null,
        "distance": 35413,
        "kep": false,
        "my_branch": false
    }

Пример ожидаемого ответа :

    {
        "id_data_offices": 12,
        "sale_point_name": "ДО «Фрязино» Филиала № 7701 Банка ВТБ (ПАО)",
        "address": "141196, Московская область, г. Фрязино, пр-т Мира, д. 17, пом. 13",
        "status": "открытая",
        "id_open_hours": 1,
        "rko": null,
        "id_open_hours_individual": 2,
        "office_type": "да",
        "sale_point_format": "Розничный (РБ)",
        "suo_availability": "Y",
        "has_ramp": "N",
        "latitude": "55.956615",
        "longitude": "38.058323",
        "metro_station": null,
        "distance": "35413",
        "kep": false,
        "my_branch": false
    }

#### - Get request

##### getAll()

http://localhost:5000/api/hours

Получаем массив всех ролей:

    [
        {
            "id_data_offices": 1,
            "sale_point_name": "ДО «На Баранова» Филиала № 7701 Банка ВТБ (ПАО)",
            "address": "141500, Московская область, г. Солнечногорск, ул. Баранова, д. 1, 1-й этаж",
            "status": "открытая",
            "id_open_hours": 1,
            "rko": "нет РКО",
            "id_open_hours_individual": 2,
            "office_type": "Да",
            "sale_point_format": "Стандарт",
            "suo_availability": null,
            "has_ramp": null,
            "latitude": "56.183239",
            "longitude": "36.9757",
            "metro_station": null,
            "distance": "62343",
            "kep": null,
            "my_branch": false
        },
        {
            "id_data_offices": 2,
            "sale_point_name": "ДО «Солнечногорский» Филиала № 7701 Банка ВТБ (ПАО)",
            "address": "141506, Московская область, г. Солнечногорск, ул. Красная, д. 60",
            "status": "открытая",
            "id_open_hours": 1,
            "rko": "есть РКО",
            "id_open_hours_individual": 2,
            "office_type": "Да (Зона Привилегия)",
            "sale_point_format": "Универсальный",
            "suo_availability": "Y",
            "has_ramp": "N",
            "latitude": "56.184479",
            "longitude": "36.984314",
            "metro_station": null,
            "distance": "62105",
            "kep": true,
            "my_branch": false
        },
    ]


##### getOneId()

http://localhost:5000/api/offices/ДО «Солнечногорский» Филиала № 7701 Банка ВТБ (ПАО)

Получаем запрашиваемый объект:

    {
        "id_data_offices": 2,
        "sale_point_name": "ДО «Солнечногорский» Филиала № 7701 Банка ВТБ (ПАО)",
        "address": "141506, Московская область, г. Солнечногорск, ул. Красная, д. 60",
        "status": "открытая",
        "id_open_hours": 1,
        "rko": "есть РКО",
        "id_open_hours_individual": 2,
        "office_type": "Да (Зона Привилегия)",
        "sale_point_format": "Универсальный",
        "suo_availability": "Y",
        "has_ramp": "N",
        "latitude": "56.184479",
        "longitude": "36.984314",
        "metro_station": null,
        "distance": "62105",
        "kep": true,
        "my_branch": false
    }

# Office Services

http://localhost:5000/api/officeService

Описание:Отправляет запрос с  данными о банках связанных с услугами

#### - Post request

Запрос:

    {
        "id_service":"4",
        "id_office":"9",
        "workload":34
    }

Пример ожидаемого ответа :

    {
        "id_office_services": 10,
        "id_service": 4,
        "id_office": 9,
        "workload": 34
    }

#### - Get request

##### getAll()

http://localhost:5000/api/officeService

Получаем массив всех ролей:

    [
    {
        "id_office_services": 1,
        "id_service": 1,
        "id_office": 10,
        "workload": 45
    },
    {
        "id_office_services": 2,
        "id_service": 2,
        "id_office": 1,
        "workload": 75
    },
    {
        "id_office_services": 3,
        "id_service": 5,
        "id_office": 5,
        "workload": 10
    },
    {
        "id_office_services": 4,
        "id_service": 2,
        "id_office": 2,
        "workload": 18
    },
    {
        "id_office_services": 5,
        "id_service": 6,
        "id_office": 2,
        "workload": 60
    },
    {
        "id_office_services": 6,
        "id_service": 3,
        "id_office": 4,
        "workload": 78
    },
    {
        "id_office_services": 7,
        "id_service": 1,
        "id_office": 6,
        "workload": 45
    },
    {
        "id_office_services": 8,
        "id_service": 5,
        "id_office": 8,
        "workload": 33
    },
    {
        "id_office_services": 9,
        "id_service": 5,
        "id_office": 2,
        "workload": 55
    },
    {
        "id_office_services": 10,
        "id_service": 4,
        "id_office": 9,
        "workload": 34
    }
    ]


##### getOneId()

http://localhost:5000/api/officeService/1

Получаем запрашиваемый объект:

    {
        "id_office_services": 1,
        "id_service": 1,
        "id_office": 10,
        "workload": 45
    }

# Services

http://localhost:5000/api/servic

Описание:Отправляет запрос с  данными  связанными с услугами

#### - Post request

Запрос:

    {
        "name_service": "Снять деньги"
    }

Пример ожидаемого ответа :

    {
        "id_service": 7,
        "name_service": "Снять деньги"
    }

#### - Get request

##### getAll()

http://localhost:5000/api/servic

Получаем массив всех ролей:

    [
    {
        "id_service": 1,
        "name_service": "Перевыпуск карты"
    },
    {
        "id_service": 2,
        "name_service": "Оформление кредита"
    },
    {
        "id_service": 3,
        "name_service": "Выписка лицевого счета"
    },
    {
        "id_service": 4,
        "name_service": "Оформление карты"
    },
    {
        "id_service": 5,
        "name_service": "Оформление вкладов"
    },
    {
        "id_service": 6,
        "name_service": "Инвестиции"
    },
    {
        "id_service": 7,
        "name_service": "Снять деньги"
    }
    ]


##### getOneId()

http://localhost:5000/api/servic/Перевыпуск карты

Получаем запрашиваемый объект:

    {
        "id_service": 1,
        "name_service": "Перевыпуск карты"
    }




