const sequelize = require("../db")
const { DataTypes } = require("sequelize")



const People = sequelize.define("a_people", {
    id_people: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name_people: { type: DataTypes.STRING, allowNull: false },
    phone:      { type: DataTypes.STRING, allowNull: false }
},
    {
        tableName: "a_people",
        createdAt: false, updatedAt: false,
        timestamps: false,
        schema: process.env.POSTGRES_SCHEMA
    }
)


const DataOffices = sequelize.define("data_offices", {
    id_data_offices: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    sale_point_name: { type: DataTypes.STRING, allowNull: false },
    address: { type: DataTypes.STRING, allowNull: false },
    status :  { type: DataTypes.STRING, allowNull: false },
    id_open_hours : { type: DataTypes.INTEGER,allowNull: false  },
    rko : { type: DataTypes.STRING },
    id_open_hours_individual : { type: DataTypes.INTEGER },
    office_type : { type: DataTypes.STRING, allowNull: false },
    sale_point_format : { type: DataTypes.STRING, allowNull: false },
    suo_availability :  { type: DataTypes.STRING },
    has_ramp :{ type: DataTypes.STRING },
    latitude :{ type: DataTypes.STRING, allowNull: false },
    longitude :{ type: DataTypes.STRING, allowNull: false },
    metro_station :{ type: DataTypes.STRING },
    distance :{ type: DataTypes.STRING, allowNull: false },
    kep :{ type: DataTypes.BOOLEAN,  defaultValue: false },
    my_branch : { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false }
},
    {
        tableName: "data_offices",
        createdAt: false,
        updatedAt: false,
        timestamps: false,
        schema: process.env.POSTGRES_SCHEMA
    }
)

const OpenHours = sequelize.define("open_hours", {
    id_open_hours: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    monday_time: { type: DataTypes.STRING, allowNull: false },
    tuesday_time: { type: DataTypes.STRING, allowNull: false },
    wednesday_time: { type: DataTypes.STRING, allowNull: false },
    thursday_time: { type: DataTypes.STRING, allowNull: false },
    friday_time: { type: DataTypes.STRING, allowNull: false },
    saturday_time: { type: DataTypes.STRING, allowNull: false },
    sunday_time: { type: DataTypes.STRING, allowNull: false }
}, 
    {
        tableName: "open_hours",
        createdAt: false, 
        updatedAt: false,
        timestamps: false,
        schema: process.env.POSTGRES_SCHEMA
    }
)

const Astm = sequelize.define("astm",{
    id_astm: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    address: { type: DataTypes.STRING,  },
    latitude: { type: DataTypes.STRING,  },
    longitude: { type: DataTypes.STRING,  },
    allDay: { type: DataTypes.BOOLEAN,  defaultValue: false },
},
    {
        tableName: "astm",
        createdAt: false, 
        updatedAt: false,
        timestamps: false,
        schema: process.env.POSTGRES_SCHEMA 
    }
)

const Services = sequelize.define("services",{
    id_service: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name_service: { type: DataTypes.STRING,  },
},
    {
        tableName: "services",
        createdAt: false, 
        updatedAt: false,
        timestamps: false,
        schema: process.env.POSTGRES_SCHEMA 
    }
) 

const Office_Services = sequelize.define("office_services",{
    id_office_services: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    id_service: { type: DataTypes.INTEGER,   },
    id_office: { type: DataTypes.INTEGER,   },
    workload: { type: DataTypes.INTEGER, allowNull:false  },
},
    {
        tableName: "office_services",
        createdAt: false, 
        updatedAt: false,
        timestamps: false,
        schema: process.env.POSTGRES_SCHEMA 
    }
)

const Astm_Services = sequelize.define("astm_services",{
    id_astm_services: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    id_service: { type: DataTypes.INTEGER,   },
    id_astm: { type: DataTypes.INTEGER,   },
},
    {
        tableName: "astm_services",
        createdAt: false, 
        updatedAt: false,
        timestamps: false,
        schema: process.env.POSTGRES_SCHEMA 
    }
)

const Users = sequelize.define("a_users", {
    id_user: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    first_name: { type: DataTypes.STRING },
    last_name: { type: DataTypes.STRING },
    patronymic: { type: DataTypes.STRING },
    phone: { type: DataTypes.STRING, },
    email: { type: DataTypes.STRING, unique: true },
    login: { type: DataTypes.STRING, unique: true, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING },
    image: { type: DataTypes.STRING }
},
    {
        tableName: "a_users", 
        createdAt: false,
        updatedAt: false,
        timestamps: false,
        schema: process.env.POSTGRES_SCHEMA 
    }
)

const Roles = sequelize.define("a_roles", {
    id_role: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name_role: { type: DataTypes.STRING, allowNull: false }
},
    {
        tableName: "a_roles",
        createdAt: false, updatedAt: false,
        timestamps: false,
        schema: process.env.POSTGRES_SCHEMA 
    }
)

//DataOffices -< OpenHours
OpenHours.hasMany(DataOffices, { foreignKey: "id_open_hours" })
DataOffices.belongsTo(OpenHours, { foreignKey: "id_open_hours" })

//DataOffices -< OpenHours
OpenHours.hasMany(DataOffices, { foreignKey: "id_open_hours" })
DataOffices.belongsTo(OpenHours, { foreignKey: "id_open_hours_individual" })

//user -< role
Roles.hasMany(Users, { foreignKey: "id_role" })
Users.belongsTo(Roles, { foreignKey: "id_role" }) 




//Astm -< Astm_Services
Astm.hasMany(Astm_Services, { foreignKey: "id_astm" })
Astm_Services.belongsTo(Astm, { foreignKey: "id_astm" })
//Services -< Astm_Services
Services.hasMany(Astm_Services, { foreignKey: "id_service" })
Astm_Services.belongsTo(Services, { foreignKey: "id_service" })

//Office -< Office_Services
DataOffices.hasMany(Office_Services, { foreignKey: "id_office" })
Office_Services.belongsTo(DataOffices, { foreignKey: "id_office" })
//Services -< Office_Services
Services.hasMany(Office_Services, { foreignKey: "id_service" })
Office_Services.belongsTo(Services, { foreignKey: "id_service" })

module.exports = {
    People,
    DataOffices,
    OpenHours,
    Astm,
    Services,
    Astm_Services,
    Users,
    Roles,
    Office_Services
}