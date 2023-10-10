import joi from 'joi'

export const schema = joi.object({
    nombre: joi.string().required(),
    edad: joi.number().required(),
    email: joi.string().email().required(),
})

