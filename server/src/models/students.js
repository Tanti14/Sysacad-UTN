const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define("students", {

        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'El nombre es requerido'
                }
            }
        },
        apellido: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'El apellido es requerido'
                }
            }
        },
        legajo: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            unique: true,
            autoIncrement: true
        },
        dni: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'El DNI es requerido'
                }
            }
        },
        localidad: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'La localidad es requerida'
                }
            }
        },
        pais: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'El pais requerido'
                }
            }
        },
        carrera: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'La carrera es requerida'
                }
            }
        }
    },
    {timestamps: false},
    {updatedAt: false},
    {createdAt: false}
    );
};