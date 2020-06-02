import Knex from "knex";

export async function seed(knex :Knex){
    await knex('items').insert([
        {title:'lampadas', image:'lampadas.svg'},
        {title:'Pilhas e Baterias', image:'baterias.svg'},
        {title:'Papeís e Papelão', image:'papeis-papelao.svg'},
        {title:'Residuos Eletrônicos', image:'eletronicos.svg'},
        {title:'Residuos Organicos', image:'organicos.svg'},
        {title:'Ôleo de cozinha', image:'oleo.svg'},
    ])
}