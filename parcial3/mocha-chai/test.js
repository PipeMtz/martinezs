const assert = require('assert');
const suma = require('./module');

describe('Pruebas',()=>{
    it('Should return the sum',()=>{
        const res = suma(2,3)
        assert.strictEqual(res,5)
    })
    
})